import React, { useState, useEffect } from 'react';
import { Form, Card, Select, Row, Col, DatePicker, Button } from 'antd';
import { appStores } from '@/store/index';
import { observer } from 'mobx-react';
import './index.less';
import PosterSrv from '@/services/poster';
import moment from 'moment';
import TodayData from './dataPanel/TodayData';
import MonthlyLiveData from './dataPanel/MonthlyLiveData';
import DataFiltering from './dataPanel/DataFiltering';
import ExportJsonExcel from '@/components/js-export-excel';
import DateChart from './dataPanel/DateChart';

const { RangePicker } = DatePicker;
const FormItem = Form.Item;
const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
export default observer(() => {
  const { commonStore } = appStores();
  const [formVals, setFormVals] = useState({
    isvId: '',
    timeForMonthly: [moment(), moment()], // 月活数据时间筛选
    timeForChart: [moment().subtract(30, 'days'), moment()], // 数据图表时间筛选
    timeForAdvanced: [], // 数据筛选时间筛选
    pageForm: {
      pageNo: 1,
      pageSize: 10,
    },
  });

  const [todayData, setTodayData] = useState({});
  const [yesterdayData, setYesterdayData] = useState({});
  const [totalData, setTotalData] = useState({});
  const [monthlyData, setMonthlyData] = useState([]);
  const [summaryData, setSummaryData] = useState([]);
  const [singleData, setSingleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({});

  // 默认选中微盛租户数据
  useEffect(() => {
    const filter = commonStore.isvList.filter(v => v.isvName === '微盛');

    if (filter.length) {
      setFormVals({ ...formVals, isvId: filter[0].id });
    }
  }, [commonStore.isvList]);

  useEffect(() => {
    loadBasicData();
    loadMonthlyData();
    loadChartData();
    loadAdvancedData();
  }, [formVals.isvId]);

  useEffect(() => {
    loadMonthlyData();
  }, [formVals.timeForMonthly]);

  useEffect(() => {
    loadChartData();
  }, [formVals.timeForChart]);

  useEffect(() => {
    loadAdvancedData();
  }, [formVals.timeForAdvanced]);

  // 今日数据（今日数据、昨日数据）、总览数据
  const loadBasicData = async () => {
    if (formVals.isvId === '') {
      return;
    }
    // 今日数据
    PosterSrv.today(formVals).then(res => {
      setTodayData(res);
    });

    // 昨日数据
    PosterSrv.interval({
      ...formVals,
      startTime: moment().subtract(1, 'days')
        .format('YYYY-MM-DD'),
      endTime: moment().subtract(1, 'days')
        .format('YYYY-MM-DD'),
    }).then(res => {
      setYesterdayData(res);
    });

    // 总览数据
    PosterSrv.total(formVals).then(res => {
      setTotalData(res);
    });
  };

  // 加载数据图表数据
  const loadChartData = () => {
    if (formVals.timeForChart === null || formVals.isvId === '') {
      setChartData('');
      return;
    }
    const condition = {
      ...formVals,
      startTime: formVals.timeForChart[0] ? formVals.timeForChart[0].format('YYYY-MM-DD') : [],
      endTime: formVals.timeForChart[1] ? formVals.timeForChart[1].format('YYYY-MM-DD') : [],
      pageForm:
      {
        pageNo: 1,
        pageSize: 100000,
      },
    };
    const promise1 = PosterSrv.periodTotal(condition);
    const promise2 = PosterSrv.list(condition);

    // 两端数据都获取后再进行下一步操作
    Promise.all([promise1, promise2]).then(values => {
      let res = {};
      values.forEach(value => {
        const result = {};
        const data = value.data || value.records.reverse();
        data.forEach(record => Object.keys(record).forEach(key => (result[key]
          ? result[key].push(record[key]) : (result[key] = [record[key]]))));
        res = { ...res, ...result };
      });
      setChartData(res);
    });
  };

  const handleAdvancedChange = (dates, dateStrings) => {
    setFormVals({
      ...formVals,
      timeForAdvanced: dateStrings,
    });
  };

  // ######## START  月活数据  START #############

  const handleSelectMonth = date => {
    setFormVals({ ...formVals, timeForMonthly: date });
  };

  const loadMonthlyData = async () => {
    if (formVals.timeForMonthly === null || formVals.isvId === '') {
      setMonthlyData('');
      return;
    }
    PosterSrv.monthliving({
      ...formVals,
      startTime: formVals.timeForMonthly[0] ? formVals.timeForMonthly[0].format('YYYY-MM') : '',
      endTime: formVals.timeForMonthly[1]  ? formVals.timeForMonthly[1].format('YYYY-MM') : '',
    }).then(res => {
      setMonthlyData(res);
      setLoading(false);
    });
  };

  const renderMonthlyData = () => <div>
    <h3 className="title-header title-left-border">月活数据</h3>
    <div className="monthactive">
      <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
        <Col md={12} sm={24}>
          <FormItem {...formItemLayout} label="时间范围" className="lookBoard-month-timepicker">
            <RangePicker defaultValue={formVals.timeForMonthly} onChange={handleSelectMonth} picker="month" className="dateChart-timepicker" />
          </FormItem>
        </Col>
        <Col md={12} sm={24}>
          <Button className="monthbutton" type="primary" style={{ float: 'right' }} onClick={() => downloadMonthlyExcel()}>
            导出数据
            </Button>
        </Col>
      </Row>
    </div>
  </div>;

  // ######## END  月活数据  END#############

  // 数据加载——数据筛选
  const loadAdvancedData = () => {
    if (formVals.isvId === '') {
      return;
    }
    const condition = {
      ...formVals,
      startTime: formVals.timeForAdvanced.length === 2 ? formVals.timeForAdvanced[0] : null,
      endTime: formVals.timeForAdvanced.length === 2 ? formVals.timeForAdvanced[1] : null,
      pageForm: {
        pageNo: 1,
        pageSize: 9999,
      },
    };
    if (formVals.isvId === '') {
      console.log('嘻嘻');
      return;
    }
    // 总量数据
    PosterSrv.interval(condition).then(res => {
      setSummaryData(res);
      setLoading(false);
    });
    // 单日数据
    PosterSrv.list(condition).then(res => {
      setSingleData(res);
      setLoading(false);
    });
  };

  // 月活数据————导出数据按钮，下载月活数据表格
  const downloadMonthlyExcel = () => {
    const data = monthlyData;// 表格数据
    const option = {};
    const dataTable = [];
    if (data) {
      Object.values(data).forEach(item => {
        const obj = {
          时间: item?.month,
          活跃企业数: item?.monthlyActivateCompanyNum,
          活跃用户数: item?.monthlyActivateUserNum,
        };
        dataTable.push(obj);
      });
    }
    option.fileName = '月活数据';
    option.datas = [
      {
        sheetData: dataTable,
        sheetName: 'sheet',
        sheetFilter: ['时间', '活跃企业数', '活跃用户数'],
        sheetHeader: ['时间', '活跃企业数', '活跃用户数'],
      },
    ];
    const toExcel = new ExportJsonExcel(option);
    toExcel.saveExcel();
  };

  // ######## START  租户信息  START #############
  const handleIsvChange = e => {
    setFormVals({ ...formVals, isvId: e });
  };

  const renderIsv = () => <Form>
    <FormItem label="租户信息" >
      <Select className="dateChart-isvSelect" style={{ width: '300px' }} defaultValue={'微盛'} onChange={handleIsvChange}>
        {commonStore.isvList.map(v => (
          <Option key={v.id} value={v.id}>
            {v.isvName}
          </Option>
        ))}
      </Select>
    </FormItem>
  </Form>;
  // ######## START  租户信息  START #############

  const handleChartChange = date => {
    setFormVals({ ...formVals, timeForChart: date });
  };

  // 数据图表
  const renderChartForm = () => <Form className="form-container">
    <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
      <Col md={12} sm={24}>
        {/* 时间范围 */}
        <FormItem {...formItemLayout} label="时间范围" className="lookBoard-month-timepicker">
          <RangePicker className="dateChart-timepicker" defaultValue={formVals.timeForChart} onChange={handleChartChange} />
        </FormItem>
      </Col>
    </Row>
  </Form>;

  // 数据筛选
  const renderAdvancedForm = () => <div>
    <h3 className="title-header title-left-border">数据筛选</h3>
    <Form className="form-container">
      <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
        <Col md={12} sm={24}>
          <FormItem {...formItemLayout} label="时间范围" className="lookBoard-month-timepicker">
            <RangePicker defaultValue={formVals.timeForAdvanced} className="dateChart-timepicker" onChange={handleAdvancedChange} />
          </FormItem>
        </Col>
      </Row>
    </Form>
  </div>;

  return (
    <Card bordered={false} style={{ width: '100%' }}>
      {renderIsv()}
      <TodayData
        totalData={totalData}
        todayData={todayData}
        yesterdayData={yesterdayData}
      ></TodayData>

      {renderMonthlyData()}
      <MonthlyLiveData
        monthlyData={monthlyData}
        loading={loading}
      ></MonthlyLiveData>

      <h3 className="title-header title-left-border">数据图表</h3>
      {renderChartForm()}
      <DateChart chartData={chartData}></DateChart>

      {/* 数据筛选 */}
      {renderAdvancedForm()}
      <DataFiltering
        summaryData={summaryData}
        singleData={singleData}
      ></DataFiltering>

    </Card>
  );
});


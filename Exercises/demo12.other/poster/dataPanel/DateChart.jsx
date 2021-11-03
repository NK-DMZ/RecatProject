import React, { useState, useEffect } from 'react';
import { Row, Col, Checkbox } from 'antd';
import ReactECharts from 'echarts-for-react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import '../index.less';
import { Form } from '@ant-design/compatible';


const formItemLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 21 },
};

const FormItem = Form.Item;
const defaultCheckedList = ['companyNum', 'activiteCompanyNum'];
const CheckboxGroup = Checkbox.Group;

const plainOptions = [
  { label: '新增企业数', value: 'companyNum' },
  { label: '活跃企业数', value: 'activiteCompanyNum' },
  { label: '有作品企业数', value: 'sceneCompanyNum' },
  { label: '新增用户数', value: 'userNum' },
  { label: '活跃用户数', value: 'activiteUserNum' },
  { label: '有作品用户数', value: 'sceneUserNum' },
  { label: '下载用户数', value: 'downloadUserNum' },
  { label: '新增模板数', value: 'templateNum' },
  { label: '新增作品数', value: 'sceneNum' },
  { label: '企业总数', value: 'totalCompanyNum' },
  { label: '用户总数', value: 'totalUserNum' },
  { label: '作品总数', value: 'totalSceneNum' },
  { label: '模版总数', value: 'totalTemplateNum' },
  { label: '下载用户总数', value: 'totalDownloadUserNum' },
];
const chartOption = {
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: [],
    selected: {},
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [],
  },
  yAxis: {
    type: 'value',
  },
  series: [],
};

const DateChart = observer(props => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [chartOptions, setchartOption] = useState(chartOption);

  useEffect(() => {
    const selected = {};
    plainOptions.forEach(option => {
      if (!checkedList.includes(option.value)) {
        selected[option.label] = false;
      }
    });
    // console.log(selected, 'selected.....');
    setchartOption({
      ...chartOptions,
      series: plainOptions.map(option => ({
        name: option.label,
        type: 'line',
        data: props.chartData[option.value],
      })),
      xAxis: {
        data: props.chartData.dateTime,
      },
      legend: {
        data: plainOptions.map(option => option.label),
        selected,
      },
    });
  }, [props.chartData, checkedList]);

  // 数据图表————全选
  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? plainOptions.map(option => option.value) : []);
  };

  // 数据图表————数据项修改加载函数
  const onChangeDataList = checkedList => {
    setCheckedList(checkedList);
  };

  return (
    <div>
      <Form className="form-container">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={24} sm={24}>
            {/* 数据项 */}
            <FormItem {...formItemLayout} label="数据项">
              <Checkbox
                onChange={onCheckAllChange}
              >全选</Checkbox>
              <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChangeDataList} />
            </FormItem>
          </Col>
        </Row>
      </Form>
      <ReactECharts
        notMerge
        option={chartOptions}
      />
    </div>
  );
});

DateChart.propTypes = {
  chartData: PropTypes.object,
};
export default DateChart;

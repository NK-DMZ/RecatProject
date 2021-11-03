import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import '../index.less';
import PropTypes from 'prop-types';
import { Form } from '@ant-design/compatible';
import { Table, Button } from 'antd';
import ExportJsonExcel from '@/components/js-export-excel';

// 总量数据表格数据源
const columnSum = [
  {
    title: '日期',
    dataIndex: 'id',
    key: 'id',
    align: 'center',
    render: () => `${formVals.startTime ? `${formVals.startTime}至` : '至今'}${formVals.endTime ? formVals.endTime : ''}`,
  },
  {
    title: '新增企业数',
    dataIndex: 'intervalCompanyNum',
    key: 'intervalCompanyNum',
    align: 'center',
  },
  {
    title: '活跃企业数',
    dataIndex: 'intervalActiviteCompanyNum',
    key: 'intervalActiviteCompanyNum',
    align: 'center',
  },
  {
    title: '新增用户数',
    key: 'intervalUserNum',
    dataIndex: 'intervalUserNum',
    align: 'center',
  },
  {
    title: '活跃用户数',
    key: 'intervalActiviteUserNum',
    dataIndex: 'intervalActiviteUserNum',
    align: 'center',
  },
  {
    title: '新增模版数',
    key: 'intervalTemplateNum',
    dataIndex: 'intervalTemplateNum',
    align: 'center',
  },
  {
    title: '新增作品数',
    key: 'intervalSceneNum',
    dataIndex: 'intervalSceneNum',
    align: 'center',
  },
  {
    title: '有作品企业数',
    key: 'intervalSceneCompanyNum',
    dataIndex: 'intervalSceneCompanyNum',
    align: 'center',
  },
  {
    title: '有作品用户数',
    key: 'intervalSceneUserNum',
    dataIndex: 'intervalSceneUserNum',
    align: 'center',
  },
  {
    title: '下载用户数',
    key: 'intervalDownloadUserNum',
    dataIndex: 'intervalDownloadUserNum',
    align: 'center',
  },
  // {
  //   title: '作品下载数',
  //   key: 'downloadSceneNum',
  //   dataIndex: 'downloadSceneNum',
  // },
];
const formVals = {
  isvId: '',
  startTime: null,
  endTime: null,
  pageForm: {
    pageNo: 1,
    pageSize: 15,
  },
};
// 数据筛选-单日数据-表格数据源
const columns = [
  {
    title: '日期',
    dataIndex: 'dateTime',
    key: 'dateTime',
    align: 'center',
  },
  {
    title: '新增企业数',
    dataIndex: 'companyNum',
    key: 'companyNum',
    align: 'center',
  },
  {
    title: '活跃企业数',
    dataIndex: 'activiteCompanyNum',
    key: 'activiteCompanyNum',
    align: 'center',
  },
  {
    title: '新增用户数',
    key: 'userNum',
    dataIndex: 'userNum',
    align: 'center',
  },
  {
    title: '活跃用户数',
    key: 'activiteUserNum',
    dataIndex: 'activiteUserNum',
    align: 'center',
  },
  {
    title: '新增模版数',
    key: 'templateNum',
    dataIndex: 'templateNum',
    align: 'center',
  },
  {
    title: '新增作品数',
    key: 'sceneNum',
    dataIndex: 'sceneNum',
    align: 'center',
  },
  {
    title: '有作品企业数',
    key: 'sceneCompanyNum',
    dataIndex: 'sceneCompanyNum',
    align: 'center',
  },
  {
    title: '有作品用户数',
    key: 'sceneUserNum',
    dataIndex: 'sceneUserNum',
    align: 'center',
  },
  {
    title: '下载用户数',
    key: 'downloadUserNum',
    dataIndex: 'downloadUserNum',
    align: 'center',
  },
];
const dataFiltetings = observer(props => {
  const { summaryData, singleData, loading } = props;
  // 总量数据
  const cloneData = {
    id: 1,
    // 活跃企业数
    intervalActiviteCompanyNum: summaryData?.intervalActiviteCompanyNum,
    // 活跃用户数
    intervalActiviteUserNum: summaryData?.intervalActiviteUserNum,
    // 新增企业数
    intervalCompanyNum: summaryData?.intervalCompanyNum,
    // 新增作品数
    intervalSceneNum: summaryData?.intervalSceneNum,
    // 新增用户数
    intervalUserNum: summaryData?.intervalUserNum,
    // 新增模块数
    intervalTemplateNum: summaryData?.intervalTemplateNum,
    // 下载用户数
    intervalDownloadUserNum: summaryData?.intervalDownloadUserNum,
    intervalSceneCompanyNum: summaryData?.intervalSceneCompanyNum,
    intervalSceneUserNum: summaryData?.intervalSceneUserNum,
  };

  useEffect(() => {
    // console.log(singleData.records);
  });

  // 下载表格数据
  const downloadExcel = type => {
    const data = type === 'singleData' ? singleData.records : [summaryData];// 表格数据
    const option = {};
    const dataTable = [];
    if (data) {
      Object.values(data).forEach(item => {
        const obj = {
          日期: type === 'singleData' ? item?.dateTime : `${formVals.startTime ? `${formVals.startTime}至` : '至今'}${formVals.endTime ? formVals.endTime : ''}`,
          新增企业数: type === 'singleData' ? item?.companyNum : item?.intervalCompanyNum,
          活跃企业数: type === 'singleData' ? item?.activiteCompanyNum : item?.intervalActiviteCompanyNum,
          新增用户数: type === 'singleData' ? item?.userNum : item?.intervalUserNum,
          活跃用户数: type === 'singleData' ? item?.activiteUserNum : item?.intervalActiviteUserNum,
          新增模版数: type === 'singleData' ? item?.templateNum : item?.intervalTemplateNum,
          新增作品数: type === 'singleData' ? item?.sceneNum : item?.intervalSceneNum,
          有作品企业数: type === 'singleData' ? item?.sceneCompanyNum : item?.intervalSceneCompanyNum,
          有作品用户数: type === 'singleData' ? item?.sceneUserNum : item?.intervalSceneUserNum,
          下载用户数: type === 'singleData' ? item?.downloadUserNum : item?.intervalDownloadUserNum,
        };
        dataTable.push(obj);
      });
    }
    console.log(dataTable);
    option.fileName = type === 'singleData' ? '单日数据' : '总量数据';
    option.datas = [
      {
        sheetData: dataTable,
        sheetName: 'sheet',
        sheetFilter: ['日期', '新增企业数', '活跃企业数', '新增用户数', '活跃用户数', '新增模版数', '新增作品数', '有作品企业数', '有作品用户数', '下载用户数'],
        sheetHeader: ['日期', '新增企业数', '活跃企业数', '新增用户数', '活跃用户数', '新增模版数', '新增作品数', '有作品企业数', '有作品用户数', '下载用户数'],
      },
    ];
    const toExcel = new ExportJsonExcel(option);
    toExcel.saveExcel();
  };


  return (
    <div>
      <h4 className="title-header">
      总量数据
      <Button type="primary" style={{ float: 'right' }} onClick={() => downloadExcel('summaryData')}>
          导出数据
      </Button>
      </h4>
      <Table
      align="center"
      pagination={false}
      loading={loading}
      columns={columnSum}
      dataSource={[cloneData]}
      rowKey={summaryData => summaryData.id}
      className="form-container"
      />

      <h4 className="title-header">
      单日数据
      <Button type="primary" style={{ float: 'right' }} onClick={() => downloadExcel('singleData')}>
          导出数据
      </Button>
      </h4>
      <Table
      align="center"
      loading={loading}
      columns={columns}
      dataSource={singleData.records}
      rowKey={ record => record.id}
      pagination={{
        position: ['bottomRight'],
        // 设置总条数
        total: singleData.total,
        // 显示总条数
        showTotal: total => `共 ${total} 条`,
        pageSize: 10,
        showSizeChanger: false,
      }}
      />
    </div>
  );
});
// 对传进来的数据进行限制，不能放在开头，不然会报错，无法在初始化前访问TodayData
dataFiltetings.propTypes = {
  form: PropTypes.object,
  totalData: PropTypes.object || null,
  todayData: PropTypes.object || null,
  yesterdayData: PropTypes.object || null,
};
const DataFilteting = Form.create()(dataFiltetings);
export default DataFilteting;
// 此文件是  数据概览  -  海报-数据看板  -  数据筛选  组件

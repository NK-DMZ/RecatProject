import React, { useEffect } from 'react';
import { Table, Button } from 'antd';
import ExportJsonExcel from 'js-export-excel';

// 总量数据表格数据源
const columnSum = [
  {
    title: '日期',
    dataIndex: 'id',
    key: 'id',
    align: 'center',
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
];

// 数据筛选-单日数据-表格数据源

const ExportExcel =()=>{
    const cloneData = {
      id: '2021-9-15',
      intervalActiviteCompanyNum: 5864,
      intervalActiviteUserNum: 8458,
      intervalCompanyNum: 1854,
      intervalSceneNum: 84459,
      intervalUserNum: 4451,
      intervalTemplateNum: 695,
      intervalDownloadUserNum: 85,
      intervalSceneCompanyNum: 62,
      intervalSceneUserNum: 754,
    };
  
    useEffect(() => {
      // console.log(singleData.records);
    });
  
    // 下载表格数据
    const downloadExcel = type => {
      const data =cloneData;// 表格数据
      const option = {};
      const dataTable = [];
      if (data) {
        Object.values(data).forEach(() => {
          const obj = {
            日期:'2021-9-15',
            新增企业数: cloneData.intervalCompanyNum,
            活跃企业数: cloneData.intervalActiviteCompanyNum,
            新增用户数: cloneData.intervalUserNum,
            活跃用户数: cloneData.intervalActiviteUserNum,
            新增模版数: cloneData.intervalTemplateNum,
            新增作品数: cloneData.intervalSceneNum,
            有作品企业数: cloneData.intervalSceneCompanyNum,
            有作品用户数: cloneData.intervalSceneUserNum,
            下载用户数: cloneData.intervalDownloadUserNum,
          };
          dataTable.push(obj);
        });
      }
      option.fileName ='总量数据';
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
        columns={columnSum}
        dataSource={[cloneData]}
        rowKey={summaryData => summaryData.id}
        className="form-container"
        />
      </div>
    );
}

export default ExportExcel;
// 此文件是  数据概览  -  海报-数据看板  -  数据筛选  组件


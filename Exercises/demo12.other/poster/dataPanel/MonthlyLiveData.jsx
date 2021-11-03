import React, {  } from 'react';
import { observer } from 'mobx-react';
import '../index.less';
import PropTypes from 'prop-types';
import { Form } from '@ant-design/compatible';
import { Table } from 'antd';

const month = observer(props => {
  const { monthlyData, loading } = props;
  // 月活数据-表格数据源
  const columnmonthly = [
    {
      title: '时间',
      dataIndex: 'month',
      key: 'month',
      align: 'center',
    },
    {
      title: '活跃企业数',
      dataIndex: 'monthlyActivateCompanyNum',
      key: 'monthlyActivateCompanyNum',
      align: 'center',
    },
    {
      title: '活跃用户数',
      key: 'monthlyActivateUserNum',
      dataIndex: 'monthlyActivateUserNum',
      align: 'center',
    },
  ];
  return (
    <div>
       <Table
        align="center"
        pagination={false}
        loading={loading}
        columns={columnmonthly}
        rowKey={monthlyData => monthlyData.month}
        dataSource={monthlyData}
        className="form-container-monthly"
        ></Table>
        <br /><br />
    </div>
  );
});

month.propTypes = {
  form: PropTypes.object,
};
const MonthlyLiveData = Form.create()(month);
export default MonthlyLiveData;

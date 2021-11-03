import React, { Component } from 'react';
import { Card, Table, Row, Col, DatePicker, Select, Button, Modal } from 'antd';
import { Form } from '@ant-design/compatible';
import QRCodeSrv from '@/services/qrcode';
import PosterSrv from '@/services/poster';
import ExportJsonExcel from '@/components/js-export-excel';
import PropTypes from 'prop-types';
import './index.less';
import moment from 'moment';
const { RangePicker } = DatePicker;
const FormItem = Form.Item;
const { Option } = Select;

const plainOptions = [
  { label: '新增企业', value: '1' },
  { label: '活跃企业', value: '2' },
  { label: '不活跃企业', value: '3' },
  { label: '有作品企业', value: '4' },
  { label: '新增用户', value: '5' },
  { label: '活跃用户', value: '6' },
  { label: '有作品用户', value: '7' },
];

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const CreateForm = Form.create()(props => {
  const { modalVisible, record, handleModalVisible } = props;

  return (
    <Modal destroyOnClose title="活码预览" visible={modalVisible} footer={false} onCancel={() => handleModalVisible()}>
      <img src={record}></img>
    </Modal>
  );
});


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVals: {
        isvId: '',
        dataType: '',
        startTime: null,
        endTime: null,
        pageForm: {
          pageNo: 1,
          pageSize: 15,
        },
      },
      loading: false,
      isvList: [],
      singleData: {
        total: 0,
        records: [],
      },
    };
  }
  componentDidMount() {
    const { formVals } = this.state;
    // 租户信息
    QRCodeSrv.isvList(formVals).then(res => {
      const filter = res.records.filter(record => record.isvName === '微盛');
      this.setState({
        isvList: res.records,
        formVals: Object.assign({}, formVals, {
          isvId: filter.length ? filter[0].id : '',
        }),
      });
    });
  }


  handleSelect = value => {
    const { formVals } = this.state;
    this.setState(
      {
        formVals: Object.assign({}, formVals, {
          isvId: value,
          pageForm: {
            pageNo: 1,
            pageSize: 15,
          },
        }),
      },
      () => this.loadAdvancedData(),
    );
  };

  handleOptionSelect = value => {
    const { formVals } = this.state;
    this.setState(
      {
        formVals: Object.assign({}, formVals, {
          dataType: value,
          pageForm: {
            pageNo: 1,
            pageSize: 15,
          },
        }),
      },
      () => this.loadAdvancedData(),
    );
  };

  handleRangePickerChange = (dates, dateStrings) => {
    const { formVals } = this.state;

    this.setState(
      {
        formVals: Object.assign({}, formVals, {
          startTime: dateStrings[0] ? dateStrings[0] : null,
          endTime: dateStrings[1] ? dateStrings[1] : null,
          pageForm: {
            pageNo: 1,
            pageSize: 15,
          },
        }),
      },
      () => this.loadAdvancedData(),
    );
  };


  renderBasicForm() {
    const { isvList } = this.state;

    return (
      <Form className="form-container">
        <Row gutter={16}>
          <Col md={12} sm={24}>
            <FormItem {...formItemLayout} label="选择租户" className="title-header">
              <Select style={{ width: '300px' }} defaultValue={'微盛'} onSelect={this.handleSelect}>
                {isvList.map(v => (
                  <Option key={v.id} value={v.id}>
                    {v.isvName}
                  </Option>
                ))}
              </Select>
            </FormItem>
            <FormItem {...formItemLayout} label="选择数据项" className="title-header">
              <Select style={{ width: '300px' }} onSelect={this.handleOptionSelect}>
                {plainOptions.map(v => (
                  <Option key={v.value} value={v.value}>
                    {v.label}
                  </Option>
                ))}
              </Select>
            </FormItem>
            <FormItem {...formItemLayout} label="时间范围">
              <RangePicker style={{ width: '300px' }} onChange={this.handleRangePickerChange} />
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }


  // 时间范围数据加载
  loadAdvancedData = () => {
    const { formVals } = this.state;

    // 总量数据
    PosterSrv.dataList(formVals).then(
      res => {
        this.setState({ singleData: res, loading: false });
      },
      () => {
        this.setState({ singleData: {}, loading: false });
      },
    );
  };


  downloadExcel = () => {
    const { singleData, formVals } = this.state;

    const type = ['1', '2', '3', '4'].includes(formVals.dataType);
    const data = singleData.records;// 表格数据
    const option = {};
    const dataTable = [];
    if (data) {
      Object.values(data).forEach(item => {
        const obj = type ? {
          企业ID: item.outCompanyId,
          企业名称: item.companyName,
        } : {
          员工ID: item.staffId,
          企业ID: item.outCompanyId,
          员工名称: item.staffName,
          企业名称: item.companyName,
          员工手机号: item.staffPhone,
          员工邮箱: item.staffEmail,
          员工活码: item.staffQr,
          注册时间: item.createTime,
          最后登录时间: item.lastModifyTime,
        };
        dataTable.push(obj);
      });
    }
    option.fileName = type ? '企业数据' : '用户数据';
    const columns = type ? ['企业ID', '企业名称'] : ['员工ID', '企业ID', '员工名称', '企业名称', '员工手机号', '员工邮箱', '员工活码', '注册时间', '最后登录时间'];
    option.datas = [
      {
        sheetData: dataTable,
        sheetName: 'sheet',
        sheetFilter: columns,
        sheetHeader: columns,
      },
    ];

    const toExcel = new ExportJsonExcel(option);
    toExcel.saveExcel();
  }

  handleModalVisible = (flag, record) => {
    this.setState({
      modalVisible: !!flag,
      record: record || '',
    });
  };


  // eslint-disable-next-line complexity
  render() {
    const {
      loading,
      singleData,
      formVals,
      modalVisible,
      record,
    } = this.state;
    const type = ['1', '2', '3', '4'].includes(formVals.dataType);

    const companyColumns = [
      {
        title: '企业ID',
        dataIndex: 'outCompanyId',
        key: 'outCompanyId',
      },
      {
        title: '企业名称',
        dataIndex: 'companyName',
        key: 'companyName',
      },
    ];

    const staffColumns = [
      {
        title: '员工ID',
        dataIndex: 'staffId',
        key: 'staffId',
      },
      {
        title: '企业ID',
        dataIndex: 'outCompanyId',
        key: 'outCompanyId',
      },
      {
        title: '员工名称',
        dataIndex: 'staffName',
        key: 'staffName',
      },
      {
        title: '企业名称',
        key: 'companyName',
        dataIndex: 'companyName',
      },
      {
        title: '员工手机号',
        key: 'staffPhone',
        dataIndex: 'staffPhone',
      },
      {
        title: '员工邮箱',
        key: 'staffEmail',
        dataIndex: 'staffEmail',
      },
      {
        title: '员工活码',
        key: 'staffQr',
        dataIndex: 'staffQr',
        render: record => (
          <Button type="primary" onClick={() => this.handleModalVisible(true, record)}>
            活码预览
          </Button>
        ),
      },
      {
        title: '注册时间',
        key: 'createTime',
        dataIndex: 'createTime',
        render: record => (record ? moment(record).format('YYYY-MM-DD HH:mm:ss') : ''),
      },
      {
        title: '最后登录时间',
        key: 'lastModifyTime',
        dataIndex: 'lastModifyTime',
        render: record => (record ? moment(record).format('YYYY-MM-DD HH:mm:ss') : ''),
      },
    ];

    const parentMethods = {
      handleModalVisible: this.handleModalVisible,
      modalVisible,
      record,
    };

    return (
      <Card bordered={false} style={{ width: '100%' }}>
        <div>{this.renderBasicForm()}</div>


        <Button type="primary" style={{ float: 'right' }} onClick={this.downloadExcel}>
          导出数据
        </Button>


        <Table
          align="center"
          loading={loading}
          columns={type ? companyColumns : staffColumns}
          dataSource={singleData.records}
          rowKey={record => record.id}
          pagination={{
            position: ['bottomLeft'],
            // 设置总条数
            total: singleData.total,
            // 显示总条数
            showTotal: total => `共 ${total} 条`,
            current: formVals.pageForm.pageNo,
            pageSize: 15,

            showSizeChanger: false,

            // 改变页码时
            onChange: (page, pageSize) => {
              this.setState(
                {
                  formVals: Object.assign(formVals, {
                    pageForm: {
                      pageNo: page,
                      pageSize,
                    },
                  }),
                },
                () => {
                  this.loadAdvancedData();
                },
              );
            },
          }}
        />
        <CreateForm {...parentMethods} />
      </Card>
    );
  }
}

List.propTypes = {
  form: PropTypes.object,
};

const WrappedForm = Form.create()(List);
export default WrappedForm;

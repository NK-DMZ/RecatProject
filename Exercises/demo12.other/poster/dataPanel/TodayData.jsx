import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { Form } from '@ant-design/compatible';
import { observer } from 'mobx-react';
import '../index.less';
import PropTypes from 'prop-types';
// import { Form } from '@ant-design/compatible';

const StatisticComponent = props => (
  <div className="statistic-wrapper">
    <div className="statistic-title">
      <span>{props?.title}</span>
      <span>{props?.titleCount}</span>
    </div>
    <div className="statistic-detail">
      <span>{props?.detail}</span>
      <span>{props?.detailCount}</span>
    </div>
  </div>
);

StatisticComponent.propTypes = {
  title: PropTypes.string,
  titleCount: PropTypes.number,
  detail: PropTypes.string,
  detailCount: PropTypes.number,
};

const today = observer(props => {
  const { totalData, todayData, yesterdayData } = props;
  const todaydataList = [
    {
      title: '新增企业数',
      todayContent: todayData?.companyNum,
      yesterdayContent: yesterdayData?.intervalCompanyNum,
    },
    {
      title: '活跃企业数',
      todayContent: todayData?.activiteCompanyNum,
      yesterdayContent: yesterdayData?.intervalActiviteCompanyNum,
    },
    {
      title: '新增用户数',
      todayContent: todayData?.userNum,
      yesterdayContent: yesterdayData?.intervalUserNum,
    },
    {
      title: '活跃用户数',
      todayContent: todayData?.activiteUserNum,
      yesterdayContent: yesterdayData?.intervalActiviteUserNum,
    },
    {
      title: '新增模板数',
      todayContent: todayData?.templateNum,
      yesterdayContent: yesterdayData?.intervalTemplateNum,
    },
    {
      title: '新增作品数',
      todayContent: todayData?.sceneNum,
      yesterdayContent: yesterdayData?.intervalSceneNum,
    },
    {
      title: '下载用户数',
      todayContent: todayData?.downloadUserNum,
      yesterdayContent: yesterdayData?.intervalDownloadUserNum,
    },
  ];
  const totaldataList = [
    {
      title: '企业总数',
      content: totalData?.totalCompanyNum,
    },
    {
      title: '用户总数',
      content: totalData?.totalUserNum,
    },
    {
      title: '模板总数',
      content: totalData?.totalTemplateNum,
    },
    {
      title: '作品总数',
      content: totalData?.totalSceneNum,
    },
    {
      title: '下载用户总数',
      content: totalData?.totalDownloadUserNum,
    },
    {
      title: '30日新增企业数',
      content: totalData?.thirtyCompanyNum,
    },
    {
      title: '30日活跃企业数',
      content: totalData?.thirtyActiviteCompanyNum,
    },
    {
      title: '平均新增企业数',
      content: totalData?.averageAddCompany,
    },
    {
      title: '平均活跃企业数',
      content: totalData?.averageActiviteCompany,
    },
    {
      title: '30日平均新增企业数',
      content: totalData?.averageThirtyAddCompany,
    },
    {
      title: '30日平均活跃企业总数',
      content: totalData?.averageThirtyActiviteCompany,
    },
  ];
  useEffect(() => {
    // console.log(totalData);
  });

  return (
    <div>
      {/* 今日数据 */}
      <h3 className="title-header title-left-border">今日数据</h3>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
            {
              todaydataList.map((item, index) => (
                  <Col xxl={4} xl={6} md={8} sm={24}  key={index}>
                  <StatisticComponent
                      title={item.title}
                      titleCount={item?.todayContent || 0}
                      detail="昨日数据"
                      detailCount={item?.yesterdayContent || 0}
                  />
                  </Col>
              ))
            }
        </Row>
        <br />

        <h3 className="title-header title-left-border">总览数据</h3>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }} className="form-container">
          {
            totaldataList.map((item, index) => (
              <Col  xxl={6} xl={8} md={10} sm={24} key={index}>
              <StatisticComponent
                title={item.title}
                titleCount={item?.content || 0}
              />
            </Col>
            ))
          }
        </Row>
        <br />
    </div>
  );
});
// 对传进来的数据进行限制，不能放在开头，不然会报错，无法在初始化前访问TodayData
today.propTypes = {
  form: PropTypes.object,
  totalData: PropTypes.object || null,
  todayData: PropTypes.object || null,
  yesterdayData: PropTypes.object || null,
};
const TodayData = Form.create()(today);
export default TodayData;

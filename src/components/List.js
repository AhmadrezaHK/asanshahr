import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Table, Row, Col, Button } from 'antd';
import useRouter from 'use-react-router';

import { fetch, selectedAd, page } from '../actions';

const List = props => {
  const { fetch, ads, loading, selectedAd, page, pageNum } = props;
  const [pagination, setPagination] = useState({ current: pageNum });
  const { history, match } = useRouter();

  const columns = [
    {
      align: 'right',
      title: 'پیش پرداخت',
      dataIndex: 'preRent',
      key: 'preRent',
      render: price => <div>{price} تومان</div>
    },
    {
      align: 'right',
      title: 'اجاره',
      dataIndex: 'rent',
      key: 'rent',
      render: price => <div>{price} تومان</div>
    },
    {
      align: 'right',
      title: 'متراژ',
      dataIndex: 'area',
      key: 'area',
      render: area => <div>{area} متر مربع</div>
    },
    {
      align: 'right',
      title: 'تعداد اتاق',
      dataIndex: 'roomCount',
      key: 'roomCount'
    },
    {
      align: 'right',
      title: 'طبقه',
      dataIndex: 'floor',
      key: 'floor'
    },
    {
      align: 'right',
      title: 'تعداد آسانسور',
      dataIndex: 'countOfElevator',
      key: 'countOfElevator'
    },
    {
      align: 'right',
      title: 'آدرس',
      dataIndex: 'address',
      key: 'address'
    },
    {
      align: 'right',
      title: 'جزئیات',
      key: 'detail',
      render: (_, record) => {
        return (
          <Button
            type='primary'
            onClick={() => {
              selectedAd(record);
              history.push(`/View`);
            }}
          >
            جزئیات
          </Button>
        );
      }
    }
  ];

  const handleTableChange = pagination => {
    page(pagination.current);
    setPagination({
      current: pagination.current
    });
  };

  useEffect(() => {
    fetch(pagination);
  }, [pagination]);

  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      <Row style={{ margin: 'auto' }}>
        <Col span={24}>
          <Table
            rowKey={record => record.id}
            style={{ direction: 'rtl' }}
            dataSource={ads}
            columns={columns}
            loading={loading}
            onShowSizeChange
            pagination={{
              ...pagination,
              defaultCurrent: 1,
              defaultPageSize: 7,
              total: 50,
              style: { direction: 'ltr' }
            }}
            onChange={handleTableChange}
          />
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => {
  return { ads: state.ads, loading: state.loading, pageNum: state.page };
};

export default connect(
  mapStateToProps,
  { fetch, selectedAd, page }
)(List);

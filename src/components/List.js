import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';

import { fetch } from '../actions';

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
  }
];

const List = props => {
  const { fetch, ads, loading } = props;
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <Table
        style={{ direction: 'rtl' }}
        dataSource={ads}
        columns={columns}
        loading={loading}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return { ads: state.ads, loading: state.loading };
};

export default connect(
  mapStateToProps,
  { fetch }
)(List);

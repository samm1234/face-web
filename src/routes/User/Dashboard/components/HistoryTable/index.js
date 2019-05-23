import React from 'react';
import styled from 'styled-components';
import { Table } from 'antd';

const columns = [
  {
    title: '날짜',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '턱 대칭률',
    dataIndex: 'jaw',
    key: 'jaw',
  },

  {
    title: '코 대칭률',
    dataIndex: 'nose',
    key: 'nose',
  },
];

export default function HistoryTable({ dataSource, loading }) {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      locale={{ emptyText: '검사하기를 눌러서 확인해보세요.' }}
    />
  );
}



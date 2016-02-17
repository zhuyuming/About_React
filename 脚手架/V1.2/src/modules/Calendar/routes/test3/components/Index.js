import React from 'react'
import { Table } from 'antd';

function renderAction() {
  return (
    <div>
      <a href="#">编辑</a>
      &nbsp;&nbsp;
      <a href="#">删除</a>
    </div>
  );
}
const columns = [
  {title: '姓名', dataIndex: 'name', key: 'name'},
  {title: '年龄', dataIndex: 'age', key: 'age'},
  {title: '住址', dataIndex: 'address', key: 'address'},
  {title: '住址1', dataIndex: 'address1', key: 'address1'},
  {title: '住址2', dataIndex: 'address2', key: 'address2'},
  {title: '住址3', dataIndex: 'address3', key: 'address3'},
  {title: '住址4', dataIndex: 'address4', key: 'address4'},
  {title: '住址5', dataIndex: 'address5', key: 'address5'},
  {title: '住址6', dataIndex: 'address6', key: 'address6'},
  {title: '操作', dataIndex: '', key: 'x', render: renderAction}
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: '李大嘴' + i,
    age: 32,
    address: '西湖区湖底公园' + i * 1 + '号',
    address1: '西湖区湖底公园' + i * 2 + '号',
    address2: '西湖区湖底公园' + i * 3+ '号',
    address3: '西湖区湖底公园' + i * 4 + '号',
    address4: '西湖区湖底公园' + i * 5 + '号',
    address5: '西湖区湖底公园' + i * 6 + '号',
    address6: '西湖区湖底公园' + i * 7 + '号',
  });
}

const pagination = {
  total: data.length,
  current: 1,
  showQuickJumper :true,
  showSizeChanger: true,
};


const TableDemo = React.createClass({
  render() {
    return (
      <div>
       <Table columns={columns} dataSource={data} pagination={pagination} />
      </div>
    );
  }
});

export default TableDemo
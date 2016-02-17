import React from 'react'
import { Table } from 'antd';

function renderAction() {
    return (
        <div>
            <a href="#" > 编辑 < /a>& nbsp;&nbsp;
            <a href="#" > 删除 < /a>
        </div>
  );
}
const columns = [
    { title: '名称', dataIndex: 'name', key: 'name' },
    { title: '备注', dataIndex: 'remark', key: 'remark' },
    { title: '值', dataIndex: 'value', key: 'value' }
];


const pagination = {
    total: window.STORE.list.length,
    current: 1,
    showQuickJumper: true,
    showSizeChanger: true,
};

const TableDemo = React.createClass({
    render() {
        console.log('table demo ...');
        return (
        <div>
            <Table columns={ columns } dataSource= { window.STORE.list } pagination= { pagination } />
        </div>
    );
  }
});

export default TableDemo
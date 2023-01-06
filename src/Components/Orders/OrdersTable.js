import React from 'react';

const OrdersTable = ({order, index}) => {
    const {_id, name, book, address, phone, date, price}=order
    return (
        <div className='px-5 mx-5'>
          <th>
          <tr>
            <td>{index}</td>
            <td>{name}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td >{book}</td>
            <td >{price}</td>
            <td>{new Date(date).toDateString('dd/MM/yyyy')}</td>
        </tr>
        </th>
        </div>
    );
};

export default OrdersTable;
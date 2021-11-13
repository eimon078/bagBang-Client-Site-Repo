import { Button, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [update, setUpdate] = useState(false);

    //Load All orders
    useEffect(() => {
        fetch('http://localhost:7000/orders')
            .then(res => res.json())
            .then(data => {
                setAllOrders(data);
            })
    }, [update])

    //handle delete
    const handelDelete = (id) => {
        const procced = window.confirm("Are You sure to Delete?");
        if (procced) {
            const url = `http://localhost:7000/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        alert('Delete Successfully');
                        const remainingUsers = allOrders.filter(booking => booking._id !== id);
                        setAllOrders(remainingUsers);
                    }
                })
        }
    }

    //handle update Status
    const handelUpdate = (id) => {
        fetch(`http://localhost:7000/orders/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ "status": "shipped" })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Update SuccessFully");
                    setUpdate(!update)
                }
            })

    }

    return (
        <div>
            <h1>Manage all Order</h1>
            <Container>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Order No</Th>
                            <Th>Order Id</Th>
                            <Th>Order By</Th>
                            <Th>Product Name</Th>
                            <Th>Price</Th>
                            <Th>Brand</Th>
                            <Th>Model</Th>
                            <Th>Status</Th>
                            <Th>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>

                        {
                            allOrders.map((order, index) => <Tr key={order._id}>
                                <Td>{index + 1}</Td>
                                <Td>{order._id}</Td>
                                <Td>{order.displayName}</Td>
                                <Td>{order.productName}</Td>
                                <Td>{order.price}</Td>
                                <Td>{order.brand}</Td>
                                <Td>{order.model}</Td>
                                <Td><Button variant="outlined" style={{ backgroundColor: "rgb(245, 176, 65 )", color: 'White' }} onClick={() => handelUpdate(order._id)}>{order.status}</Button></Td>
                                <Td><Button variant="outlined" style={{ backgroundColor: "white", color: 'red' }} onClick={() => handelDelete(order._id)}>Delete</Button></Td>
                            </Tr>)
                        }

                    </Tbody>
                </Table>
            </Container>
        </div>
    );
};

export default ManageAllOrders;
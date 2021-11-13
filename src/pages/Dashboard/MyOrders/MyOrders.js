import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [myOrders, setMyOrdrs] = useState([]);
    const { user } = useAuth();

    //Load my orders
    useEffect(() => {
        const url = `http://localhost:7000/orders/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyOrdrs(data);
            })
    }, [user.email])

    //handle delete orders
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
                        const remainingUsers = myOrders.filter(order => order._id !== id);
                        setMyOrdrs(remainingUsers);
                    }
                })
        }
    }
    return (
        <div>
            <Box sx={{ my: 4 }}> <Typography variant="h3" style={{ color: "black" }}>My Orders</Typography></Box>
            <Container>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Product Name</Th>
                            <Th>Price</Th>
                            <Th>Brand</Th>
                            <Th>Model</Th>
                            <Th>Cancel</Th>
                        </Tr>
                    </Thead>
                    <Tbody>

                        {
                            myOrders.map(order => <Tr key={order._id}>
                                <Td>{order.productName}</Td>
                                <Td>{order.price}</Td>
                                <Td>{order.brand}</Td>
                                <Td>{order.model}</Td>
                                <Td><Button variant="outlined" style={{ backgroundColor: "white", color: 'red' }} onClick={() => { handelDelete(order._id) }}>Cancel</Button></Td>
                            </Tr>)
                        }

                    </Tbody>
                </Table>
            </Container>
        </div>
    );
};

export default MyOrders;
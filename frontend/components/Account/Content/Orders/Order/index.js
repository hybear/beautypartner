import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import formatMoney from '../../../../../lib/formatMoney'
import { format, formatDistance, parseISO } from 'date-fns'
import { convertToWarekiYear } from 'wareki-year-converter';

// UI
import { OrderStyles, OrderInfoContainer, OrderInfo } from './styles'
import Error from '../../../../General/styles/ErrorMessage'
import { 
    Card, 
    CardContent, 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow } from '@material-ui/core'

const SINGLE_ORDER_QUERY = gql`
    query SINGLE_ORDER_QUERY($id: ID!) {
        order(id: $id){
            id
            charge
            total
            createdAt
            status
            paymentMethod
            user{
                id
            }
            items{
                id
                title
                description
                image
                listPrice
                bestPrice
                quantity
            }
        }
    }
`

const Order = (order) => {
    console.log(order);
    return(
        // <Query 
        //     query={SINGLE_ORDER_QUERY}
        //     variables={{ id: orderId }}
        // >
        //     {({ data, error, loading }) => {
        //         if(error) return <Error error={error} />
        //         if(loading) return <p>Loading...</p>;

        //         const order = data.order;

                // return(
                    <OrderStyles>
                        <Card elevation={3}>
                            {/* <CardActionArea> */}
                                <CardContent>
                                    <OrderInfoContainer>
                                        <OrderInfo area="id">
                                            <span className="title">Order ID:</span>
                                            <span className="content">{order.id}</span>
                                        </OrderInfo>
                                        <OrderInfo area="method">
                                            <span className="title">Payment Method</span>
                                            <span className="content">{order.paymentMethod.charAt(0).toUpperCase() + order.paymentMethod.slice(1)}</span>
                                        </OrderInfo>
                                        <OrderInfo area="status">
                                            <span className="title">Status</span>
                                            <span className="content">{order.status}</span>
                                        </OrderInfo>
                                        <OrderInfo area="count">
                                            <span className="title">Item Count</span>
                                            <span className="content">{order.items.length}</span>
                                        </OrderInfo>
                                        <OrderInfo area="date">
                                            <span className="year__wareki">{convertToWarekiYear(new Date(order.createdAt).getFullYear())}</span>
                                            <small className="year__resume">{formatDistance(parseISO(order.createdAt), new Date())} ago</small>
                                            <span className="year__full">
                                                {format(parseISO(order.createdAt), 'MM/dd/yy h:m aaaa')}
                                            </span>
                                        </OrderInfo>
                                    </OrderInfoContainer>
                                        <div className="items">
                                            {/* {console.log(order.items)} */}
                                            <TableContainer>
                                                <Table aria-label="simple table">
                                                    <TableHead>
                                                    <TableRow>
                                                        <TableCell>Photo</TableCell>
                                                        <TableCell>Title</TableCell>
                                                        <TableCell align="center">Quantity</TableCell>
                                                        <TableCell align="center">Unit Price</TableCell>
                                                        <TableCell align="center">Sum</TableCell>
                                                    </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                    {order.items.map(item => (
                                                        <TableRow key={item.title}>
                                                            <TableCell><img src={item.image} alt={item.title} /></TableCell>
                                                            <TableCell>{item.title}</TableCell>
                                                            <TableCell align="center">{item.quantity}</TableCell>
                                                            <TableCell align="center">{formatMoney(item.bestPrice)}</TableCell>
                                                            <TableCell align="center">{formatMoney(item.bestPrice * item.quantity)}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                        <TableRow>
                                                            <TableCell rowSpan={3} colSpan={2}/>
                                                            <TableCell >Subtotal</TableCell>
                                                            <TableCell align="right" colSpan={2}>{formatMoney(order.total)}</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell >Cashback</TableCell>
                                                            <TableCell align="right" colSpan={2}>+{formatMoney(order.total / 10)}</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell >Total</TableCell>
                                                            <TableCell align="right" colSpan={2}>{formatMoney(order.total)}</TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </div>
                                </CardContent>
                            {/* </CardActionArea> */}
                        </Card>
                    </OrderStyles>
        //         )
        //     }}
        // </Query>
    )
}

Order.PropTypes = {
    id: PropTypes.string.isRequired
}

export default Order;
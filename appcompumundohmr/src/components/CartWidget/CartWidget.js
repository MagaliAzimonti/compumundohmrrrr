import './CartWidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const CartWidget = () => {

    const { getCart } = useContext(CartContext)

    const quantity = getCart()
    return (
        <Link to='/cart'>
            <img src='/images/cart.jpg'/>
            {quantity}
        </Link>
    )
}

export default CartWidget 

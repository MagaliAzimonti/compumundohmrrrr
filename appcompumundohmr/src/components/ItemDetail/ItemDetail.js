import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'



const ItemDetail = ({ id, name, description, img, stock, price }) => {
    const [addQuantity, setQuantity] = useState(0)
    const { addItem, productQuantity } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
        const addProduct = {
            id, name, price, quantity
        }
        addItem(addProduct)
    }

    const prodQuantity = productQuantity(id)

    return (
        <div>
        <h1 className="titleDetail text-light">{name}</h1>
        <p className="pDetail text-light">{description}</p>
        <img className="imageDetail"src={img} alt='detalle imagenes'/>
        <p className='text-light m-3'>{price}</p>
        <div>
            {
                addQuantity === 0 ? (
                    <ItemCount onAdd={handleOnAdd} stock={stock} initial={prodQuantity}/>

                ) : (
                    <Link to='/cart' className='btn btn-light m-4'>Finalizar compra</Link>
                )
            }
        </div>
        </div>
    )
}

export default ItemDetail 
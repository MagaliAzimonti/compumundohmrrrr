import './ItemListContainer.css'
import { useState, useEffect} from 'react'
import { getProductosDeCompumundo , getProductByCategory} from '../../asyncMock'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({mensaje}) => {
    const [productos, setProducts] = useState([])

    const { categoryId } = useParams()
    useEffect(() => {
        if(!categoryId) {
            getProductosDeCompumundo().then(productos => {
                setProducts(productos)
            })
        } else {
            getProductByCategory(categoryId).then(productos => {
                setProducts(productos)
            })
        }
    }, [categoryId])

    return (
        <>
        <h1 className='titleMensaje'>{mensaje}</h1>
        {/* <ul>
            {productos.map(prod => <li key={prod.id}>{prod.name}</li>)}
        </ul> */}
        <ItemList productos={productos}/>
        </>
        
    )

}

export default ItemListContainer
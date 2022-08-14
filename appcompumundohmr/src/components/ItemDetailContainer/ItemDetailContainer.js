import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [producto, setProduct] = useState()

    const { productoId } = useParams()

    useEffect(() => {
        getProductById(productoId)
        .then(producto => {
            setProduct(producto)
        })
        .catch(error => {
            console.log(error)
        })
    }, [productoId])
    
    return (
        <div>
            <h1>Detalle</h1>
            <ItemDetail {...producto}  />
        </div>
    )
}

export default ItemDetailContainer


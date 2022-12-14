import Item from "../Item/Item"

const ItemList = ({productos}) => {
    return ( 
        <ul>
            {productos.map(prod => <Item key={prod.id} producto={prod}/>)}
        </ul>
    )
}

export default ItemList
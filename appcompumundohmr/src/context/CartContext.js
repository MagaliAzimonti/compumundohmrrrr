import { useState, createContext } from "react"

const CartContext = createContext()


export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

  const addItem = (addProduct) => {
    if(!prodInCart(addProduct.id)) {
        setCart([...cart, addProduct])
    } else {
        const updateCart = cart.map(prod => {
            if(prod.id === addProduct.id) {
                const updateProduct = {
                    ...prod,
                    quantity: addProduct.quantity
                }
                return updateProduct
            } else {
                return prod
            }
        })

        setCart(updateCart)
    }
  } 

  const clearCart = () => {
    setCart([])
  }

  const removeItem = (id) => {
    const EmptyCart = cart.filter(prod => prod.id !== id)
    setCart(EmptyCart)
  }

  const prodInCart = (id) => {
    return cart.some(prod => prod.id === id)
  }
  const getCart = () => {
    let acc = 0

    cart.forEach(prod => {
      acc += prod.quantity
    })

    return acc
  }

  const productQuantity = (id) => {
    const producto =  cart.find(prod => prod.id === id)

    return producto?.quantity
  }

  return (
    <CartContext.Provider value={{cart, addItem, getCart, prodInCart, removeItem, clearCart, productQuantity}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext
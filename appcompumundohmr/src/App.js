import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
/* import Counter from './components/Counter/Counter'; */
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import { NotificationProvider } from './Notificacion/Notification'
import CartItemDetail from './components/Cart/Cart';

function App() {
  

  /* const handleOnAdd = (quantity) => {
    console.log(`la cantidad de productos añadidos es' ${quantity}`)
  } */
  return (
    <div className="App">
      <NotificationProvider>
      <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer mensaje='Todos nuestros productos'/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer mensaje='Productos filtrados' />} />
          <Route path='/detail/:productoId' element={<ItemDetailContainer />} />
          <Route path='Cart' element={<CartItemDetail/>}/>
          <Route path='*' element={<h1>ERROR 404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
      </ CartContextProvider>
      </NotificationProvider>
      {/* <Counter stock={40} onAdd={handleOnAdd}/> */}
    </div>
  );
}

export default App;

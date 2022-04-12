import logo from './logo.svg';
import './App.css';
import Product from './Product';
import Cartitem from './Cartitem';
import { useState } from 'react';



let productsDetail = [
  {
    pId : 1,
    pName : "Sony camera",
    pPrice : 75000,
    stock : true
  },
  {
    pId : 2,
    pName : "Asus zenfone max pro m1",
    pPrice : 18000,
    stock : false
  },
  {
    pId : 3,
    pName : "Asus zenfone max pro m2",
    pPrice : 12000,
    stock : false
  },
  {
    pId : 4,
    pName : "Lenovo k3 note",
    pPrice : 10000,
    Stock : false
  },
  {
    pId : 5,
    pName : "Vivo z1 pro",
    pPrice : 18000,
    stock : true
  },
  {
    pId : 6,
    pName : "One plus nord",
    pPrice : 29000,
    stock : true
  },
  {
    pId : 7,
    pName : "Moto m",
    pPrice : 15000,
    stock : false
  },
  {
    pId : 8,
    pName : "Iqoo 9",
    pPrice : 45000,
    stock : true
  }
]

function App() {

  const [cartItems,setCartItems] = useState([])
  const [total,setTotal] = useState(0)

  let showPrice = (data/* Particular clicked element of productsDetail's array*/) => {
    setCartItems([...cartItems,data])
    setTotal(total+data.pPrice)
  };

  let removeItem = (item)=>{
    let index = cartItems.findIndex(cItem => cItem.pId == item.pId)
    cartItems.splice(index,1);
    setCartItems([...cartItems])
    setTotal(total-item.pPrice)
  }
  return (
    <div className="container-fluid">
      <div className='row'>
        <div className='col-lg-9'>
          <div className='row'>
            {
              productsDetail.map((product)=>{
                return <Product data={product} sp={showPrice}></Product>
              })
            }
          </div>
        </div>
        <div className='col-lg-3'>
          <h1>Cart items ({cartItems.length})</h1>
          {
            cartItems.map((item)=>{
              return <Cartitem remove={removeItem} cartData={item}></Cartitem>
            })
          }
          
          <h2>Total = {total}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;

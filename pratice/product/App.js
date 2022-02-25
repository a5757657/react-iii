import React, { useState } from 'react'
import './App.css'
import OrderList from './Components/OrderList'
import Summary from './Components/Summary'

const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    id: 2,
    name: '黑色 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 400,
  },
  {
    id: 3,
    name: '白色 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 500,
  },
  {
    id: 4,
    name: '白色 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 500,
  },
]

let state = []
for (let i = 0; i < products.length; i++) {
  state.push({ ...products[i], amount: 1 })
}

function App() {
  const [data, setData] = useState(state)

  let totalCount = 0
  let totalPrice = 0
  const newData = [...data]
  newData.forEach((item) => {
    totalCount += item.amount
    totalPrice += item.amount * item.price
  })


  return (
    <>
      <div className="card">
        <div className="row">
          <OrderList data={data} setData={setData} />
          <Summary totalCount={totalCount} totalPrice={totalPrice} />
        </div>
      </div>
    </>
  )
}

export default App

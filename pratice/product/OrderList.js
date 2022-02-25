import React from 'react'
import ProductItem from './ProductItem'

function OrderList(props) {
  const { data, setData } = props
  const handleDelete = (id) => {
    //1. 先從原本的陣列(物件)拷貝出一個新陣列(物件)
    //2. 在拷貝出的新陣列(物件)上運算或處理
    const newProductsInOrder = [...data].filter((v, i) => {
      return v.id !== id
    })

    //3. 設定回原本的狀態
    setData(newProductsInOrder)
  }
  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>購物車</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              {data.length}種商品項目
            </div>
          </div>
        </div>
        {data.map((product, i) => {
          const { id, name, categroy, image, price, amount } = product
          return (
            <ProductItem
              key={id}
              id={id}
              name={name}
              categroy={categroy}
              image={image}
              price={price}
              setData={setData}
              amount={amount}
              data={data}
              handleDelete={() => {
                handleDelete(id)
              }}
            />
          )
        })}
        <div className="back-to-shop">
          <a href="#/">
            <span dangerouslySetInnerHTML={{ __html: '&leftarrow;' }} />
          </a>
          <span className="text-muted">回到商品頁</span>
        </div>
      </div>
    </>
  )
}

export default OrderList

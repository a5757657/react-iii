import React from 'react'
import ProductItem from './ProductItem'

function OrderList(props) {
  const { data, setData } = props
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

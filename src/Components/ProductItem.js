import React from 'react'

function ProductItem(props) {
  // 每個商品物件
  //    {
  //        id:1,
  //        name: '咖啡色 T-shirt',
  //        categroy:'Shirt',
  //        image:'https://i.imgur.com/1GrakTl.jpg',
  //        price:300
  //    }

  const {
    id,
    name,
    categroy,
    image,
    price,
    setData,
    amount,
    data,
    handleDelete,
  } = props
  return (
    <>
      <div className="row border-top border-bottom">
        <div className="row main align-items-center">
          <div className="col-2">
            <img className="img-fluid" src={image} />
          </div>
          <div className="col">
            <div className="row text-muted">{categroy}</div>
            <div className="row">{name}</div>
          </div>
          <div className="col">
            <a
              href="#/"
              onClick={() => {
                const newData = [...data]
                newData.forEach((item) => {
                  if (item.id === id && item.amount > 0) {
                    item.amount--
                  }
                })
                setData(newData)
              }}
            >
              -
            </a>
            <a href="#/" className="border">
              {amount}
            </a>
            <a
              href="#/"
              onClick={() => {
                const newData = [...data]
                newData.forEach((item) => {
                  if (item.id === id) {
                    item.amount++
                  }
                })
                setData(newData)
              }}
            >
              +
            </a>
          </div>
          <div className="col">
            ${price}
            <span className="close" onClick={handleDelete}>
              &#10005;
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem

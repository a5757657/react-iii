import React from 'react'

function Summary(props) {
  const { totalCount,totalPrice} = props
  return (
    <>
      <div className="col-md-4 summary">
        <div>
          <h5>
            <b>付款摘要</b>
          </h5>
        </div>
        <hr />
        <div className="row">
          <div className="col col001">共{totalCount}個項目</div>
        </div>
        <div className="row row001">
          <div className="col">總價</div>
          <div className="col text-right">${totalPrice}</div>
        </div>
        <button className="btn">CHECKOUT</button>
      </div>
    </>
  )
}

export default Summary

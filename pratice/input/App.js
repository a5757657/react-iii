import React, { useState } from 'react'

function App() {
  const [inputText, setInputText] = useState('')
  const [inputTextArea, setInputTextArea] = useState('')
  const [inputRadio, setInputRadio] = useState('')
  const [inputSelect, setInputSelect] = useState('')
  const [inputSelectFood, setInputSelectFood] = useState('')
  const [inputCheckbox, setInputCheckbox] = useState('')
  const [inputGroupCheckbox, setInputGroupCheckbox] = useState([])

  const food = ['蠔油中卷', '烤松阪豬', '客家小炒', '宜蘭卜肉', '煎豬肝']
  return (
    <>
      <h1>可控表單元素</h1>
      <h2>文字輸入框</h2>
      <input
        type={'text'}
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <h2>文字輸入區域</h2>
      <textarea
        value={inputTextArea}
        onChange={(e) => {
          setInputTextArea(e.target.value)
        }}
      />
      <h2>選項按鈕</h2>
      {food.map((v, i) => {
        return (
          <React.Fragment key={i}>
            <input
              id={'food' + i}
              type={'radio'}
              value={v}
              checked={v === inputRadio}
              onChange={(e) => {
                setInputRadio(e.target.value)
              }}
            />
            <label htmlFor={'food' + i}>{v}</label>
            <br />
          </React.Fragment>
        )
      })}
      <h2>選項按鈕</h2>
      <select
        name="cars"
        id="cars"
        value={inputSelect}
        onChange={(e) => {
          setInputSelect(e.target.value)
        }}
      >
        <option value="">請選擇</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>

      <h2>選項按鈕</h2>
      <select
        name="food"
        id="food"
        value={inputSelectFood}
        onChange={(e) => {
          setInputSelectFood(e.target.value)
        }}
      >
        <option value="">請選擇</option>
        {food.map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          )
        })}
      </select>

      <h3>核取方塊(單一)</h3>
      <input
        id="西瓜"
        value={inputCheckbox}
        type={'checkbox'}
        onChange={(e) => {
          setInputCheckbox(e.target.checked)
        }}
      />
      <label>我同意會員註冊條款</label>

      <h3>核取方塊(群組)</h3>
      <p>選擇你喜歡的料理</p>
      {food.map((v, i) => {
        return (
          <React.Fragment key={i}>
            <input
              id={v}
              type="checkbox"
              value={v}
              onChange={(e) => {
                //先判斷是否有在狀態陣列中
                const inState = inputGroupCheckbox.includes(e.target.value)

                if (inState) {
                  //if 在陣列中 -> 移除
                  const newList = inputGroupCheckbox.filter(
                    (v, i) => v !== e.target.value
                  )
                  setInputGroupCheckbox(newList)
                } else {
                  //else  -> 加入陣列
                  const newList = [...inputGroupCheckbox, e.target.value]
                  setInputGroupCheckbox(newList)
                }
              }}
            />
            <label htmlFor={v}> {v}</label>
            <br />
          </React.Fragment>
        )
      })}
    </>
  )
}

export default App

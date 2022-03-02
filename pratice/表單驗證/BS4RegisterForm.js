import { useState } from 'react'

function BS4RegisterForm(props) {
  const [firstName, setFirstName] = useState('form-control')
  const [firstNameValid, setFirstNameValid] = useState()
  const [lastName, setLastName] = useState('form-control')
  const [lastNameValid, setLastNameValid] = useState()

  const [email, setEmail] = useState('form-control')
  const [emailValid, setEmailValid] = useState()
  const [city, setCity] = useState('form-control')
  const [cityValid, setCityValid] = useState()
  const [country, setCountry] = useState('form-control')
  const [countryValid, setCountryValid] = useState()

  const [formData, setFormData] = useState([])

  const firstNameCheck = (e) => {
    const data = { ...formData, [e.target.name]: e.target.value }
    console.log(data)
    setFormData(data)
    if (e.target.value.length >= 5 && e.target.value.length <= 20) {
      setFirstName('form-control is-valid')
    } else {
      setFirstName('form-control is-invalid')
      setFirstNameValid(e.target.validationMessage)
    }
  }

  const lastNameCheck = (e) => {
    const data = { ...formData, [e.target.name]: e.target.value }
    console.log(data)
    setFormData(data)
    if (e.target.value.length >= 5 && e.target.value.length <= 20) {
      setLastName('form-control is-valid')
    } else {
      setLastName('form-control is-invalid')
      setLastNameValid(e.target.validationMessage)
    }
  }

  const emailCheck = (e) => {
    const data = { ...formData, [e.target.name]: e.target.value }
    console.log(data)
    setFormData(data)
    if (e.target.value.length === 0) {
      setEmail('form-control is-invalid')
      setEmailValid(e.target.validationMessage)
    } else if (e.target.validationMessage) {
      setEmail('form-control is-invalid')
      setEmailValid(e.target.validationMessage)
    } else {
      setEmail('form-control is-valid')
    }
  }
  const gender = (e) => {
    const data = { ...formData, [e.target.name]: e.target.value }
    console.log(data)
    setFormData(data)
  }

  const cityCheck = (e) => {
    const data = { ...formData, [e.target.name]: e.target.value }
    console.log(data)
    setFormData(data)
    if (e.target.value.length >= 5 && e.target.value.length <= 20) {
      setCity('form-control is-valid')
    } else {
      setCity('form-control is-invalid')
      setCityValid(e.target.validationMessage)
    }
  }
  const countryCheck = (e) => {
    if (e.target.value === 'Choose...') {
      setCountry('form-control is-invalid')
    } else {
      setCountry('form-control is-valid')
      const data = { ...formData, [e.target.name]: e.target.value }
      console.log(data)
      setFormData(data)
    }
  }
  const handleSubmit = (e) => {
    // 阻擋form的預設送出行為
    e.preventDefault()

    // 利用 FormData 獲取各欄位的值(另一種得到表單值的方式)
    // 注意：FormData 是利用各欄位的 name 屬性
    const formData = new FormData(e.target)
    console.log(formData)
  }
  return (
    <>
      <div className="container">
        <br />
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <header className="card-header">
                <a
                  href="#/"
                  className="float-right btn btn-outline-primary mt-1"
                >
                  登入
                </a>
                <h4 className="card-title mt-2">註冊</h4>
              </header>
              <article className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="col form-group">
                      <label>姓氏</label>
                      <input
                        minLength="5"
                        maxLength="20"
                        type="text"
                        className={firstName}
                        onChange={firstNameCheck}
                        name="firstname"
                      />

                      <div className="valid-feedback">很棒</div>
                      <div className="invalid-feedback">{firstNameValid}</div>
                    </div>
                    <div className="col form-group">
                      <label>名字</label>
                      <input
                        minLength="5"
                        maxLength="20"
                        type="text"
                        className={lastName}
                        onChange={lastNameCheck}
                        name="lastname"
                      />
                      <div className="valid-feedback">你很棒</div>
                      <div className="invalid-feedback">{lastNameValid}</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>電子郵件</label>
                    <input
                      type="email"
                      className={email}
                      onChange={emailCheck}
                      name="email"
                    />
                    <div className="valid-feedback">你真的很棒</div>
                    <div className="invalid-feedback">{emailValid}</div>
                  </div>
                  <div className="form-group">
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={gender}
                      />
                      <span className="form-check-label"> 男 </span>
                    </label>
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={gender}
                      />
                      <span className="form-check-label"> 女</span>
                    </label>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>城市</label>
                      <input
                        minLength="5"
                        maxLength="20"
                        type="text"
                        className={city}
                        name="city"
                        onChange={cityCheck}
                      />
                      <div className="valid-feedback">你超棒</div>
                      <div className="invalid-feedback">{cityValid}</div>
                    </div>
                    <div className="form-group col-md-6">
                      <label>國家</label>
                      <select
                        id="inputState"
                        className={country}
                        onChange={countryCheck}
                        name="country"
                      >
                        <option>Choose...</option>
                        <option>Uzbekistan</option>
                        <option>Russia</option>
                        <option>United States</option>
                        <option>India</option>
                        <option>Afganistan</option>
                      </select>
                      <div className="valid-feedback">你棒棒</div>
                      <div className="invalid-feedback">請選擇國家</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>建立密碼</label>
                    <input
                      className="form-control"
                      type="password"
                      pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                      placeholder="最少8個字元 一個大寫字母一個數字"
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">
                      註冊
                    </button>
                  </div>
                  <small className="text-muted">
                    By clicking the 'Sign Up' button, you confirm that you
                    accept our <br /> Terms of use and Privacy Policy.
                  </small>
                </form>
              </article>
              <div className="border-top card-body text-center">
                Have an account? <a href="#/">登入</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BS4RegisterForm

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
    // ??????form?????????????????????
    e.preventDefault()

    // ?????? FormData ?????????????????????(?????????????????????????????????)
    // ?????????FormData ????????????????????? name ??????
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
                  ??????
                </a>
                <h4 className="card-title mt-2">??????</h4>
              </header>
              <article className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="col form-group">
                      <label>??????</label>
                      <input
                        minLength="5"
                        maxLength="20"
                        type="text"
                        className={firstName}
                        onChange={firstNameCheck}
                        name="firstname"
                      />

                      <div className="valid-feedback">??????</div>
                      <div className="invalid-feedback">{firstNameValid}</div>
                    </div>
                    <div className="col form-group">
                      <label>??????</label>
                      <input
                        minLength="5"
                        maxLength="20"
                        type="text"
                        className={lastName}
                        onChange={lastNameCheck}
                        name="lastname"
                      />
                      <div className="valid-feedback">?????????</div>
                      <div className="invalid-feedback">{lastNameValid}</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>????????????</label>
                    <input
                      type="email"
                      className={email}
                      onChange={emailCheck}
                      name="email"
                    />
                    <div className="valid-feedback">???????????????</div>
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
                      <span className="form-check-label"> ??? </span>
                    </label>
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={gender}
                      />
                      <span className="form-check-label"> ???</span>
                    </label>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>??????</label>
                      <input
                        minLength="5"
                        maxLength="20"
                        type="text"
                        className={city}
                        name="city"
                        onChange={cityCheck}
                      />
                      <div className="valid-feedback">?????????</div>
                      <div className="invalid-feedback">{cityValid}</div>
                    </div>
                    <div className="form-group col-md-6">
                      <label>??????</label>
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
                      <div className="valid-feedback">?????????</div>
                      <div className="invalid-feedback">???????????????</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>????????????</label>
                    <input
                      className="form-control"
                      type="password"
                      pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                      placeholder="??????8????????? ??????????????????????????????"
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">
                      ??????
                    </button>
                  </div>
                  <small className="text-muted">
                    By clicking the 'Sign Up' button, you confirm that you
                    accept our <br /> Terms of use and Privacy Policy.
                  </small>
                </form>
              </article>
              <div className="border-top card-body text-center">
                Have an account? <a href="#/">??????</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BS4RegisterForm

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Product from './components/pages/Product'
import Login from './components/pages/Login'
import NotFoundPage from './components/pages/NotFoundPage'

import { useState } from 'react'

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <>
        <h2>a href</h2>
        <a href="/">首頁</a>
        <br />
        <a href="/login">登入</a>
        <hr />
        <h2>Link to</h2>
        <Link to="/">首頁</Link>
        <br />
        <Link to="/about">關於我們</Link>
        <br />
        <Link to="/login">登入</Link>
        <hr />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/about/contact">
            <Contact />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/login">
            <Login auth={auth} setAuth={setAuth} />
          </Route>
          <Route exact path="/">
            <Home auth={auth} />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App

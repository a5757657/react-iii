// index.js

import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import FilterBar from './components/FilterBar'
import ProductList from './components/ProductList'
import SearchBar from './components/SearchBar'
import SortBar from './components/SortBar'

import { data } from './data/'

function App() {
  const [products, setProducts] = useState([])
  const [displayProducts, setDisplayProducts] = useState([])

  const [tags, setTags] = useState([])
  const [searchWord, setSearchWord] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const loading = (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )

  const didMountRef = useRef(false)

  useEffect(() => {
    setProducts(data)
    setDisplayProducts(data)
  }, [])

  useEffect(() => {
    if (didMountRef.current) {
      // 如果沒有 tag
      if (tags.length === 0) {
        // 如果沒有搜尋關鍵詞
        if (searchWord === '') {
          setDisplayProducts(products)
          return
        }

        // 如果有搜尋關鍵詞
        const displayProductsCopy = [...products]
        const newDisplayProducts = displayProductsCopy.filter((item) => {
          //setIsLoading(true)

          return item.name.toUpperCase().includes(searchWord.toUpperCase())
          /* if (item.name.toUpperCase().includes(searchWord.toUpperCase())) {
            setTimeout(() => {
              setIsLoading(false)
            }, 500)
            return item
          } */
        })
        setDisplayProducts(newDisplayProducts)
        return
      }

      // 如果有 tag
      let newDisplayProducts = []
      products.forEach((product) => {
        tags.forEach((tag) => {
          if (
            product.tags.includes(tag) &&
            !newDisplayProducts.includes(product)
          ) {
            newDisplayProducts.push(product)
          }
        })
      })
      // 如果有搜尋關鍵詞
      if (searchWord) {
        newDisplayProducts = newDisplayProducts.filter((item) => {
          return item.name.toUpperCase().includes(searchWord.toUpperCase())
          /* if (item.name.toUpperCase().includes(searchWord.toUpperCase())) {
            return item
          } */
        })
      }
      setDisplayProducts(newDisplayProducts)
    }
  }, [tags, searchWord])

  useEffect(() => {
    if (didMountRef.current) {
      if (sortBy === 'desc') {
        const newDisplayProducts = [...displayProducts]
        newDisplayProducts.sort(function (a, b) {
          return b.price - a.price
        })
        setDisplayProducts(newDisplayProducts)
        return
      }
      if (sortBy === 'asc') {
        const newDisplayProducts = [...displayProducts]
        newDisplayProducts.sort(function (a, b) {
          return a.price - b.price
        })
        setDisplayProducts(newDisplayProducts)
        return
      }
      if (sortBy === '') {
        const newDisplayProducts = [...displayProducts]
        newDisplayProducts.sort(function (a, b) {
          return a.id - b.id
        })
        setDisplayProducts(newDisplayProducts)
        return
      }
    } else {
      didMountRef.current = true
    }
  }, [sortBy])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="grid search">
              <div className="grid-body">
                <div className="row">
                  <div className="col-md-3">
                    <FilterBar tags={tags} setTags={setTags} />
                  </div>

                  <div className="col-md-9">
                    <h2>
                      <i className="fa fa-file-o"></i> 商品列表
                    </h2>
                    <hr />
                    <SearchBar
                      searchWord={searchWord}
                      setSearchWord={setSearchWord}
                    />
                    <div className="padding"></div>
                    <SortBar
                      searchWord={searchWord}
                      setSearchWord={setSearchWord}
                      sortBy={sortBy}
                      setSortBy={setSortBy}
                    />
                    {isLoading ? (
                      loading
                    ) : (
                      <ProductList products={displayProducts} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

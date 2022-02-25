import React, { useState, useEffect } from 'react'
//import rawData from '../data/users.json'
import './UserList.css'

function UserList(props) {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [searchWord, setSearchWord] = useState()

  const fetchUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setUsers(data)
  }

  const searchUser = async (keyWord) => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users?name_like=' + keyWord
    )
    const data = await response.json()
    setUsers(data)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  useEffect(() => {
    setLoading(true)

    fetchUser()

    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  const spinner = (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )

  const userListTable = (
    <>
      <input
        type="text"
        value={searchWord}
        onChange={(e) => {
          setSearchWord(e.target.value)
          setTimeout(() => {
            searchUser(searchWord)
          }, 1000)
        }}
      />
      <button
        onClick={() => {
          setLoading(true)
          searchUser(searchWord)
        }}
      >
        Search
      </button>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.email}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )

  return (
    <>
      <div className="container">
        <div className="center">{loading ? spinner : userListTable}</div>
      </div>
    </>
  )
}

export default UserList

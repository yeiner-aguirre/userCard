import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

function App() {
  const [userUpdate, setUserUpdate] = useState()
  const [isFormClose, setIsFormClose] = useState(true)

  const baseUrl = "https://userscrudyeiner.onrender.com"
  const [users, getUsers, createUser, deleteUser, updateUser] = useFetch(baseUrl)

  useEffect(() => {
    getUsers()
  }, [])

  const handleOpenForm = () => {
    setIsFormClose(false)
  }

  return (
    <div>
      <div className='title-and-button'>
        <h1 className='title'>Welcome Users</h1>
        <button className='button' onClick={handleOpenForm}>Create New User</button>
      </div>
      <hr />
      <div className={`form_container ${isFormClose && "form_close"}`}>
        <FormUser
          createUser={createUser}
          userUpdate={userUpdate}
          updateUser={updateUser}
          setUserUpdate={setUserUpdate}
          setIsFormClose={setIsFormClose}
        />
      </div>
      <div className='card-container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUserUpdate={setUserUpdate}
              setIsFormClose={setIsFormClose}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App

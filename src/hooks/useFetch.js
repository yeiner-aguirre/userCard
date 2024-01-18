import axios from "axios"
import { useState } from "react"

const useFetch = (baseUrl) => {
  const [reponse, setReponse] = useState()

  //READ
    const getApi = () => {
        const url = `${baseUrl}/users/`
        axios.get(url)
        .then(res => setReponse(res.data))
        .catch(err => console.log(err))
    }

  //CREATE
    const createApi = (data) =>{
        const url = `${baseUrl}/users/`
        axios.post(url, data)
        .then(res=>{
            console.log(res.data)
            setReponse([...reponse, res.data])
        })
        .catch(err => console.log(err))
    }

  //DELETE
    const deleteApi = (id) => {
        const url = `${baseUrl}/users/${id}/`
        axios.delete(url)
        .then(res => {
            console.log(res.data)
            setReponse(reponse.filter(user => user.id !== id))
        })
        .catch(err => console.log(err))
    }

  // UPDATE
    const updateApi = (id, data) =>{
        const url = `${baseUrl}/users/${id}/`
        axios.put(url, data)
        .then(res => {
            console.log(res.data)
            setReponse(reponse.map(user => user.id === id ? res.data : user))
        })
        .catch(err => console.log(err))
    }
    return [ reponse, getApi, createApi, deleteApi, updateApi ]
}

export default useFetch
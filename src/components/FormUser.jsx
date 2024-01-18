import { useEffect } from "react"
import { useForm } from "react-hook-form"
import "./styles/FormUser.css"

const FormUser = ({ createUser, userUpdate, updateUser, setUserUpdate, setIsFormClose  }) => {

    const { handleSubmit, register, reset } = useForm()

    useEffect (() => {
        reset(userUpdate)
    }, [userUpdate])

    const submit = data => {
        if(userUpdate){
            // actualizar
            updateUser(userUpdate.id, data)
            setUserUpdate()
        }else{
            // crear
            createUser(data)
        }       
        reset({
            email: " ",
            password: " ",
            first_name: " ",
            last_name: " ",
            birthday: " "
        })
        setIsFormClose(true)
    }

    const handleClose = () => {
        setIsFormClose(true)
        reset({
            email: " ",
            password: " ",
            first_name: " ",
            last_name: " ",
            birthday: " "
        })
        setUserUpdate()
    }
    
    return (
        <form className="form" onSubmit={handleSubmit(submit)}>
            <div className="form_x" onClick={handleClose}>Close</div>
            <h2 className="form_title">{ userUpdate ? "It's time to update your username" : "here you can create a new user" }</h2>
            <label className="form_label">
                <span className="form_field_name" >Email</span>
                <input className="form_field" {...register("email")} type="email" />
            </label>
            <label className="form_label">
                <span className="form_field_name">Password</span>
                <input className="form_field" {...register("password")} type="password" />
            </label>
            <label className="form_label" >
                <span className="form_field_name">First name</span>
                <input className="form_field" {...register("first_name")} type="text" />
            </label>
            <label className="form_label" >
                <span className="form_field_name">last Name</span>
                <input  className="form_field"{...register("last_name")} type="text" />
            </label>
            <label className="form_label" >
                <span className="form_field_name">Birthday</span>
                <input className="form_field" {...register("birthday")} type="date" />
            </label>
            <button className="form_btn">{ userUpdate ? "Update" : "Add" }</button>
         </form>
    )
}

export default FormUser
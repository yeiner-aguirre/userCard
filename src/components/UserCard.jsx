import "./styles/UserCard.css"

const UserCard = ({ user, deleteUser, setUserUpdate, setIsFormClose }) => {

    const handleDelete = () => {
        deleteUser(user.id)
    }

    const handleEdit = () => {
        setUserUpdate(user)
        setIsFormClose(false)
    }
    return (
        <div className="user-card">
            <div className="card-header">
                <h2 className="name-lastName">{user.first_name} {user.last_name}</h2>
            </div>
            <div className="card-body">
                <ul className="information">
                    <li className="email"><span className="color-email">Email: </span><span>{user.email}</span></li>
                    <li className="birthday"><span className="color-birthday">Birthday: </span><span>{user.birthday}</span></li>
                </ul>
            </div>
            <div className="card-footer">
                <button className="delete" onClick={handleDelete}><i className='bx bx-trash'></i></button>
                <button className="edit" onClick={handleEdit}><i className='bx bx-edit-alt'></i></button>
            </div>
        </div>
    )
}

export default UserCard
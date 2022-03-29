import React from "react"
import Sort from './Sort'
import List from './list/List'
import UserForm from './userForm/UserForm'
import UserContext from "../context/UserContext"

export default function Container() {
    const { formVisibility, users } = React.useContext(UserContext)
    console.log(users)

    return (
        <div className="container">
            <Sort />           
            {!formVisibility && <List />
            }
            {formVisibility && <UserForm />}
        </div>
    )
}
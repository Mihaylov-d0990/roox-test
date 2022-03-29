import React from "react"
import Sort from './Sort'
import List from './list/List'
import UserForm from './userForm/UserForm'
import ListItemContext from "../context/ListItemContext"

export default function Container() {

    const [listVisibility, setListVisibility] = React.useState<boolean>(true)
    const [formVisibility, setFormVisibility] = React.useState<boolean>(false)
    const [userID, setUserID] = React.useState<string>("")

    const setID = (id: string) => {
        setUserID(id)
        setFormVisibility(formVisibility => !formVisibility)
        setListVisibility(listVisibility => !listVisibility)
    } 

    return (
        <div className="container">
            <Sort />
            {listVisibility && 
                <ListItemContext.Provider value={{setID: setID}} >
                    <List />
                </ListItemContext.Provider>
            }
            {formVisibility && <UserForm />}
        </div>
    )
}
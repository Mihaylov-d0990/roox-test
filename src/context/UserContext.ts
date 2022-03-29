import React, { MouseEventHandler } from "react"
import { User } from "../types/types"

interface IUserContext {
    users: User[] | null,
    formVisibility: boolean,
    userID: string,
    setID: Function,
    setFormVisibility: Function,
    sortCity: MouseEventHandler,
    sortCompany: MouseEventHandler
}

const defaultState: IUserContext = {
    users: null,
    formVisibility: false,
    userID: "",
    setID: () => "",
    setFormVisibility: () => "",
    sortCity: () => "",
    sortCompany: () => ""
}

const UserContext = React.createContext<IUserContext>(defaultState)

export default UserContext
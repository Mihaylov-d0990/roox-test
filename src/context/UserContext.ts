import React from "react"
import { User } from "../types/types"

interface IUserContext {
    users: User[] | null
}

const defaultState: IUserContext = {
    users: null
}

const UserContext = React.createContext<Partial<IUserContext>>(defaultState)

export default UserContext
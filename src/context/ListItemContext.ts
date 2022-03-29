import React from "react"

interface IListItemContext {
    setID: Function
}

const defaultState: IListItemContext = {
    setID: () => ""
}

const ListItem = React.createContext<IListItemContext>(defaultState)

export default ListItem
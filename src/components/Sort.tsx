import React from "react"
import UserContext from "../context/UserContext"

export default function Sort() {

    const { sortCity, sortCompany } = React.useContext(UserContext)

    return (
        <div className="sort">
            <div className="sort__title">Сортировка</div>
            <button className="button" onClick={sortCity}>по городу</button>
            <button className="button" onClick={sortCompany}>по компании</button>
        </div>
    )
}
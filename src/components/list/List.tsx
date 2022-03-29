import React from "react"
import UserContext from "../../context/UserContext"
import ListItem from "./ListItem"

export default function List() {

    const { users } = React.useContext(UserContext)
   
    return (
        <div className="user-list">
            <div className="user-list__content">
                <div className="user-list__title title">Список пользователей</div>
                <div className="user-list__list">
                    {users?.map((item: any) => {
                        return <ListItem id={item.id} name={item.name} city={item.city} company={item.name} key={item.id} />
                    })}
                </div>
                <div className="user-list__quantity">
                    Найдено {users?.length ? users?.length : 0} пользователей
                </div>
            </div>
        </div>
    )
}
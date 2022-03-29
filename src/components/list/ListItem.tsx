import React from "react"
import ListItemContext from "../../context/ListItemContext"

interface Item {
    id: string,
    name: string,
    city: string,
    company: string
}

export default function ListItem(props: Item) {

    const { setID } = React.useContext(ListItemContext)

    return (
        <div className="user-list__item">
            <div className="user-list__data">
                <div className="user-list__info">
                    <div className="user-list__field">ФИО:</div>
                    <div className="user-list__text">{props.name}</div>
                </div>
                <div className="user-list__info">
                    <div className="user-list__field">город:</div>
                    <div className="user-list__text">{props.city}</div>
                </div>
                <div className="user-list__info">
                    <div className="user-list__field">компания:</div>
                    <div className="user-list__text">{props.company}</div>
                </div>
            </div>
            <div className="user-list__more">
                <div className="user-list__link" onClick={() => setID(props.id)}>
                    Подробнее
                </div>
            </div>
        </div>
    )
}
import React from "react"
import UserInput from "./UserInput"
import UserContext from "../../context/UserContext"
import { User } from "../../types/types"

const defaultState: User = {
    id: "",
    name: "",
    username: "",
    email: "",
    street: "",
    company: "",
    city: "",
    zipCode: "",
    phone: "",
    website: "",
    comment: ""
}

export default function UserForm() {

    const [disabled, setEnabled] = React.useState<boolean>(true)
    const [user, setUser] = React.useState<User>(defaultState)
    const { users, userID, setFormVisibility } = React.useContext(UserContext)

    React.useEffect(() => {
        const currentUser = users?.filter((item: User) => item.id === userID)[0]
        currentUser ? setUser(currentUser) : setUser(defaultState)
    }, [])

    const sendData = () => {
        for (const [key, value] of Object.entries(user)) {
            if (key !== "comment" && value === "") return
        }
        console.log(JSON.stringify(user))
        setFormVisibility()
    }

    return (
        <div className="user-form">
            <div className="user-form__content">
                <div className="user-form__head">
                    <div className="user-form__title title">Профиль пользователя</div>
                    <div className="user-form__button button" onClick={() => setEnabled(disabled => !disabled)}>Редактировать</div>
                </div>
                <form className="user-form__form">
                    <UserInput title={"Name"} value={user.name} onChange={e => setUser({...user, name: e.target.value})} enabled={disabled} textarea={false} />
                    <UserInput title={"User name"} value={user.username} onChange={e => setUser({...user, username: e.target.value})} enabled={disabled} textarea={false} />
                    <UserInput title={"E-mail"} value={user.email} onChange={e => setUser({...user, email: e.target.value})} enabled={disabled} textarea={false} />
                    <UserInput title={"Street"} value={user.street} onChange={e => setUser({...user, street: e.target.value})} enabled={disabled} textarea={false} />
                    <UserInput title={"City"} value={user.city} onChange={e => setUser({...user, city: e.target.value})} enabled={disabled} textarea={false} />
                    <UserInput title={"Zip code"} value={user.zipCode} onChange={e => setUser({...user, zipCode: e.target.value})} enabled={disabled} textarea={false} />
                    <UserInput title={"Phone"} value={user.phone} onChange={e => setUser({...user, phone: e.target.value})} enabled={disabled} textarea={false} />
                    <UserInput title={"Website"} value={user.website} onChange={e => setUser({...user, website: e.target.value})} enabled={disabled} textarea={false} />
                    <UserInput title={"Comment"} value={user.comment} onChange={e => setUser({...user, comment: e.target.value})} enabled={disabled} textarea={true} />
                </form>
                {
                    disabled ?
                    <button className="user-form__send button button_disabled">Отправить</button> :
                    <button className="user-form__send button button_enabled" onClick={sendData}>Отправить</button>
                }
            </div>
        </div>
    )
}
import React from "react"
import UserInput from "./UserInput"

export default function UserForm() {

    const [disabled, setEnabled] = React.useState<boolean>(true)

    return (
        <div className="user-form">
            <div className="user-form__content">
                <div className="user-form__head">
                    <div className="user-form__title title">Профиль пользователя</div>
                    <div className="user-form__button button" onClick={() => setEnabled(disabled => !disabled)}>Редактировать</div>
                </div>
                <form className="user-form__form">
                    <UserInput title={"Name"} value={"Name"} enabled={disabled} textarea={false} />
                    <UserInput title={"Name"} value={"Name"} enabled={disabled} textarea={false} />
                    <UserInput title={"Name"} value={"Name"} enabled={disabled} textarea={false} />
                    <UserInput title={"Name"} value={"Name"} enabled={disabled} textarea={false} />
                    <UserInput title={"Name"} value={""} enabled={disabled} textarea={true} />
                </form>
                {
                    disabled ?
                    <button className="user-form__send button button_disabled">Отправить</button> :
                    <button className="user-form__send button button_enabled">Отправить</button>
                }
            </div>
        </div>
    )
}
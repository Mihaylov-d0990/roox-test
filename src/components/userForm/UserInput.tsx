
interface InputProps {
    title: string,
    value: string,
    enabled: boolean,
    textarea: boolean
}

export default function UserInput(props: InputProps) {

    return (
        <div className="user-form__input">
            <div className="user-form__input-title">{props.title}</div>
            {
                props.textarea ? 
                <textarea defaultValue={props.value} disabled={props.enabled}></textarea> :
                <input type="text" defaultValue={props.value} disabled={props.enabled} />
            }
        </div>
    )
}
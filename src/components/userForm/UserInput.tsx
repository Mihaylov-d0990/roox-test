import React, { ChangeEventHandler } from "react"

interface InputProps {
    title: string,
    value: string,
    enabled: boolean,
    textarea: boolean,
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export default function UserInput(props: InputProps) {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const style = inputRef.current?.value === "" && !props.textarea && !props.enabled ? {border: "1px solid #D91313"} : {}

    return (
        <div className="user-form__input">
            <div className="user-form__input-title">{props.title}</div>
            {
                props.textarea ? 
                <textarea defaultValue={props.value} disabled={props.enabled} onChange={props.onChange}></textarea> :
                <input ref={inputRef} style={style} type="text" defaultValue={props.value} disabled={props.enabled} onChange={props.onChange} />
            }
        </div>
    )
}
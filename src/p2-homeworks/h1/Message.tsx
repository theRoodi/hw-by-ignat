import React from 'react'
import {MessageType} from './HW1';
import style from './Message.module.css'

function Message(props: MessageType) {
    return (
        <div className={style.message}>
            <img src={props.avatar} alt="avatar" className={style.avatar}/>
            <div className={style.circle}/>
            <div className={style.message_box}>
                <div className={style.name}>{props.name}</div>
                <div className={style.messages}>{props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message

import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogsItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} id={m.id}/> )
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/> //если не залогинен идет редирект

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>

                <div className={s.messages}>
                    <div>{messagesElements}</div>
                </div>
                <div>
                    <div>
                       <textarea value={newMessageBody}
                                 onChange={onNewMessageChange}
                                 placeholder='Entire your message'>
                       </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>button</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
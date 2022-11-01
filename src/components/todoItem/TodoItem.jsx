import React from 'react'
import { useState } from 'react'
import css from './TodoItem.module.css'

const TodoItem = (props ) => {
    const [isInputShow, setInputShow] = useState(false)
    // const [isshowClick, setshowClick] = useState(false)
    const onDelete = () => {
        props.haendleDelete(props.id)
    }
    const onEdit = () => {
        setInputShow(!isInputShow)
    }
    // const showClick = () => {
    //     setshowClick(!isshowClick)
    // }
    return(
        <div>
            <dir className={css.wrapper}>
                {isInputShow ? (
                    <form >
                        <input value={props.text}  type="text" placeholder="todo"/>
                        <button >Save</button>
                    </form>
                    
                ) : (
                     <label>
                <input onChange={() => props.haendleStatus(props.id)} type="checkbox" checked={props.checked}/>
                <span className={props.checked === true ? css.text : ''}>
                    {props.text}
                </span>
                
                </label>
                )}
               
                <div>
                    <button onClick={onEdit}>Edit</button>
                    <button onClick={onDelete}>del</button>
                </div>
            </dir>
        </div>
    )
}

export default TodoItem;
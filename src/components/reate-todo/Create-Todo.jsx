import { useState } from 'react'
import  './Create-Todo.css'

const CreateTodo = (props) => {
    const [value, setValue] = useState('');
    // const [sum, setSum] = useState(0);
    // console.log(value);
    const submit = (event) => {
        event.preventDefault();
        // alert(value)
        props.addNewTodo(value)
    }

    const handleChange = (event) => {
        // console.log(event);
        setValue(event.target.value);
    }

//  const onPlus = () =>{
//     setSum( sum + 1)
//  }

//  const onMinus = () => {
//     setSum( sum -1)
//  }

    return(
        <form onSubmit={submit} className='wrapper'>
            <input onChange={handleChange} type="text" placeholder="Enter todo" />
            <button >+Creat</button>
            {/* {sum}
            <button onClick={onMinus}>-</button> */}

        </form>
        
    )
}

export default CreateTodo

import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import CreateTodo from './components/reate-todo/Create-Todo';
import TodoItem from './components/todoItem/TodoItem';




function App() {
  const [arr, setArr] = useState( [
    {id:1, text: "купить pico", checked: true},
    {id:2, text: "купить cola", checked: true},
    {id:3, text: "купить pepsi", checked: false},
   
  ]);
  const haendleDeletTodo = (id) => {
    const newArr = arr.filter((item) => {
      return item.id !== id
    })
   setArr(newArr)
  }
  const haendleStatus = (id) => {
    
    const newArr = arr.map((item) => {
      if(item.id === id) {
        return {...item, checked: !item.checked}
      }
      return item
    })
    console.log(newArr);
    setArr(newArr)
  };

  const result = arr.reduce((acc, item) => {
    return acc + Number(item.checked);
  }, 0)

  const handleAddTodo = (NewText) => {
    // arr.push({text:"Купить сок", checked: false})
    setArr([ ...arr,{text:NewText, checked: false}])
    
  }

  const newArr = arr.map((item) => {
    return (
    <TodoItem
    haendleStatus={haendleStatus}
      haendleDelete={haendleDeletTodo}
      id={item.id}
       text={item.text}
        checked={item.checked}
        />)
  })
  console.log(newArr);
  

  return (
    <div className="App">
      {/* <button onClick={handleAddTodo}>test</button> */}
    <Header length={arr.length} result={result}/>
    <div className='content'>
         <CreateTodo addNewTodo={handleAddTodo}/>
         <div className='todo-wrapper'>
         {newArr}
         </div>
         
    </div>
    </div>
  );
}

export default App;

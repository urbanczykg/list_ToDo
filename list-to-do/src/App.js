import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import TodoItem from './components/ToDoItem'
import todoData from './todoData'

class App extends React.Component
{ 
    constructor()
    {
        super()
        this.state = {
            todo:todoData
            
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id){
        this.setState(prevState =>{
            const updatedToDo = prevState.todo.map(todo => {
                if(todo.id === id){
                    todo.completed =!todo.completed
                }
                return todo
            })
           return{
               todo:   updatedToDo
           }
        })
            
    }
    render(){
    
    const ToDoItems= this.state.todo.map(Item => <TodoItem key={Item.id} Item={Item} handleChange={this.handleChange} />)
    return (
       
        <div className ="todo-list">
             <Header />
             {ToDoItems}
        </div>
    )
}
}
export default App
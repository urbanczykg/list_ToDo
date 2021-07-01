import React from 'react'

class TodoItem extends React.Component
{   render()
    {   
        const completedStyle = {
            fontStyle: "iitalic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }
    return (
        <div className = "todo-item">
        <input type = "checkbox" 
        checked = {this.props.Item.completed} 
        onChange = { ()=> this.props.handleChange(this.props.Item.id)}/>
        <p style = { this.props.Item.completed ? completedStyle : null}> {this.props.Item.text}</p>
    </div>
    )
}
}
export default TodoItem
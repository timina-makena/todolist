import React from 'react'

const Todolist = ({todos, title}) => {
console.log(title)

let newTodos = todos.map(todo => {
    return (
        <div> 
            {todo.title}
        </div>
    
    )
}

)

  return (
    <>
 {newTodos}
    </>
  )
}

export default Todolist
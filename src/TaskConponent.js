export const TaskComponent = (props) => {
  return (
      <div key={props.index}>
          <p>{props.todo}</p>

          <button onClick={()=>props.deleteTodo(props.index)} >delete</button>

          <button onClick={()=>props.deleteTask(props.todo)} >delete ByName</button>
      </div>

  ) ;
}
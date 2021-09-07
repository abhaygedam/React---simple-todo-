import TodoItem from "./TodoItem";

export default function TodoList(props) {
    console.log(props.data);
    const list = props.data;
    return (
       <>
        {list.map(e =>
            <TodoItem title={e.title} status={e.status}/>
            )}
      </>
    )
   


}
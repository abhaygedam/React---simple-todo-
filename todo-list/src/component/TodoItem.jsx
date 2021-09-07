import "./TodoItems.css";

export default function TodoItem ({title, status}) {
    return (
         <div className="titles">
                    {title} :- {status ? "Done" : "Not Done"}
        </div>
    )
}
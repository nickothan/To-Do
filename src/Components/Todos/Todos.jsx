import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleToDo } from "../../app/Slice/todosSlice";
import { ToDoContainer, TaskContainer } from "./styles";
import { filters } from "../../consts";

const Task = ({ id, title, description, completed }) => {
    const dispatch = useDispatch();
    return (
        <TaskContainer completed={completed}>
            <div
                className="state"
                onClick={() => {
                    dispatch(toggleToDo(id));
                    console.log("Prueba");
                }}
            />
            <div>
                <h3>{title}</h3>
                <h4>{description}</h4>
            </div>
        </TaskContainer>
    );
};

export default function Todos() {
    const [selectedTodos, setSelectedTodos] = useState([]);
    const { todos, filter } = useSelector((store) => store);

    useEffect(() => {
        switch (filter) {
            case filters.ALL:
                setSelectedTodos(todos);
                break;
            case filters.IN_PROGRESS:
                setSelectedTodos(todos.filter((task) => !task.completed));
                break;
            case filters.COMPLETED:
                setSelectedTodos(todos.filter((task) => task.completed));
                break;

            default:
                setSelectedTodos([]);
                break;
        }
    }, [filter, todos]);

    return (
        <ToDoContainer>
            {selectedTodos.map((props) => (
                <Task key={props.id} {...props} />
            ))}
        </ToDoContainer>
    );
}

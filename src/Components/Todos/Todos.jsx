import { useSelector, useDispatch } from "react-redux";
import { toggleToDo } from "../../app/Slice/todosSlice";
import { ToDoContainer, TaskContainer } from "./styles";

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
    const todos = useSelector((store) => store.todos);

    return (
        <ToDoContainer>
            {todos.map((props) => {
                //console.log("Args: ", args);
                return <Task key={props.id} {...props} />;
            })}
        </ToDoContainer>
    );
}

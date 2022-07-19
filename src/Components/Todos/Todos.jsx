import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToDo } from "../../app/Slice/todosSlice";
import { ToDoContainer, Botones } from "./styles";
import { filters } from "../../consts";
import Task from "./Task/Task";
import  Modal from "../Modal";

//import { ReactComponent as TrashIcon } from "../../assets/Trash.jpg";

export default function Todos() {
    const dispatch = useDispatch();
    const [selectedTodos, setSelectedTodos] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [idDeleted, setIdDeleted] = useState(null);
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

    const handleDelete = (id) => {
        setIsOpen(true);
        setIdDeleted(id);
    };

    const removeTask = () => {
        dispatch(removeToDo(idDeleted));
        setIsOpen(false);
        setIdDeleted(null);
    };

    const dontRemoveTask = () => {
        setIsOpen(false);
        setIdDeleted(null);
    };

    return (
        <>
            <ToDoContainer>
                {selectedTodos.map((props) => (
                    <Task key={props.id} handleDelete={handleDelete} {...props} />
                ))}
            </ToDoContainer>
            <Modal isOpen={isOpen} handleClose={dontRemoveTask}>
                <p>Are you sure?</p>
                <Botones>
                    <button onClick={dontRemoveTask}>No</button>
                    <button onClick={removeTask}>Yes</button>
                </Botones>
            </Modal>
        </>
    );
}

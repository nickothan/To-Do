import { useDispatch } from "react-redux";

import { toggleToDo } from "../../../app/Slice/todosSlice";
import { TaskContainer, RemoveButton } from "./styles";
import { ReactComponent as Minus } from "../../../assets/minus.svg";

import Modal from "../../Modal/";

export default function Task({ id, title, description, completed, handleDelete }) {
    const dispatch = useDispatch();
    return (
        <TaskContainer completed={completed}>
            <div className="state" onClick={() => dispatch(toggleToDo(id))} />
            <div>
                <h3>{title}</h3>
                <h4>{description}</h4>
            </div>
            <RemoveButton onClick={() => handleDelete(id)}>{<Minus />}</RemoveButton>
            <Modal active={true}>Prueba de modal</Modal>
        </TaskContainer>
    );
}

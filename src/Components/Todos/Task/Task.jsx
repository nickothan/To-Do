import { useDispatch } from "react-redux";

import { toggleToDo, removeToDo } from "../../../app/Slice/todosSlice";
import { TaskContainer, RemoveButton } from "./styles";
import { ReactComponent as Minus } from "../../../assets/minus.svg";

export default function Task({ id, title, description, completed }) {
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
            <RemoveButton
                onClick={() => {
                    console.log("id: ", id);
                    dispatch(removeToDo(id));
                }}>
                {<Minus />}
            </RemoveButton>
        </TaskContainer>
    );
}

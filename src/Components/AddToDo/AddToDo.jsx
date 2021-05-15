import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../../app/Slice/todosSlice";

import { AddToDoContainer } from "./styles";

export default function AddToDo() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        if (!(title.trim() && description.trim())) return;
        dispatch(
            addToDo({
                id: Date.now(),
                title,
                description,
                completed: false,
            })
        );
    };

    return (
        <AddToDoContainer>
            <form onSubmit={handleChange}>
                <div className="fields-container">
                    <div className="field-container">
                        <label htmlFor="title">Title </label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="field-container">
                        <label htmlFor="description">Description </label>
                        <input
                            type="text"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                <button type="submit" className="add-button">
                    Add
                </button>
            </form>
        </AddToDoContainer>
    );
}

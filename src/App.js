import React from "react";

import Header from "./Components/Header/Header";
import Todos from "./Components/Todos/Todos";
import Footer from "./Components/Footer/Footer";
import AddToDo from "./Components/AddToDo/AddToDo";
import Filter from "./Components/Filters/Filters";

function App() {
    return (
        <div className="app-container">
            <Header />
            <div className="main-container">
                <AddToDo />
                <Filter />
                <Todos />
            </div>
            <Footer />
        </div>
    );
}

export default App;

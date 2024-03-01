import React, { useState } from "react";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import menuAPI from "./menuAPI.jsx";
import MenuForm from "./MenuForm.jsx";

function Menu({ projects, onSave, setProject }) {
    const [allData, setAllData] = useState([])
    const [projectBeingEdited, setProjectBeingEdited] = useState({})

    //EDIT HANDLER FOR POPPING THE DATA INTO EDIT FORM
    const editHandling = (project) => {
        setProjectBeingEdited(project)
    }

    //CANCEL HANDLER
    const cancelEditHandling = () => {
        setProjectBeingEdited({})
    }

    //DELETE HANDLER
    const deleteHandling = async (id) => {
        setAllData(allData.filter((data) => data.id !== id))
        await menuAPI.delete(id)
        window.location = "/menu"
    }

    return (
        //MENU PAGE SECTION
        <div className="menu">
            <h1 className="menuTitle">Menus</h1>
            <div className="menuList">
                {projects?.map((item, i) => (
                    <div key={i}>
                        {item === projectBeingEdited ? (
                            <MenuForm onSave={onSave} onCancel={cancelEditHandling} project={item} projects={projects} setProject={setProject} />
                        ) : (
                            <MenuItem item={item} onEdit={editHandling} onDelete={deleteHandling} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;

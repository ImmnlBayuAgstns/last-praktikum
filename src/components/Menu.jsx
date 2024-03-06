import React, { useState } from "react";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import { menuAPI } from "./apiHandler/API.jsx";
import MenuForm from "./MenuForm.jsx";

const Menu = ({ projects, onSave, setProject }) => {
    const [allData, setAllData] = useState([])
    const [projectBeingEdited, setProjectBeingEdited] = useState({})
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")

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

    //SORTING HANDLER
    const sorting = (a, b) => {
        if (sort === "asceding") return a.name.localeCompare(b.name)
        else if (sort === "descading") return b.name.localeCompare(a.name)
    }

    return (
        //MENU PAGE SECTION
        <div className="menu">
            <h1 className="menuTitle">Menus</h1>
            {/* SORTING AND SEARCH BAR */}
            <div className="input">
                <input type="text" className="search" placeholder="Search.." onChange={(e) => setSearch(e.target.value)} />
                <select onChange={(e) => setSort(e.target.value)} className="selectSort">
                    <option value="asceding">A - Z</option>
                    <option value="descading">Z - A</option>
                </select>
            </div>
            <div className="menuList">
                {projects
                    .filter(item => item.name.toLowerCase().indexOf(search) > -1)
                    .sort((a, b) => sorting(a, b))
                    .map((item, i) => (
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

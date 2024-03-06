import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.css"


const MenuItem = ({ item, onEdit, onDelete }) => {

    //EDIT HANDLER BY CLICKING THE BUTTON
    const handleEditClick = (projectBeingEdited) => {
        onEdit(projectBeingEdited)
    }

    return (
        //MENU CARD
        <div className="menuItem">
            <Link to={"/menu/" + item.id}>
                <div style={{ backgroundImage: `url(${item.image})` }}> </div>
            </Link>
            <h1> {item.name} </h1>
            <p>{item.description.substring(0, 60) + "..."}</p>
            <p> ${item.price} </p>
            <button type="button" className="edit" onClick={() => handleEditClick(item)} >
                <span></span>
                Edit
            </button>
            <button type="button" className="delete" onClick={() => (window.confirm("Are you sure?") ? onDelete(item.id) : null)}>
                <span></span>
                Delete
            </button>


        </div>
    )
}

export default MenuItem;

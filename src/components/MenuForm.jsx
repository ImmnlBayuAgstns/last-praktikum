import React, { useState } from "react";
import Menus from "./MenuList";
import "../styles/Menu.css"

const MenuForm = ({ onSave, onCancel, project: initialProject }) => {
    const [project, setProject] = useState(initialProject)
    const [errors, setErrors] = useState({
        name: "",
        description: "",
        price: ""
    })

    //SUBMIT HANDLER FOR EDIT
    const submitHandling = (e) => {
        e.preventDefault()
        if (!isValid()) return
        onSave(project)
    }

    //CHANGE HANDLER FOR EDITING THE DATA
    const changeHandling = (event) => {
        const { type, name, value, checked } = event.target


        let updateValue = type === "checkbox" ? checked : value

        if (type === "number") {
            updateValue = Number(updateValue)
        }

        const change = {
            [name]: updateValue
        }

        let updateProject

        setProject((p) => {
            updateProject = new Menus({ ...p, ...change })
            return updateProject
        })

        setErrors(() => validate(updateProject))
    }

    //VALIDATE THE DATA EDITED MEETS THE CRITERIA OR NOT
    const validate = (project) => {
        let errors = { name: "", description: "", price: "" }

        if (project.name.length === 0) errors.name = "Name is Required"

        if (project.name.length > 0 && project.name.length < 4) errors.name = "Name need to be at least 3 character"

        if (project.description.length === 0) errors.description = "Description is Required"

        if (project.price.length === 0) errors.budget = "Price must be more than $0"

        return errors
    }

    const isValid = () => {
        return (
            errors.name.length === 0 &&
            errors.description.length === 0 &&
            errors.price.length === 0
        )
    }

    return (
        //EDIT FORM
        <div>
            <form action="" onSubmit={submitHandling}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder='Enter Name' defaultValue={project.name} onChange={changeHandling} />
                <label htmlFor="description">Description</label>
                <textarea name="description" placeholder="Description" cols="30" rows="10" defaultValue={project.description} onChange={changeHandling}></textarea>
                <label htmlFor="image">Image Link</label>
                <textarea name="image" placeholder="Image URL" cols="30" rows="10" defaultValue={project.image} onChange={changeHandling}></textarea>
                <label htmlFor="price">Price</label>
                <input type="text" name="price" placeholder='Enter Price' defaultValue={project.price} onChange={changeHandling} />
                <div>
                    <button className="save">
                        Save
                    </button>
                    <span />
                    <button type="button" className="cancel" onClick={onCancel} >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default MenuForm

import React, { useState, useEffect } from 'react'
import Menu from './Menu'
import menuAPI from './menuAPI'

const MenuPage = () => {
    const [projects, setProjects] = useState([]);

    //GETTING ALL DATA FROM API TO FILLED INSIDE THE STATE
    useEffect(() => {
        const load = async () => {
            setProjects(await menuAPI.get())
        }
        load()
    }, [])

    //SAVE HANDLER FOR EDITING
    const saveProject = (project) => {
        menuAPI.edit(project)
            .then(() => {
                setProjects(projects.map((p) => p.id === project.id ? project : p))
            })
    }
    return (
        <div>
            <Menu onSave={saveProject} projects={projects} setProjects={setProjects} />
        </div>
    )
}

export default MenuPage

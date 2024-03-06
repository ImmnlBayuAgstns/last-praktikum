import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { menuAPI } from './apiHandler/API.jsx'
import Footer from './Footer'
import "../styles/Menu.css"


const CreateMenu = () => {
    const [data, setData] = useState([])
    const formRef = useRef()
    const navigate = useNavigate();

    // GETTING DATA FROM API TO PUT INSIDE THE STATE FOR VALIDATION 
    useEffect(() => {
        const loadData = async () => {
            setData(await menuAPI.get())
        }
        loadData()
    }, [])

    //SUBMIT HANDLER
    const submit = (e) => {
        e.preventDefault();

        const { name, image, description, price } = formRef.current;

        if (name.value.length < 4) return;
        if (image.value.length === 0) return;
        if (description.value.length === 0) return;
        if (price.value.length === 0) return;

        let duplicate = false
        data.map((item) => {
            if (item.name === name.value) return (duplicate = true)
        })

        if (duplicate) return alert("ada duplikasi menu")

        const currentData = {};
        currentData.id = "" + (data.length + 1)
        currentData.name = name.value
        currentData.image = image.value
        currentData.description = description.value
        currentData.price = price.value

        menuAPI.post(currentData)
        data.push(currentData)
        navigate("/menu")
    }

    return (
        //CREATE FORM
        <>
            <div style={{ height: "100vh" }}>
                <form action="" ref={formRef}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder='must 3 character or more' defaultValue={""} required />
                    <label htmlFor="description">Description</label>
                    <textarea name="description" placeholder="needed character" cols="30" rows="10" defaultValue={""} required></textarea>
                    <label htmlFor="image">Image</label>
                    <textarea name="image" placeholder="Image URL" cols="30" rows="10" ></textarea>
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" placeholder='Enter Price' />
                    <div>
                        <button className="submitCreate" onClick={submit}>
                            Sumbit
                        </button>
                        <span />
                        <Link to="/menu">
                            <button type="button" className='cancelCreate'>
                                Cancel
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default CreateMenu

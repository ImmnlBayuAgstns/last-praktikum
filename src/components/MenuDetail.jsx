import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import menuAPI from "./menuAPI";

function MenuDetail() {
    const [data, setData] = useState()
    const { id } = useParams()

    //GETTING DATA FROM API BY ID AND FILLED INTO STATE
    useEffect(() => {
        menuAPI.find(id)
            .then((res) => setData(res.data))
    }, [id])

    //CHECKING THE STATE EMPTY OR NOT
    if (!data) return <p>Loading..</p>

    return (
        //MENU CARD BY ID
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${data.image})` }}> </div>
            <h1> {data.name} </h1>
            <p>{data.description}</p>
            <p> ${data.price} </p>

            {/* LINKED INTO MENU PAGES */}
            <Link to={"/menu"}>
                <button >
                    <span></span>
                    Back
                </button>
            </Link>
        </div>
    )
}

export default MenuDetail
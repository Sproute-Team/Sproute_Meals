import React from "react";
import {Link } from 'react-router-dom'
const Middlemain = () => {
    return (
        <div className=" mt-10 flex flex-col">
            <h1 className="text-white m-auto w-fit text-4xl font-bold mb-6">Register your restaurant at <br /><span className="m-auto w-fit ml-36">Sproute Meals</span></h1>
            <p className="text-white text-xl w-fit m-auto opacity-90 mb-5">For free and get more revenues</p>
            <button className="bg-[#FA4B0C] text-white w-fit mx-auto px-5"><Link to='/signup'>Register now</Link></button>
        </div>
    )
}
export default Middlemain 
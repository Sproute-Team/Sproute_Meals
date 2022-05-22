import React from "react";
import Component1 from "../images/Component1.png";
import Component2 from "../images/Component2.png";
import Component3 from "../images/Component2a.png";
import Component4 from "../images/Component3.png";

const GetStarted = () => {
    return (
        <>
            <div className="flex flex-col">
                <h1 className="m-auto w-fit text-2xl font-bold mt-5">Get Started</h1>
                <p className="m-auto w-fit opacity-90">For free and get more revenues! For free and get more revenues! For free and get more revenues! </p>
            </div>
            <div className="flex flex-row mt-10">
                <div className="grid grid-cols-2">
                    <div className=" bg-white rounded-md mx-10 my-5 p-10">
                        <img src={Component1} className="w-20 h-16 m-auto" alt="" />
                        <p className="font-bold text-base m-auto">Register your account</p>
                    </div>
                    <div className=" bg-white rounded-md mx-10 my-5 p-10">
                        <img src={Component2} className="w-20 h-16 m-auto" alt="" />
                        <p className="font-bold text-base">Create your status</p>
                    </div>
                    <div className=" bg-white rounded-md mx-10 m-auto my-5 p-10">
                        <img src={Component3} alt="" className="w-20 h-16 m-auto" />
                        <p className="font-bold text-base">Start Receiving orders</p>
                    </div>
                    <div className=" bg-white rounded-md mx-10 m-auto my-5 p-10">
                        <img src={Component4} alt="" className="w-20 h-16 m-auto" />
                        <p className="font-bold text-base mx-auto w-fit">Manage Your deliveries</p>
                    </div>
                </div>
                <div className="w-1/2 ml-20 mt-10">
                    <p className="p-16">Britain is famous all over the world for its gardens, dogs, villages, buses, cars, private schools, the Queen, sports like football and cricket, Parliament. However, not so much has been written about the wonderful food that can be found in Britain. Read two texts about food and say what the English eat and what the British food is like. Is there any difference between the English and the British food? The texts are for beginners and for the upper-intermediate level.</p>
                    {/* <button className="bg-[#FA4B0C] mx-auto  rounded px-8 py-3 ml-16 text-white font-bold">Get Started</button> */}
                    <button className="bg-[#FA4B0C] text-white w-fit mx-auto px-5">Get Started</button>
                </div>
            </div>
        </>
    )
}
export default GetStarted
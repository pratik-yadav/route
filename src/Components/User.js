import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    const {userid} = useParams()
    return (
        <>
            <div
                className="bg-gray-700 text-white text-3xl"
            >
                User: {userid}
            </div>
        </>
    );
}
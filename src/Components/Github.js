import React, { useEffect, useState } from "react";

export default function Github(){
    // const [data, setData] = useState('')
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response=>response.json)
    //     .then(data =>{
    //         // console.log(data)
    //         setData(data)
    //     })
    // }, [])
    return (
        <>
            <div
                className="bg-gray-700 text-white text-3xl"
            >
                Github Followers:
            </div>
        </>
    );
}
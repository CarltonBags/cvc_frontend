import { useState, useEffect } from "react"
import axios from "axios"

export default function Join(){

    const [name, setName] = useState("")
    const [names, setNames] = useState([])
    const [status, setStatus] = useState(0)

    const changeName= (e) =>{
        setName(e.target.value)    
    }

    useEffect(()=>{
        const fetch = async ()=>{
            const res = await axios.get("")
            const names = res.data

        }
        fetch()
    },[])

    return(
        <div className="flex flex-col font-intro font-bold items-center justify-center py-8 ">
            <div className="text-7xl">
                BIST DU DABEI<span className="tennis-green">?</span>
            </div>
            <div className="text-5xl mt-12">
                HIER <span className="tennis-green">ZUSAGEN</span>
            </div>
            <div className="flex flex-row gap-4 items-end">
                <div className="flex flex-col items-start mt-4">
                    <div className="text-black font-bold font-intro">
                        NAME
                    </div>
                    <input 
                        className="border-4 border-black bg-white text-black px-2"
                        type="text"
                        onChange={changeName}
                        placeholder="Stefan Spörch"
                        value={name}
                    >
                    </input>
                </div>
                <div className="flex bg-[#d6ea3a] border-4 text-black border-black px-2 w-20 h-8 items-center hover:scale-105 hover:cursor-pointer">
                    starch              
                </div>

            </div>
            <div className="flex flex-col border-4 border-black mt-20 p-8 bg-[#FFFDD0]">
                <div className="text-5xl font-bold font-intro text-[#004aad]">
                    ZUSAGEN
                </div>
                <div className="text-5xl mt-4 font-bold font-intro">
                    <span className="tennis-green">17</span>
                </div>
                <div className="text-5xl mt-4 font-bold font-intro text-[#004aad]">
                    STARCH!
                </div>
            </div>
            

        </div>
    )
}
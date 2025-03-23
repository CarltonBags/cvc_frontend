import { useState, useEffect } from "react"
import axios from "axios"

export default function Join(){

    const [name, setName] = useState("")
    const [names, setNames] = useState([])
    const [status, setStatus] = useState(0)

    const changeName= (e) =>{
        setName(e.target.value)    
    }

    const submit = async () =>{
        if(name){
            setStatus(3)
            const response = await axios.post(import.meta.env.VITE_BACKEND_ADDUSER,{
                name:name
            },
            {
                headers: {
                  'Content-Type': 'application/json'
                }
            })
            console.log("Response:", response.data)
            if(response.data.success == true){
                setStatus(1)
            }
            if(response.data.success == false){
                setStatus(2)
            }
        }
        
    }
   

    useEffect(()=>{
        const fetch = async ()=>{
            const res = await axios.get(import.meta.env.VITE_BACKEND_GETNAMES)
            const nam = res.data
            console.log("res",res)
            setNames(nam)

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
                {status == 0 &&
                    <div                         
                        onClick={submit}
                     className="flex bg-[#d6ea3a] border-4 text-black border-black px-2 w-20 h-8 items-center hover:scale-105 hover:cursor-pointer">
                        starch              
                    </div>
                }
                {status == 1 &&
                    <div className="flex bg-green-500 border-4 text-black border-black px-2 w-20 h-8 items-center hover:scale-105 hover:cursor-pointer">
                        geil!              
                    </div>
                }
                {status == 2 &&
                    <div onClick={()=>setStatus(0)}className="flex bg-red-500 border-4 text-black border-black px-2 w-20 h-8 items-center hover:scale-105 hover:cursor-pointer">
                        scheiße!              
                    </div>
                }
                {status == 3 &&
                    <div className="flex bg-blue-500 border-4 text-black border-black px-2 w-20 h-8 items-center hover:scale-105 hover:cursor-pointer animate-pulse">
                        wadde             
                    </div>
                }
                

            </div>
            <div className="flex flex-col border-4 border-black mt-20 p-8 bg-[#FFFDD0]">
                <div className="text-5xl font-bold font-intro text-[#004aad]">
                    ZUSAGEN
                </div>
                <div className="text-5xl mt-4 font-bold font-intro">
                    <span className="tennis-green">{names && names.length >0 ? names.length : 0}</span>
                </div>
                <div className="text-5xl mt-4 font-bold font-intro text-[#004aad]">
                    STARCH!
                </div>
            </div>
            

        </div>
    )
}
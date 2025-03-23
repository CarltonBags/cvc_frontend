import { useState } from "react"

export default function Kontakt(){


    return(
        <div className="flex flex-col font-intro font-bold items-center justify-start py-8">
            <div className="text-7xl">
                KONTAKT<span className="tennis-green">.</span>
            </div>
            <div className="text-2xl md:text-5xl mt-20">
                <span className="tennis-green">TELLMI:</span> 0800 72 493 25
            </div>
            <div className="text-2xl md:text-5xl mt-8">
                <span className="tennis-green">QUIX:</span> 0702 55 407 46
            </div>
            <div className="text-2xl md:text-5xl mt-8">
                <span className="tennis-green">MAIL:</span> CANDYVSCANCER@GMAIL.COM
            </div>
        </div>
    )
}
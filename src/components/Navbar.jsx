import logo from "/src/assets/candyvs.png"


export default function Navbar(){

    return(
        <div className="relative flex justify-center items-center h-12 border-b-4">
            <img className="w-32 bg-[#38b6ff] absolute -top-6 border-4 rounded-md" src={logo}></img>
        </div>

        
    )
}
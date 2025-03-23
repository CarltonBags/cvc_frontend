import marv from '/src/assets/marv.jpg'
import graf from '/src/assets/graph.jpg'
import ball from "/src/assets/tball.png"



export default function Versus(){

    const download = () =>{
        window.open("https://gateway.pinata.cloud/ipfs/bafybeiejter3jr3lksgaubj6p4a4u7ziel23b53orckeafsbgh6jbhau6m")
    }

    return(
    <div className=" flex flex-col md:flex-row mx-20 gap-20 items-center justify-center">
        <div className=" flex flex-col gap-8 items-center">
          <div className="font-bold text-7xl font-intro">
              MARV
          </div>
          <div className="w-[250px] border-4 p-4 relative before:absolute before:inset-0 before:rounded-md before:z-[-1]" 
            style={{ animation: "glowingBackground 2s infinite alternate" }}>
              <div className="flex flex-col">
                <img className="w-full border-4 border-black" src={marv}></img>
                <div className="flex flex-col border-2 border-black bg-white mt-4 pt-4">
                  <div className=" flex flex-row justify-between">
                    <div className="font-intro text-black pl-1">
                      laufen:
                    </div>
                    <div className="flex flex-row pr-4 gap-1">
                        <img className="w-4 h-4" src={ball}></img>
                        <img className="w-4 h-4" src={ball}></img>
                        <img className="w-4 h-4" src={ball}></img>
                        <img className="w-4 h-4" src={ball}></img>

                    </div>
                  </div>
                  <div className=" flex flex-row justify-between">
                    <div className="font-intro text-black pl-1">
                      technik:
                    </div>
                    <div className="flex flex-row pr-4 gap-1">
                        <img className="w-4 h-4" src={ball}></img>
                        <img className="w-4 h-4" src={ball}></img>
                        <img className="w-4 h-4" src={ball}></img>

                    </div>
                  </div>
                  <div className=" flex flex-row justify-between">
                    <div className="font-intro text-black pl-1">
                      equipment:
                    </div>
                    <div className="flex flex-row pr-4 gap-1">
                        <img className="w-4 h-4" src={ball}></img>

                    </div>
                  </div>
                  <div className=" flex flex-row justify-between">
                    <div className="font-intro text-black pl-1">
                      songs:
                    </div>
                    <div className="flex flex-row pr-4 gap-1">
                        <img className="w-4 h-4" src={ball}></img>
                        <img className="w-4 h-4" src={ball}></img>
                        <img className="w-4 h-4" src={ball}></img>

                    </div>
                  </div>
                  <div className=" flex flex-row justify-between">
                    <div className="font-intro text-black pl-1">
                      fame:
                    </div>
                    <div className="flex flex-row pr-4 gap-1">
                        <img className="w-4 h-4" src={ball}></img>
                        <img className="w-4 h-4" src={ball}></img>
                        <img className="w-4 h-4" src={ball}></img>
                        <img className="w-4 h-4" src={ball}></img>

                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div onClick={download} className=" w-36 border-4 border-black bg-[#d6ea3a] px-2 text-black font-bold hover:cursor-pointer">
            Get the Mask!
          </div>
        </div>
        <div className="tennis-green text-7xl font-bold">
          VS
        </div>
        <div className="flex flex-col gap-8 items-center">
          <div className="font-bold text-7xl font-intro">
              GRAF
          </div>
          <div className="w-[250px] border-4 p-2 bg-gray-200">
              <div className="flex flex-col">
                <img className="w-full border-4 border-black" src={graf}></img>
                <div className="flex flex-col border-2 border-black bg-white mt-4 pt-4">
                  <div className=" flex flex-row justify-between">
                    <div className="font-intro text-black pl-1">
                      laufen:
                    </div>
                    <div className="flex flex-row pr-4 gap-1">
                        <img className="w-4 h-4" src={ball}></img>
                        <img className="w-4 h-4" src={ball}></img>
                      

                    </div>
                  </div>
                  <div className=" flex flex-row justify-between">
                    <div className="font-intro text-black pl-1">
                      technik:
                    </div>
                    <div className="flex flex-row pr-4 gap-1">
                        <img className="w-4 h-4" src={ball}></img>
                        <img className="w-4 h-4" src={ball}></img>
                        <img className="w-4 h-4" src={ball}></img>

                    </div>
                  </div>
                  <div className=" flex flex-row justify-between">
                    <div className="font-intro text-black pl-1">
                      equipment:
                    </div>
                    <div className="flex flex-row pr-4 gap-1">
                        <img className="w-4 h-4" src={ball}></img>
                        <img className="w-4 h-4" src={ball}></img>
                        <img className="w-4 h-4" src={ball}></img>
                        <img className="w-4 h-4" src={ball}></img>

                    </div>
                  </div>
                  <div className=" flex flex-row justify-between">
                    <div className="font-intro text-black pl-1">
                      songs:
                    </div>
                    <div className="flex flex-row pr-4 gap-1">
                        <img className="w-4 h-4" src={ball}></img>
                        <img className="w-4 h-4" src={ball}></img>

                    </div>
                  </div>
                  <div className=" flex flex-row justify-between">
                    <div className="font-intro text-black pl-1">
                      fame:
                    </div>
                    <div className="flex flex-row pr-4 gap-1">
                        <img className="w-4 h-4" src={ball}></img>
                        <img className="w-4 h-4" src={ball}></img>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className=" w-36 border-4 border-gray-600 bg-gray-400 px-2 text-gray-600 font-bold">
            Get the Mask!
          </div>
        </div>
       
        
      </div>
    )
}
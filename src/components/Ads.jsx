import starch from "/src/assets/starch7.png"
export default function Ads(){



    return(
        <div className="flex flex-col font-intro font-bold items-center justify-center py-8 border-b-4 border-t-4">
            <div className="text-7xl">
                BROUGHT TO YOU <span className="tennis-green">BY</span>
            </div>
            <div className="flex flex-col md:flex-row justify-around md:gap-12 items-center mt-20">
                <div className=" flex flex-col w-72">
                    <img className="w-full" src={starch}></img>
                    <div className="text-lg ">
                        *DAS SCHLECHTE SETZT SICH <span className="tennis-green">DURST</span>
                    </div>
                </div>
                <div className="text-9xl mt-32 font-bold font-intro">
                    <span className="tennis-green">&</span>
                </div>
                <div className="text-9xl mt-32 font-bold font-intro">
                    SEX<span className="tennis-green">.</span>
                </div>
            </div>
        </div>
    )
}
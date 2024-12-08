import Image from "next/image";
import Filter from "./Pictures/filter.png"
export default function BlowHero(){
    return (
        <>
     <div className=" flex justify between-content-center items-center text-align-right gap-20 showBlowBar w-[100%] h-[4rem] bg-[#F9F1E7]" >
        <div className="flex justify between items-center ">
        <Image src={Filter} width={30} alt="Picture of the author" />
            <p>Filter</p>
            </div>

           <div className="justify between items-center gap-8">
            <p>| Showing 1–16 of 32 results |</p>
        </div>



        <div className="flex justify between items-right">
            <p>Show</p>
            {/* <div > 16</div> */}
            
            </div>
            <input className="w-[2.5rem] h-[2.5rem] bg-white text-black-900 text-center self-center" type="text" placeholder="16" name="" id="" />
            <p>Short by</p>
            <input className="w-[8rem] h-[2.5rem] bg-white text-black-900 text-center self-center" type="text" placeholder="16" name="" id="" />
              </div>
        </>
    )
}

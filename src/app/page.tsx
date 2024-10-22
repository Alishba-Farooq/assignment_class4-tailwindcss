import Card from "./components/Card";
const page=()=>{
  return(
    <div>
      
        <nav className=" flex w-full bg-purple-700 h-32 items-center">

           <div className="flex bg-blue-700 h-10 w-96 ml-4" ></div>

           <div className=" flex justify-end w-3/5 items-center space-x-4">
             <div className="bg-blue-500 h-10 w-44 "></div>
             <div className="bg-red-500 h-10 w-44"></div>
             <div className="bg-yellow-500 h-10 w-44"></div>
           </div>
           </nav>

           <div className="flex w-full mt-6 items-start pl-4 space-x-4 px-4">
              <div className="flex bg-green-500 h-56 flex-grow"></div>
              <div className="flex bg-blue-500 h-56 flex-grow"></div>
              <div className="flex bg-red-500 h-56 flex-grow"></div>
            </div>

            <div className="flex w-full mt-6 items-start pl-4 space-x-4 px-4">
                <div className="flex bg-gray-500 h-56 flex-grow"></div>
                <div className="flex bg-pink-500 h-56 flex-grow"></div>
            </div>  
          
    </div>
  )
}
export default page
import { Link } from "react-router-dom"
// eslint-disable-next-line no-unused-vars
import { useState } from "react"

const Navbar=()=>{
   const [display, setDisplay]=useState('none')

   const data=[{
    title:'Solution',
    leadsto:'/'

   },{
    title:'Vision',
    leadsto:'/'

   },{
    title:'Programs',
   leadsto:'/'

   },{
    title:'Blog',
   leadsto:'/'

   },{
    title:'Login',
    leadsto:'/'

   },{
    title:'Get Started',
    leadsto:'/'

   }]
  


   const handleClick=()=>{
    if(display=='none'){
        setDisplay('block')
    }
    else{
        setDisplay('none')
    }
    
   }



    return(
        <div className="flex flex-row ">
            <Link className="flex-auto border-2 p-7" to="/"> WIX</Link>
            
            <div className="flex flex-row justify-between border-2 pd-7 relative">
                
            <button onClick={handleClick} className="absolute right-0 top-0">button1</button>

               

               {data.map((dat,index)=>{
                return(
                    <div style={{display:display}} key={index}>
                        <Link to={dat.leadsto} className="m-7" ><button className="pt-7">{dat.title}</button></Link>
                    </div>
                )
               }
               )}
               

               

               
              
                

                
                
               
    

               
            </div>
        </div>
    )

}
export default Navbar

//transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300
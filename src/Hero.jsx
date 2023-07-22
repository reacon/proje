
import { Link } from "react-router-dom"
export default function Hero(){
    return (
        <>
        <div>
            <h1 className="text-5xl pb-10 pt-5" >The New Standard in Data Analysis</h1>
            <p className="text-xl pb-10">Use Data to Get a 360-Degree View of Your Business</p>
            <Link to='/'><button className="text-lg border-2 rounded-md pd-2 bg-blue-500">Learn more</button></Link>
        
        </div>
        </>
    )
}
import { Link } from "react-router-dom"

const Navbar=()=>{

    return(
        <div className="flex flex-row ">
            <Link className="flex-auto" to="/">WIX</Link>
            <div className="flex flex-row justify-between">
                <Link className="pb-2 pl-2 pr-2"><button>solutions</button></Link>
                <Link className="pb-2 pl-2 pr-2" ><button>vision</button></Link>
                <Link className="pb-2 pl-2 pr-2"><button >programs</button></Link>
                <Link className="pb-2 pl-2 pr-2"><button>blog</button></Link>
                <Link className="pb-2 pl-2 pr-2"><button>log in</button></Link>
                <Link className="pb-2 pl-2 pr-2"><button>get started</button></Link>
            </div>
        </div>
    )

}
export default Navbar
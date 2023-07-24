const Cool=()=>{
    return(
        <div className="text-start h-screen " style={{display:"grid", gridTemplateRows:" 1fr 2fr " }}>

        <div className="h-screen" style={{display:"grid", gridTemplateColumns:" 1fr 2fr " }}>
            
            <div className=" border-2 w-3/4 m-16  p-10 block h-4/5 align-middle rounded-md " style={{}}>
                <h1 className="text-2xl block w-13">Let Your Data Take Your Business to Higher Grounds</h1>
                <p className="mt-10"><span>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </span></p>
            </div>
            <div className="m-16 ml-0 w-4/4 border-2 p-10 relative block h-4/5 rounded-md   ">
                <div className=" border-2 absolute left-40 -top-24  w-1/4 h-2/4 ml-14 rounded-md border-neutral-700 bg-neutral-700 "><img className="pb-3 " src="blonland" alt="ganju"></img>
                <p className="m-5">Cloud Analytics Modernization</p>   
                <p className="m-5 border-b-2 pb-7 rounded-md">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p></div>   
                 <div className=" border-2 absolute bottom-20 left-40 w-1/4 h-2/4 ml-14 rounded-md"><img className="pb-3 " src="blonland" alt="ganju"></img>
                <p className="m-5">Cloud Analytics Modernization</p>
                <p className="m-5">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p></div>   
                  <div className=" border-2 absolute right-40  -bottom-24  w-1/4 h-2/4 mr-16 rounded-md "><img className="pb-3 " src="blonland" alt="ganju"></img>
                <p className="m-5">Cloud Analytics Modernization</p>   
                <p className="m-5">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p></div>   
                 <div className=" border-2 absolute top-20 right-40 w-1/4 h-2/4 mr-16 rounded-md"><img className="pb-3 " src="blonland" alt="ganju"></img>
                <p className="m-5">Cloud Analytics Modernization</p>
                <p className="m-5">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p></div>   
                 
            </div>
        </div>

        </div>
    )
    
}




export default Cool 
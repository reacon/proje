import styles from "../styles/Last.module.css";

export default function Last() {
  return (
    <div className="border border-[#949494]" style={{display: "grid", gridTemplateRows: "3fr 8fr"}}>
      <div className="" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"}}>
        <div className="border-r border-[#949494] border-b h-full p-10">
            <h1 className="text-3xl m-4 ">Our Partners</h1>
        </div>
        <div className="border-r border-[#949494] border-b block align-middle justify-center p-10">
            <img className="min-w-[100px] mt-6" src="https://static.wixstatic.com/media/c837a6_def52106c3644d81827598294297c6b6~mv2.png/v1/fill/w_272,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%2016.png"></img>
        </div>
        <div className="border-r border-[#949494] border-b block align-middle justify-center p-10">
            <img className="min-w-[100px]" src="https://static.wixstatic.com/media/c837a6_c30ebf8c66f24efaaa20d000079f76c7~mv2.png/v1/fill/w_202,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%2028.png" alt="" />
        </div>
        <div className="border-r border-[#949494] border-b block align-middle justify-center p-10">
            <img className="min-w-[100px] mt-8" src="https://static.wixstatic.com/media/c837a6_02aaf8e59c6647aaac518fec8d5dd3d3~mv2.png/v1/fill/w_304,h_66,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%2020.png" alt="" />
        </div>
        <div className="border-b border-[#949494] block align-middle justify-center p-10">
            <img className="min-w-[100px] mt-6" src="https://static.wixstatic.com/media/c837a6_affc426fdd1a4284b30463713e36b567~mv2.png/v1/fill/w_196,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%2017.png" alt="" />
        </div>
      </div>
      <div className="" style={{display: "grid", gridTemplateColumns: "6fr 4fr"}}>
        <div className="border-r border-[#949494] h-full bg-[url('https://media.tenor.com/4l25LHdOwegAAAAC/hollow-knight-valorant.gif')]">
            {/* <div className="h-full bg-[url('https://media.tenor.com/4l25LHdOwegAAAAC/hollow-knight-valorant.gif')]"></div> */}
        </div>
        <div>he</div>
      </div>
    </div>
  );
}

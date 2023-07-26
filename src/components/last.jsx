
export default function Last() {
  return (
    <div
      className="border border-[#303236] mt-12 "
      // style={{ display: "grid", gridTemplateRows: "1fr auto" }}
    >
      <div
        className="grid grid-rows-5 lg:grid-cols-5 lg:grid-rows-none lg:row-span-2 justify-center "
        // style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" }}
      >
        <div className="lg:border-r lg:border-[#303236] lg:border-b border-b border-[#303236] text-center">
          <h1 className="text-3xl m-4 ">Our Partners</h1>
        </div>
        <div className="lg:border-r lg:border-[#303236] lg:border-b border-b border-[#303236]">
          <img
            className="min-w-[100px] mt-6"
            src="https://static.wixstatic.com/media/c837a6_def52106c3644d81827598294297c6b6~mv2.png/v1/fill/w_272,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%2016.png"
          ></img>
        </div>
        <div className="lg:border-r lg:border-[#303236] lg:border-b border-b border-[#303236]">
          <img
            className="min-w-[100px]"
            src="https://static.wixstatic.com/media/c837a6_c30ebf8c66f24efaaa20d000079f76c7~mv2.png/v1/fill/w_202,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%2028.png"
            alt=""
          />
        </div>
        <div className="lg:border-r lg:border-[#303236] lg:border-b border-b border-[#303236]">
          <img
            className="min-w-[100px] mt-8"
            src="https://static.wixstatic.com/media/c837a6_02aaf8e59c6647aaac518fec8d5dd3d3~mv2.png/v1/fill/w_304,h_66,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%2020.png"
            alt=""
          />
        </div>
        <div className="border-b border-[#303236] block p-10">
          <img
            className="min-w-[100px] mt-6"
            src="https://static.wixstatic.com/media/c837a6_affc426fdd1a4284b30463713e36b567~mv2.png/v1/fill/w_196,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%2017.png"
            alt=""
          />
        </div>
      </div>
      <div
        className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2"
        // style={{ display: "grid", gridTemplateColumns: "6fr 4fr" }}
      >
        <div className="border-r border-[#303236] relative justify-center align-middle flex">
          <h1 className="absolute mt-[50%] text-2xl">
            {" "}
            Are You Ready to Accelarate Your Business?
          </h1>
          <img
            className="h-full w-full"
            src="https://media.tenor.com/4l25LHdOwegAAAAC/hollow-knight-valorant.gif"
            alt=""
          />
        </div>
        <div className="lg:col-span-1">
          <div className="mt-[50%] m-28">
            <p className="text-md mb-[10%]">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
            <button className="p-3 pr-7 pl-7 rounded bg-[#FE6261] text-black font-thin">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

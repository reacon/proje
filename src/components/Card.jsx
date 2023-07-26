export default function Card() {
  return (
    <div className="border border-[#303236] grid lg:grid-cols-2 md:grid-cols-1 min-w-[400px]">
      <div className="relative justify-center align-middle flex">
        <h1 className="absolute mt-[50%] text-2xl">
          <p className="text-3xl text-center">Unprecedented Velocity. </p>
          <p className="text-3xl text-center">Impeccable Reliability.</p>
        </h1>
        <img
          className="h-full w-full"
          src="https://media.tenor.com/4l25LHdOwegAAAAC/hollow-knight-valorant.gif"
          alt=""
        />
      </div>
      <div className="min-w-[400px] m-28 whitespace-pre-wrap">
        <div className="">
          <p className="text-md mb-[10%]">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </p>
          <p className="text-md mb-[10%]">
          ​ This is a
            great space to write a long text about your company and your
            services. You can use this space to go into a little more detail
            about your company. Talk about your team and what services you
            provide. Tell your visitors the story of how you came up with the
            idea for your business and what makes you different from your
            competitors. Make your company stand out and show your visitors who
            you are.
          </p>
          <button className="p-3 pr-7 pl-7 rounded bg-[#FE6261] text-black font-thin">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

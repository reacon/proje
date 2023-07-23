export default function Footer() {
  return (
    <div
      className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
      //   style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 0.5fr" }} tesst
    >
      <div className="border-[#303236] border-b md:border-r md:border-b-0">
        <h1 className="text-2xl mb-10">Lilbro</h1>
        <ul>
          <li className="mb-2 text-lg">123-456-7890</li>
          <li className="mb-2 text-lg">Info@mysite.com</li>
          <li className="mb-2 text-lg">500 Terry Francine St </li>
          <li className="mb-2 text-lg">San Francisco, CA 94158</li>
        </ul>
      </div>
      <div
        className="grid grid-rows-5 border-[#303236] border-b md:border-r md:border-b-0 pb-3"
        //   style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr 1fr 1fr" }}
      >
        <p className="">Solutions</p>
        <p className="">Visions</p>
        <p className="">Programs</p>
        <p className="">Blog</p>
        <div>
          <button className="p-3 pr-7 pl-7 w-auto rounded bg-[#FE6261] text-black font-thin">
            Get Started
          </button>
        </div>
      </div>
      <div className="border-[#303236] border-b md:border-r md:border-b-0 pb-3">
        <p className="mb-5">Subscribe to lilbro</p>
        <form action="">
          <div className="text-sm mb-3">Email</div>
          <input
            className="p-4 h-[50px] rounded w-[90%] border-[#303236] bg-inherit"
            type="text"
          />
          <div>
            <button className="mt-5 p-3 pr-7 pl-7 w-auto rounded bg-[#FE6261] text-black font-thin">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="border-[#303236] md:border-r md:border-b-0 lg:border-r-0">
        <p className="pb-5">Follow us on</p>
        <div
          className="grid grid-cols-3"
          //   style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
        >
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-instagram"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-discord"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
              <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
              <path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l.975 1.923a11.913 11.913 0 0 1 4.053 0l.972 -1.923c1.5 .16 3.043 .485 4.5 1.5c2 5.667 2.167 9.833 1.5 11.5c-.667 1.333 -2 3 -3.5 3c-.5 0 -2 -2 -2 -3" />
              <path d="M7 16.5c3.5 1 6.5 1 10 0" />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-linkedin"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M8 11l0 5" />
              <path d="M8 8l0 .01" />
              <path d="M12 16l0 -5" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

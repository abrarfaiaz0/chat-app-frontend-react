export default function Signup() {
  return (
    <div className="w-4/6 flex justify-center items-center">
      <div className="w-[467px] bg-neutralGraySecond p-[20px]">
        <h1 className="text-left text-primaryBlue font-semibold text-3xl mb-[8px]">
          Welcome
        </h1>
        <div className="text-left text-secondaryFont ">
          Create your account to get connected
        </div>

        <form className="flex flex-col gap-2 mt-[32px]">
          <label className="text-left" htmlFor="name">
            Full Name
          </label>
          <input
            className="pl-[16px] h-[40px]"
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
          ></input>

          <label htmlFor="email" className="mt-2 text-left">
            Email Address
          </label>
          <input
            className="pl-[16px] h-[40px]"
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
          ></input>

          <label className="mt-2 text-left">Create Password</label>
          <input type="password" className="pl-[16px] h-[40px]"></input>

          <div className="mt-[32px] mb-[8px] text-left">
            By signing up you are agreeing to
            <a className="text-primaryBlue cursor-pointer">
              &nbsp;Terms and Conditions
            </a>{" "}
            and{" "}
            <a className="text-primaryBlue cursor-pointer">Privacy Policy</a>
          </div>

          <button className="w-full py-[12px] bg-primaryBlue text-white font-medium">
            Sign Up for free
          </button>
        </form>

        <div className="w-full h-[56px] before:bg-neutralGraySecond before:z-10 before:p-[12px] before:-translate-x-1/2 before:-translate-y-1/2 before:left-1/2 before:top-1/2 relative before:absolute before:content-['Or']">
          <div className="opacity-25 bg-neutralGrayFourth relative top-1/2 -translate-y-1/2 w-full h-[2px]"></div>
        </div>

        <button className="w-full py-[12px] bg-neutralGrayThird text-black font-medium">
          Sign Up with Google
        </button>
      </div>
    </div>
  );
}

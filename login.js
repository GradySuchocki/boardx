// MyComponent.js
import React from "react";

function MyComponent() {
  return (
    <div className="flex justify-center items-center px-16 py-20 text-xl font-semibold text-white bg-black max-md:px-5">
      <div className="flex flex-col px-12 pt-9 pb-16 mt-48 max-w-full rounded-2xl border border-solid bg-stone-950 border-stone-800 w-[599px] max-md:px-5 max-md:mt-10">
        <img
          loading="lazy"
          srcSet="..."
          className="self-center max-w-full aspect-[1.27] w-[100px]"
        />
        <div className="mt-3 font-bold max-md:max-w-full">
          Welcome to BoardX!
        </div>
        <div className="justify-center py-3.5 mt-8 whitespace-nowrap bg-black rounded-xl border border-solid border-neutral-700 text-neutral-400 max-md:max-w-full">
          Email
        </div>
        <div className="flex gap-5 justify-between items-center px-2 mt-6 whitespace-nowrap bg-black rounded-xl border border-solid border-neutral-700 text-neutral-400 max-md:flex-wrap max-md:max-w-full">
          <div className="self-stretch my-auto">Password</div>
          <img
            loading="lazy"
            srcSet="..."
            className="shrink-0 self-stretch my-auto aspect-[1.02] w-[45px]"
          />
        </div>
        <div className="items-center px-16 pt-4 pb-2 mt-8 text-lg text-center bg-rose-500 rounded-xl border border-rose-500 border-solid max-md:px-5 max-md:max-w-full">
          Log In{" "}
        </div>
        <div className="self-center mt-9 text-lg text-center text-rose-300">
          Forgot Password
        </div>
      </div>
    </div>
  );
}

export default MyComponent;



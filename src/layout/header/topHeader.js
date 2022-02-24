import React from "react";

const TopHeader = () => {
  return (
    <div className="flex h-20 items-center justify-center bg-cyan-400">
      <div className="mx-2 rounded-full bg-white text-center sm:p-5">
        <small>
          <span className="font-bold text-cyan-700">PHISHING WARNING: </span>
          <span className="text-sm font-medium text-cyan-500">
            Please make sure you are visiting{" "}
          </span>
          <span className="font-bold text-cyan-700">https://curryswap </span>
          <span className="text-sm font-medium text-cyan-500">
            - check the URL carefully
          </span>
        </small>
      </div>
    </div>
  );
};

export default TopHeader;

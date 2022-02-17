import React from "react";

export default function LeaderboardUserItem(props) {
  const { mainImage, username, nftImage, nftName } = props.user;
  return (
    <div className="flex flex-wrap items-start justify-start gap-6">
      <div className="border border-solid shadow-xl rounded-xl dark:border-none">
        <div className="flex relative overflow-hidden rounded-xl md:h-56 md:w-48 h-48 w-40">
          <img className="w-full object-cover" src={mainImage} />
          {/* Top Element */}
          <div className="flex flex-col absolute bg-white dark:bg-slate-600 w-full h-[14%] top-0 p-1 px-2 pb-2">
            <div className="flex justify-between">
              <p className="mr-2"># {props.position}</p>
              <p className="truncate">@{username}</p>
            </div>
          </div>
          {/* Bottom Element */}
          <div className="flex flex-col absolute bg-white dark:bg-slate-600 w-full h-1/10 bottom-0 p-1 px-2 pb-2">
            <div className="flex justify-between">
              <img
                className="flex my-auto h-6 w-6 rounded-md mr-2"
                src={nftImage}
                alt="NFT"
              />
              <p className="truncate flex text-sky-400 dark:text-sky-500 my-auto items-center">
                {nftName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

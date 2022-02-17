import React from "react";

export default function LeaderboardFilterItem(props) {
  const filterItem = props.filterItem;
  return (
    <ul
      onClick={() => props.clickedFilterItem(filterItem)}
      role="list"
      className="divide-y divide-gray-200 dark:divide-gray-700 dark:hover:bg-slate-900 hover:bg-gray-100 cursor-pointer px-8 sm:px-4 group"
    >
      <div key="1">
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            <div className="text-gray-900 dark:text-white text-xl">
              # {props.position}
            </div>
            <div className="flex-shrink-0">
              <img
                className={`w-10 h-10 object-cover ${
                  !filterItem.gameType && !!filterItem.playerCount
                    ? "rounded-full"
                    : "rounded-md"
                }`}
                src={filterItem.image}
                alt={filterItem.imageAlt}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xl font-medium group-hover:underline text-gray-900 truncate dark:text-white">
                {filterItem.gameName || filterItem.communityName}
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {filterItem.gameType || filterItem.playerCount + " players"}
              </p>
            </div>
            {!!filterItem.tagText ? (
              <div className="inline-flex items-center font-semibold px-2 text-xs leading-5 rounded-full bg-green-100 text-green-800">
                {filterItem.tagText}
              </div>
            ) : (
              ""
            )}
            {!!filterItem.rankDelta ? (
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <p>
                  {filterItem.rankDelta >= 0 ? "⬆" : "⬇"} {filterItem.rankDelta}{" "}
                  position
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </li>
      </div>
    </ul>
  );
}

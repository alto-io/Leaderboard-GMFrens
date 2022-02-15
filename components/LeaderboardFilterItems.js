import React from "react";
import LeaderboardFilterItem from "./LeaderboardFilterItem";

export default function LeaderboardFilterItems(props) {
  const { filterTitle, filterItems } = props;

  return (
    <div className="w-full mx-auto mb-10">
      <div className="w-full bg-white rounded-lg border shadow-lg dark:bg-gray-800 dark:border-gray-700">
        {/* LOWER DIV */}
        <div className="py-8 sm:py-4">
          {/* TOP SCORE TITLE */}
          <div className="hidden md:flex justify-between items-center mb-4 px-8 sm:px-4">
            <h3 className="text-xl font-medium leading-none text-gray-900 dark:text-white">
              {filterTitle}
            </h3>
          </div>
          {/* GAME LIST */}
          <div className="flow-root">
            {filterItems.length ? filterItems?.map((filterItem, index) => (
              <LeaderboardFilterItem
                filterItem={filterItem}
                position={index + 1}
                key={index}
                clickedFilterItem={() => props.clickedFilterItem(filterItem)}
              ></LeaderboardFilterItem>
            )):''}
          </div>
        </div>
      </div>
    </div>
  );
}

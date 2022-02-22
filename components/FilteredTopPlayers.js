import React from "react";
import LeaderboardFilterItems from "./LeaderboardFilterItems";
import LeaderboardUserItems from "./LeaderboardUserItems";
import { useState, useContext, useEffect } from "react";
import { StoreContext } from "../store/StoreContext";

export default function FilteredTopPlayers(props) {
  const { title, filterTitle, filterItems } = props;
  const { users } = useContext(StoreContext);
  const [orderedUsers, setOrderedUsers] = useState(users);
  const [selectedFilterItem, setSelectedFilterItem] = useState({});


  function handleFilterChange(filterItem) {
    setSelectedFilterItem(
      filterItem
    )
    console.log(filterItem)

    setOrderedUsers(
      filterItem.scores
        .sort((a, b) => b.score - a.score)
        .map((scoreItem) =>
          users.find((user) => user.guid == scoreItem.playerGuid)
        )
    );
  }

  useEffect(() => {
    setOrderedUsers(users)
  }, [users]);

  return (
    <React.Fragment>
      <div className="text-3xl w-full text-center font-semibold my-8">
        {title} {selectedFilterItem?.gameName || selectedFilterItem?.communityName} 
      </div>
      <div className="flex  flex-col lg:flex-row w-full gap-12">
        <div className="lg:w-1/3 w-full">
          <LeaderboardFilterItems
            filterTitle={filterTitle}
            filterItems={filterItems}
            clickedFilterItem={handleFilterChange}
          />
        </div>
        <div className="lg:w-2/3 w-full">
          <LeaderboardUserItems users={orderedUsers} />
        </div>
      </div>
    </React.Fragment>
  );
}

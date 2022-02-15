import React from "react";
import LeaderboardUserItem from "./LeaderboardUserItem";

export default function LeaderboardFilterItems(props) {
  return (
    <div className="flex flex-wrap items-start justify-start gap-6">
      {props?.users?.map((item, index) => (
        <LeaderboardUserItem
          user={item}
          key={ index }
          position={index + 1}
        ></LeaderboardUserItem>
      ))}
    </div>
  );
}

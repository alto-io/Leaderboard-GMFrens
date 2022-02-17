import React from "react";
import LeaderboardUserItem from "./LeaderboardUserItem";

export default function LeaderboardFilterItems(props) {
  return (
    <div className="flex flex-wrap justify-center lg:items-start lg:justify-start gap-6">
      {props?.users?.map((item, index) => (
        <LeaderboardUserItem
          user={item}
          key={ index }
          position={index + 1}
        />
      ))}
    </div>
  );
}

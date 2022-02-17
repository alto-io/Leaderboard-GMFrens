import LeaderboardGames from "./LeaderboardGames";
import LeaderboardUser from "./LeaderboardUser";
import FilteredTopPlayers from "../components/FilteredTopPlayers";
import ToggleDark from "./toggle-dark/ToggleDark";
import { useEffect, useContext } from "react";
import UserService from "../services/UserService";
import GameService from "../services/GameService";
import CollectionService from "../services/CollectionService";
import { StoreContext } from "../store/StoreContext";
import GameImages from "../components/GameImages";

export default function Home() {
  const { setUsers, setTopCollections, topCollections, setTopGames, topGames } =
    useContext(StoreContext);

  useEffect(() => {
    setUsers(UserService.fetchUsers());
    setTopCollections(CollectionService.fetchTopCollections());
    setTopGames(GameService.fetchTopGames());
  }, []);

  return (
    <div className="p-10">
      <ToggleDark />

      <GameImages filterItems={topGames} />

      <div className="p-4 w-full"></div>
      <FilteredTopPlayers
        title={"Top players by Game"}
        filterTitle={"Top Games"}
        filterItems={topGames}
      ></FilteredTopPlayers>

      <div className="p-4 w-full"></div>
      <FilteredTopPlayers
        title={"Top players by Collection"}
        filterTitle={"Top Collections"}
        filterItems={topCollections}
      ></FilteredTopPlayers>

      <div className="p-4 w-full"></div>

      <div className="text-3xl w-full text-center font-semibold my-8">
        Top Players
      </div>
      <LeaderboardUser />

      <div className="text-3xl w-full text-center font-semibold my-8">
        Top Games
      </div>
      <LeaderboardGames />
      
    </div>
  );
}

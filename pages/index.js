import LeaderboardCommunity from "./LeaderboardCommunity"
import LeaderboardGames from "./LeaderboardGames"
import LeaderboardGames2 from "./LeaderboardGames2"
import LeaderboardUser from "./LeaderboardUser"
import LeaderboardUser2 from "./LeaderboardUser2"
import ToggleDark from "./toggle-dark/ToggleDark"


export default function Home() {
  return (
      <div className="p-10">
        <ToggleDark />
        <div className="p-4 w-full"></div>
        <div className="text-3xl w-full text-center font-semibold my-8">Top Players By Game</div>
        <div className="flex w-full gap-12">
          <div className="md:w-1/3 w-full">
            <LeaderboardGames2 />
          </div>
          <div className="md:w-2/3 w-full">
            <LeaderboardUser2 />
          </div>
        </div>
        <div className="p-4 w-full"></div>
        <div className="text-3xl w-full text-center font-semibold my-8">Top Players By Collection</div>
        <div className="flex w-full gap-12">
          <div className="md:w-1/3 w-full">
            <LeaderboardCommunity />
          </div>
          <div className="md:w-2/3 w-full">
            <LeaderboardUser2 />
          </div>
        </div>
        <div className="p-4 w-full"></div>
        <div className="text-3xl w-full text-center font-semibold my-8">Top Players</div>
        <LeaderboardUser />
        <div className="text-3xl w-full text-center font-semibold my-8">Top Games</div>
        <LeaderboardGames />
      </div>
  )
}

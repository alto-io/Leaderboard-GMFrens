import LeaderboardGames from "./LeaderboardGames"
import LeaderboardUser from "./LeaderboardUser"
import ToggleDark from "./toggle-dark/ToggleDark"


export default function Home() {
  return (
    <div className="p-10">
      <ToggleDark />
      <div className="p-4 w-full"></div>
      <LeaderboardUser />
      <div className="p-4 w-full"></div>
      <LeaderboardGames />
    </div>
  )
}

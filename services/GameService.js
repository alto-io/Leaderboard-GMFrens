import { topGames } from "./mock-data";

const GameService = {
    fetchTopGames: () => {
        return topGames
    }
}

export default GameService;
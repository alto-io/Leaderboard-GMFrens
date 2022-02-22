import React from 'react'

export default function GameImages(props) {

    const gameArray = [
        {
            gameImage: "/assets/blazeRacing.png",
            gameName: "Blaze Racing",
            gameLink: "https://happylander.com/wip/opgames/abr/show/"
        },
        {
            gameImage: "/assets/nftRush.jpeg",
            gameName: "NFT Rush",
            gameLink: "https://test.outplay.games/games/c611cdd7-8eae-4302-8a06-8d06fabe6b81/"
        },
        {
            gameImage: "/assets/nftMusic.png",
            gameName: "NFT Music",
            gameLink: "http://nftmusicgame.solverto.com/"
        },
        {
            gameImage: "/assets/LFGRacing.png",
            gameName: "LFG Racing",
            gameLink: "https://beyondrealitybox.itch.io/kart-frenzy"
        },
        {
            gameImage: "/assets/arcadeumArena.png",
            gameName: "Arcadeum Arena",
            gameLink: "https://test.outplay.games/games/c158dc81-9212-4472-acf5-d10ae5177c09/"
        },
        {
            gameImage: "/assets/robotWars.png",
            gameName: "Robot Wars",
            gameLink: "https://test.outplay.games/games/726c662c-8550-4233-894c-65e88ccfd700/"
        },
        {
            gameImage: "/assets/triska.png",
            gameName: "Triska",
            gameLink: "https://test.outplay.games/games/aeec95c2-ec3e-494f-85f6-9a6237ee2d0b/"
        },
        
        
        

    ]

    return (
        <div className='relative mx-auto max-w-[1430px] h-[400px] flex overflow-scroll scrollbar-hide'>
            <div className='absolute flex animate-slide'>
                {/* DISPLAY EXACTLY 7 ELEMENTS */}
                {gameArray.map((game, index) => (
                    <div className='bg-gray-100 h-96 w-64 rounded-xl overflow-hidden m-[15px] group' key={index}>
                        <a href={game.gameLink} target="_blank" rel='noreferrer'>
                            <img
                                className='bg-black w-64 h-64' 
                                src={game.gameImage}
                                alt="gameImage"
                            />
                            <div className='flex flex-col h-28 text-black p-2 justify-between'>
                                <p className='w-full font-bold'>{game.gameName}</p>
                            
                                <button className='flex flex-start border w-20 py-1 px-1 text-center rounded-xl group-hover:border-gray-200 group-hover:border-2'>
                                    <p className='flex mx-auto text-xs font-bold'>Play Now</p>    
                                </button>
                                
                            </div>
                        </a>
                    </div>
                ))}
                {/* REPEAT first 5 ELEMENTS */}
                {gameArray.slice(0,5).map((game, index) => (
                    <div className='bg-gray-100 h-96 w-64 rounded-xl overflow-hidden m-[15px] group' key={index}>
                        <a href={game.gameLink} target="_blank" rel='noreferrer'>
                            <img
                                className='bg-black w-64 h-64' 
                                src={game.gameImage}
                                alt="gameImage"
                            />
                            <div className='flex flex-col h-28 text-black p-2 justify-between'>
                                <p className='w-full font-bold'>{game.gameName}</p>
                            
                                <button className='flex flex-start border w-20 py-1 px-1 text-center rounded-xl group-hover:border-gray-200 group-hover:border-2'>
                                    <p className='flex mx-auto text-xs font-bold'>Play Now</p>    
                                </button>
                                
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

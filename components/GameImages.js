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

    ]

    return (
        <div className='relative mx-auto max-w-[1430px] h-[400px] flex bg-red-200 overflow-scroll scrollbar-hide'>
            <div className='absolute flex animate-slide'>
                {/* DISPLAY EXACTLY 7 ELEMENTS */}
                {gameArray.map((game, index) => (
                    <div className='bg-gray-100 h-96 w-64 rounded-xl overflow-hidden m-[15px]' key={index}>
                        <img
                            className='bg-black w-64 h-64' 
                            src={game.gameImage}
                            alt="gameImage"
                        />
                        <div className='flex flex-col h-28 text-black p-2 justify-between'>
                            <p className='w-full font-bold'>{game.gameName}</p>
                            <a href={game.gameLink} target="_blank" rel='noreferrer'>
                            <button className='flex flex-start border w-20 py-1 px-1 text-center rounded-xl'>
                                <p className='flex mx-auto text-xs font-bold'>Play Now</p>    
                            </button>
                            </a>
                        </div>
                    </div>
                ))}
                 <div className='bg-gray-100 h-96 rounded-xl overflow-hidden m-[15px]'>
                    <img
                        className='bg-black w-64 h-64' 
                        src=""
                        alt="gameImage"
                    />
                    <div className='flex flex-col h-28 text-black p-2 justify-between'>
                        <p className='w-full font-bold'>Game Name</p>
                        <button className='flex flex-start border w-20 py-1 px-1 text-center rounded-xl'>
                            <p className='flex mx-auto text-xs font-bold'>Play Now</p>    
                        </button>
                    </div>
                </div>
                <div className='bg-gray-100 h-96 rounded-xl overflow-hidden m-[15px]'>
                    <img
                        className='bg-black w-64 h-64' 
                        src=""
                        alt="gameImage"
                    />
                    <div className='flex flex-col h-28 text-black p-2 justify-between'>
                        <p className='w-full font-bold'>Game Name</p>
                        <button className='flex flex-start border w-20 py-1 px-1 text-center rounded-xl'>
                            <p className='flex mx-auto text-xs font-bold'>Play Now</p>    
                        </button>
                    </div>
                </div>
                <div className='bg-gray-100 h-96 rounded-xl overflow-hidden m-[15px]'>
                    <img
                        className='bg-black w-64 h-64' 
                        src=""
                        alt="gameImage"
                    />
                    <div className='flex flex-col h-28 text-black p-2 justify-between'>
                        <p className='w-full font-bold'>Game Name</p>
                        <button className='flex flex-start border w-20 py-1 px-1 text-center rounded-xl'>
                            <p className='flex mx-auto text-xs font-bold'>Play Now</p>    
                        </button>
                    </div>
                </div>
                {/* REPEAT first 5 ELEMENTS */}
                {gameArray.map((game, index) => (
                    <div className='bg-gray-100 h-96 w-64 rounded-xl overflow-hidden m-[15px]' key={index}>
                        <img
                            className='bg-black w-64 h-64' 
                            src={game.gameImage}
                            alt="gameImage"
                        />
                        <div className='flex flex-col h-28 text-black p-2 justify-between'>
                            <p className='w-full font-bold'>{game.gameName}</p>
                            <a href={game.gameLink} target="_blank" rel='noreferrer'>
                            <button className='flex flex-start border w-20 py-1 px-1 text-center rounded-xl'>
                                <p className='flex mx-auto text-xs font-bold'>Play Now</p>    
                            </button>
                            </a>
                        </div>
                    </div>
                ))}
                <div className='bg-gray-100 h-96 rounded-xl overflow-hidden m-[15px]'>
                    <img
                        className='bg-black w-64 h-64' 
                        src=""
                        alt="gameImage"
                    />
                    <div className='flex flex-col h-28 text-black p-2 justify-between'>
                        <p className='w-full font-bold'>Game Name</p>
                        <button className='flex flex-start border w-20 py-1 px-1 text-center rounded-xl'>
                            <p className='flex mx-auto text-xs font-bold'>Play Now</p>    
                        </button>
                    </div>
                </div>
                <div className='bg-gray-100 h-96 rounded-xl overflow-hidden m-[15px]'>
                    <img
                        className='bg-black w-64 h-64' 
                        src=""
                        alt="gameImage"
                    />
                    <div className='flex flex-col h-28 text-black p-2 justify-between'>
                        <p className='w-full font-bold'>Game Name</p>
                        <button className='flex flex-start border w-20 py-1 px-1 text-center rounded-xl'>
                            <p className='flex mx-auto text-xs font-bold'>Play Now</p>    
                        </button>
                    </div>
                </div>
                <div className='bg-gray-100 h-96 rounded-xl overflow-hidden m-[15px]'>
                    <img
                        className='bg-black w-64 h-64' 
                        src=""
                        alt="gameImage"
                    />
                    <div className='flex flex-col h-28 text-black p-2 justify-between'>
                        <p className='w-full font-bold'>Game Name</p>
                        <button className='flex flex-start border w-20 py-1 px-1 text-center rounded-xl'>
                            <p className='flex mx-auto text-xs font-bold'>Play Now</p>    
                        </button>
                    </div>
                </div>
                <div className='bg-gray-100 h-96 rounded-xl overflow-hidden m-[15px]'>
                    <img
                        className='bg-black w-64 h-64' 
                        src=""
                        alt="gameImage"
                    />
                    <div className='flex flex-col h-28 text-black p-2 justify-between'>
                        <p className='w-full font-bold'>Game Name</p>
                        <button className='flex flex-start border w-20 py-1 px-1 text-center rounded-xl'>
                            <p className='flex mx-auto text-xs font-bold'>Play Now</p>    
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

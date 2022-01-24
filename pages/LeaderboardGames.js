import React from 'react';

function LeaderboardGames() {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 dark:border-b-0 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-sky-700">
              <thead className="bg-gray-50 dark:bg-slate-700">
                <tr>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-white  uppercase tracking-wider">
                    Ranking
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-white  uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-white  uppercase tracking-wider">
                    Prize
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-white  uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-white  uppercase tracking-wider">
                    Type
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-600 divide-y divide-gray-200 dark:divide-sky-700">
                  <tr className='group hover:cursor-pointer dark:hover:bg-slate-500 hover:bg-slate-100 transition duration-500'>
                    <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex items-center px-1 text-xl font-semibold"># 1</div>
                    </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-14 w-10">
                        <img className="h-14 w-10 rounded-md object-cover" src="https://imag.malavida.com/mvimgbig/download-fs/killer-roomba-33935-5.jpg" alt="Game cover" />
                      </div>
                      <div className="ml-4">
                        <div className="text-md font-medium text-gray-900 dark:text-white group-hover:underline">
                          Roomba Wars
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <div className="text-md font-semibold text-gray-900 dark:text-white">0.2 ETH 💰</div>
                    <div className="text-sm text-gray-500 dark:text-white">Winner takes all</div>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Tournament
                    </span>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-white">
                    Multi-player
                  </td>
                  </tr>
                  <tr className='hover:cursor-pointer dark:hover:bg-slate-500 hover:bg-slate-100 transition duration-500'>
                    <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex items-center px-1 text-xl font-semibold"># 2</div>
                    </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-14 w-10">
                        <img className="h-14 w-10 rounded-md object-cover" src="https://miro.medium.com/max/1400/1*wWkPJmoKfeb1AkKcHJX8QQ.png" alt="NFT" />
                      </div>
                      <div className="ml-4">
                        <div className="text-md font-medium text-gray-900 dark:text-white">
                          Triska Reloaded
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <div className="text-md font-semibold text-gray-900 dark:text-white">Free 2 Play</div>
                    <div className="text-sm text-gray-500 dark:text-white">Tournament coming up!</div>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-cyan-100 text-cyan-800">
                      Practice
                    </span>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-white">
                    Player
                  </td>
                  </tr> 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderboardGames;

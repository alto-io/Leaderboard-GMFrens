import React from 'react';

function LeaderboardUser() {
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
                    Title
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-white  uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-white  uppercase tracking-wider">
                    Role
                  </th>
                  <th scope="col" className="relative px-3 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-600 divide-y divide-gray-200 dark:divide-sky-700">
                  <tr className='hover:cursor-pointer dark:hover:bg-slate-500 hover:bg-slate-100 transition duration-500'>
                    <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex items-center px-1">1</div>
                    </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src="https://miro.medium.com/freeze/max/400/1*pV9N31p79ImmhIsNR9v_rA.gif" alt="NFT" />
                      </div>
                      <div className="ml-4">
                        <div className="text-md font-medium text-gray-900 dark:text-white">
                          Jane Cooper
                        </div>
                        <div className="flex flex-row text-sm text-gray-500 dark:text-slate-100 mt-2">
                          <img className="flex h-5 w-5 rounded-sm mr-1" src="https://lh3.googleusercontent.com/6eKuLyjVp6nWQES3o_uFIs-of17M3eWkFaQqnq3_ddTkQtXx5vXWAH7R02kpvK0Iy-U6SZ7G_M_0Lhh5P6Rerk10q5PYwuJpbOGEGw=s0" alt="NFT" />
                          <p className='flex text-sky-400 dark:text-sky-500'>Arcadians</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <div className="text-md font-semibold text-gray-900 dark:text-white">Slayer of Cats 🦊</div>
                    <div className="text-sm text-gray-500 dark:text-white">King 2</div>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-white">
                    Player
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-fuchsia-600 hover:text-fuchsia-900">Edit</a>
                  </td>
                  </tr>
                  <tr className='hover:cursor-pointer dark:hover:bg-slate-500 hover:bg-slate-100 transition duration-500'>
                    <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex items-center px-1">2</div>
                    </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src="https://www.exibart.com/repository/media/2021/09/sothebys-com.brightspotcdn.jpg" alt="NFT" />
                      </div>
                      <div className="ml-4">
                        <div className="text-md font-medium text-gray-900 dark:text-white">
                          Michael Queen
                        </div>
                        <div className="flex flex-row text-sm text-gray-500 dark:text-slate-100 mt-2">
                          <img className="flex h-5 w-5 rounded-sm mr-1" src="https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s130" alt="NFT" />
                          <p className='flex text-sky-400 dark:text-sky-500'>Bored Ape</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <div className="text-md font-semibold text-gray-900 dark:text-white">Monkey King 🙊</div>
                    <div className="text-sm text-gray-500 dark:text-white">Degen lvl 4</div>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-white">
                    Player
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-fuchsia-600 hover:text-fuchsia-900">Edit</a>
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

export default LeaderboardUser;

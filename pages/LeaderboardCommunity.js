import React from 'react';

export default function LeaderboardCommunity() {
  return (
    <>
    <div className="w-full mx-auto mb-10">
    <div className="w-full bg-white rounded-lg border shadow-lg dark:bg-gray-800 dark:border-gray-700">
        {/* LOWER DIV */}
        <div className='py-8 sm:py-4'>
            {/* TOP SCORE TITLE */}
            <div className="hidden md:flex justify-between items-center mb-4 px-8 sm:px-4">
                <h3 className="text-xl font-medium leading-none text-gray-900 dark:text-white">Top Collections</h3>
            </div>
            {/* USERS SCORES */}
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 dark:hover:bg-slate-900 hover:bg-gray-100 cursor-pointer px-8 sm:px-4">
                    {/* CHECK display() FOR STYLES */}
                    <div key="1">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className='text-gray-900 dark:text-white text-xl'># 1</div>
                                <div className="flex-shrink-0">
                                    <img className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/6eKuLyjVp6nWQES3o_uFIs-of17M3eWkFaQqnq3_ddTkQtXx5vXWAH7R02kpvK0Iy-U6SZ7G_M_0Lhh5P6Rerk10q5PYwuJpbOGEGw=s0" alt={"Avatar Placeholder"} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xl font-medium text-gray-900 truncate dark:text-white">
                                        Arcadians
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        145 Players
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    #2 positions
                                </div>
                            </div>
                        </li>  
                    </div>
                </ul>
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    {/* CHECK display() FOR STYLES */}
                    <div key="1">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className='text-gray-900 dark:text-white text-xs'>1</div>
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/6eKuLyjVp6nWQES3o_uFIs-of17M3eWkFaQqnq3_ddTkQtXx5vXWAH7R02kpvK0Iy-U6SZ7G_M_0Lhh5P6Rerk10q5PYwuJpbOGEGw=s0" alt={"Avatar Placeholder"} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        @username
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        @username
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    1000
                                </div>
                            </div>
                        </li>  
                    </div>
                </ul>
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    {/* CHECK display() FOR STYLES */}
                    <div key="1">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className='text-gray-900 dark:text-white text-xs'>1</div>
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/6eKuLyjVp6nWQES3o_uFIs-of17M3eWkFaQqnq3_ddTkQtXx5vXWAH7R02kpvK0Iy-U6SZ7G_M_0Lhh5P6Rerk10q5PYwuJpbOGEGw=s0" alt={"Avatar Placeholder"} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        @username
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        @username
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    1000
                                </div>
                            </div>
                        </li>  
                    </div>
                </ul>
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    {/* CHECK display() FOR STYLES */}
                    <div key="1">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className='text-gray-900 dark:text-white text-xs'>1</div>
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/6eKuLyjVp6nWQES3o_uFIs-of17M3eWkFaQqnq3_ddTkQtXx5vXWAH7R02kpvK0Iy-U6SZ7G_M_0Lhh5P6Rerk10q5PYwuJpbOGEGw=s0" alt={"Avatar Placeholder"} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        @username
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        @username
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    1000
                                </div>
                            </div>
                        </li>  
                    </div>
                </ul>
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    {/* CHECK display() FOR STYLES */}
                    <div key="1">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className='text-gray-900 dark:text-white text-xs'>1</div>
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/6eKuLyjVp6nWQES3o_uFIs-of17M3eWkFaQqnq3_ddTkQtXx5vXWAH7R02kpvK0Iy-U6SZ7G_M_0Lhh5P6Rerk10q5PYwuJpbOGEGw=s0" alt={"Avatar Placeholder"} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        @username
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        @username
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    1000
                                </div>
                            </div>
                        </li>  
                    </div>
                </ul>
            </div>
        </div>    
    </div>
</div>   
</>);
}

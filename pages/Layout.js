import React from 'react';

export default function Layout({children}) {
  return <div className='bg-white text-black dark:text-white dark:bg-slate-800 transition duration-500 h-screen w-screen'>{children}</div>;
}


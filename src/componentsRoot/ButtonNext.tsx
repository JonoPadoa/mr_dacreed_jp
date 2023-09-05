import Link from 'next/link';
import React from 'react';

interface ButtonNextProps {
    href: string;
   
  }


const ButtonNext: React.FC<ButtonNextProps> =({ href}) => {
  return (
    <div className=" mx-2 flex  max-w-screen-sm items-center justify-center rounded-xl bg-clip-border">
      <div className="h-10 w-full rounded-xl bg-gradient-to-r from-[#FFC96B] via-[#FFC96B] to-accentd p-1 group hover:from-accentd hover:via-[#FFC96B] hover:to-[#FFC96B] transition-all duration-500">
        <Link
          href={href}
          className='flex w-20 h-8 max-w-xs justify-center items-center rounded-xl bg-[#FFC96B] text-accentd font-bold drop-shadow-md file:gap-4'
        >
          Next &gt;
        </Link>
      </div>
    </div>
  );
};

export default ButtonNext;

import React from 'react';

interface ButtonBackProps {
    onClick: React.MouseEventHandler<HTMLDivElement>;
  }
  
  const ButtonBack: React.FC<ButtonBackProps> = ({ onClick }) => {
    return (
    <div className=" mx-2 flex  max-w-screen-sm items-center justify-center rounded-xl bg-clip-border">
      <div className="h-10 w-full rounded-xl bg-gradient-to-r from-primaryd via-primaryd to-accentd p-1 group hover:from-accentd hover:via-primaryd hover:to-primaryd transition-all duration-500">
        <div
         
          className='flex w-20 h-8 max-w-xs justify-center items-center rounded-xl text-primaryd bg-accentd font-bold drop-shadow-md file:gap-4'
          onClick={onClick}
       >
         &lt; Back 
        </div>
      </div>
    </div>
  );
};

export default ButtonBack;



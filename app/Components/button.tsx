import React from 'react';

export const ButtonGray = ({ className, children }) => {
  return (
    <button style={{ backgroundColor: '#F9F9F9',color:'#4E4D93' }} className={`w-[6.5rem] h-[3rem] ${className}`}>
      {children}
    </button>
  );
};

export const ButtonWhite = ({ className, children }) => {
  return (
    <button style={{ backgroundColor: '#fff' , color:'#1E193E'}} className={` w-[6.5rem] h-[3rem] ${className}`}>
      {children}
    </button>
  );
};

export const ButtonDarkBlue = ({ className, children }) => {
  return (
    <button style={{ backgroundColor: '#1E193E' }} className={` w-[6.5rem] h-[3rem] ${className}`}>
      {children}
    </button>
  );
};
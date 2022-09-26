import React from 'react'

export const Button = ({
    type = 'submit',
    className = '',
    processing,
    text }) => {
   
  return (
    <>
    <button
    type={type}
    className={
      `mt-4 py-2 px-3 font-serif font-medium text-[18px] text-white bg-tertiaryOne rounded-[10px] outline-none hover:bg-opacity-40transition ease-in-out duration-150 ${
        processing && 'opacity-25'
      } ` + className
    }
    disabled={processing}
  >
    {text}
    </button>
  </>
  )
}

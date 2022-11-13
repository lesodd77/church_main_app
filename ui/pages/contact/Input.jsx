import React, {useRef} from 'react'

export const Input = (props) => {
  const {
    id, 
    containerClassName='',
   placeholder='', 
   label ='', 
   type='text', 
   required=false,
   error= false,
   ...rest
  } = props;

  const inputRef = useRef();
  return (
    <>
    <div className={containerClassName}>
         <div
        className={`border-dashed border-2 border-tertiaryOne bg-opacity-75 transition duration-150 ease-in-out ${
          error
          ? 'focus-widthin:border-danger border-danger' :
          'focus-widthin:border-primary'
        }`}
        onClick={() => inputRef.current.focus()}
        />
        <label 
        htmlFor={id}
        className={`text-xs text-white font-serif placeholder-gray-400 px-2 pt-1`}
        >
          {label} {required && <span className='text-danger'>*</span>}
      </label>
     
        <input 
        ref={inputRef}
        type={type}
        className={`w-full px-2 pb-1.5 dark:bg-slate-700 dark:text-white text-primary outline-none font-serif rounded-md`}
         id={id} 
         placeholder={placeholder} {...rest} 
         />
         {error && <p className='text-xs pl-2 text-danger mb-4'>{error}</p>}
    </div>
    </>
  )
}

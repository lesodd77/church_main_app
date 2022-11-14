import React, { useRef } from 'react';

export const Textarea = (props) => {
  const {
    id,
    containerClassName = '',
    placeholder = '',
    label = '',
    type = 'text',
    required = false,
    error = false,
    ...rest
  } = props;

  const textareaRef = useRef();
  return (
    <>
      <div className={containerClassName}>
        <div
          className={`border border-tertiaryOne bg-opacity-75 transition duration-150 ease-in-out ${
            error
              ? 'focus-widthin:border-danger border-danger'
              : 'focus-widthin:border-primary'
          }`}
          // @ts-ignore
          onClick={() => textareaRef.current.focus()}
        />
        <label
          htmlFor={id}
          className={'text-sm font-serif text-white placeholder-gray-400 px-2 pt-1.5'}
        >
          {label} {required && <span className="text-danger">*</span>}
        </label>

        <textarea
          ref={textareaRef}
          type={type}
          className={'block w-full px-2 pt-1.5 rounded-md border-0 border-b border-transparent p-0 pb-2 focus:border-primary focus:ring-0 sm:text-sm'}
          id={id}
          placeholder={placeholder}
          {...rest}
        />
        {error && (
          <p className="text-sm font-serif pl-2 text-danger mb-4">{error}</p>
        )}
      </div>
    </>
  );
};

'use client';

import { useState } from 'react';

export default function LazyImage({ 
  src, 
  alt = '', 
  className = '', 
  width, 
  height, 
  style = {} 
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <span 
      className="position-relative d-inline-block overflow-hidden"
      style={{
        width: width ? `${width}px` : 'auto',
        height: height ? `${height}px` : 'auto',
        minWidth: width ? `${width}px` : undefined,
        minHeight: height ? `${height}px` : undefined,
        display: 'inline-block',
        verticalAlign: 'middle',
        ...style
      }}
    >
      {!isLoaded && (
        <span 
          className="lazy-skeleton position-absolute top-0 start-0 w-100 h-100"
          style={{ zIndex: 1 }}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={width}
        height={height}
        onLoad={() => setIsLoaded(true)}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'opacity 0.25s ease-in-out'
        }}
      />
    </span>
  );
}
import React from 'react'

export default function Image({src, alt}) {
    return (
        <img className="img-fluid" src={src} alt={alt} />
    )
}

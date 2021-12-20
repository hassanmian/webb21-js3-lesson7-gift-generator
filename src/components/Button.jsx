import React from 'react'

export default function Button({color, text, onClick, disabled}) {
    return (
        <button disabled={disabled} onClick={onClick}>
            {text}
        </button>
    )
}

import React from 'react'

export default function RadioButton({text, value, onChange, name}) {
    return (
        <>
            <label htmlFor={value} >{text}</label>
            <input 
                type="radio" 
                id={value} 
                value={value} 
                onChange={onChange} 
                name={name}
            />
        </>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomLink({to, text}) {
    return (
        <Link to={to} className="btn btn-primary">
            {text}
        </Link>
    )
}

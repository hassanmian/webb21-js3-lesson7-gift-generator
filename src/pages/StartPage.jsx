import React from 'react'
import { Link } from 'react-router-dom'
import CustomLink from '../components/CustomLink'
import Heading1 from '../components/Heading1'
import Image from '../components/Image'
import Paragraph from '../components/Paragraph'

export default function StartPage() {
    const imageSrc = "https://images.unsplash.com/photo-1512909006721-3d6018887383?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80"
    return (
        <div>
            <Heading1 text="Welcome to Start Page" />
            <Image src={imageSrc} alt="Person holding a gift" />
            <Paragraph text="In the spirit of the holidays, we would like to help you find a gift for your loved ones." />
            <Paragraph text="You will be able to choose age, interest and relationship for the person you want to generate a gift for. "/>
            <CustomLink text="Lets get started!" to="/age"  />
        </div>
    )
}

import React, {useContext} from 'react'
import { SelectionContext } from '../App'
import {GiftAI} from '../data/GiftAI'

export default function ResultPage() {
    const {age, interest, relationship} = useContext(SelectionContext)
    const gift = GiftAI.calculate(`${age}${interest}${relationship}`)
    return (
        <div>
            {age}, {interest}, {relationship}
            <p>{gift}</p>
        </div>
    )
}

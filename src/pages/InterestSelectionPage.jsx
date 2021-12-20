import React, {useContext} from 'react'
import { SelectionContext } from '../App'
import CustomLink from '../components/CustomLink'
import Heading2 from '../components/Heading2'
import RadioButton from '../components/RadioButton'

export default function InterestSelectionPage() {
    const {setInterest} = useContext(SelectionContext)
    
    function handleOnChange(e) {
        setInterest(e.target.value)
    }

    return (
        <div>
            <Heading2 text="Select Age" />
            <RadioButton 
                text="Fashion"
                value="a" 
                name="age" 
                onChange={handleOnChange}
            />
            <RadioButton 
                text="Tech"
                value="b" 
                name="age" 
                onChange={handleOnChange}
            />
            <RadioButton 
                text="Craft"
                value="c" 
                name="age" 
                onChange={handleOnChange}
            />
            <CustomLink to="/relationship" text="Lets choose relationship"/>
        </div>
    )
}

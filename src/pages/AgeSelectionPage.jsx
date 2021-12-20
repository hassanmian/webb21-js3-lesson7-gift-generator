import React, {useContext} from 'react'
import { SelectionContext } from '../App'
import CustomLink from '../components/CustomLink'
import Heading2 from '../components/Heading2'
import RadioButton from '../components/RadioButton'

export default function AgeSelectionPage() {
    const {setAge} = useContext(SelectionContext)
    
    function handleOnChange(e) {
        setAge(e.target.value)
    }

    return (
        <div>
            <Heading2 text="Select Age" />
            <RadioButton 
                text="0-25"
                value="a" 
                name="age" 
                onChange={handleOnChange}
            />
            <RadioButton 
                text="25-50"
                value="b" 
                name="age" 
                onChange={handleOnChange}
            />
            <RadioButton 
                text="50+"
                value="c" 
                name="age" 
                onChange={handleOnChange}
            />
            <CustomLink to="/interest" text="Lets choose interest"/>
        </div>
    )
}

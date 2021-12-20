import React, {useContext} from 'react'
import { SelectionContext } from '../App'
import CustomLink from '../components/CustomLink'
import Heading2 from '../components/Heading2'
import RadioButton from '../components/RadioButton'

export default function RelationshipSelectionPage() {
    const {setRelationship} = useContext(SelectionContext)
    
    function handleOnChange(e) {
        setRelationship(e.target.value)
    }

    return (
        <div>
            <Heading2 text="Select Age" />
            <RadioButton 
                text="Parent"
                value="a" 
                name="age" 
                onChange={handleOnChange}
            />
            <RadioButton 
                text="Sibling"
                value="b" 
                name="age" 
                onChange={handleOnChange}
            />
            <RadioButton 
                text="Other"
                value="c" 
                name="age" 
                onChange={handleOnChange}
            />
            <CustomLink to="/result" text="Lets choose relationship"/>
        </div>
    )
}

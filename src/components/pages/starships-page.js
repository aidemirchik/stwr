
import React, { useState } from 'react'
import { Record} from '../item-details';
import Row from '../row/row';
import {StarshipList, StarshipItemDetails} from '../sw-components'



const StartshipPage = () => {
    const [state, setState] = useState({itemId: 2})


    const leftElement = (
    <StarshipList setItemId={(id) => setState({itemId: id})}>
        {(item) => `${item.name} - ${item.model}`}
    </StarshipList>
    )
    const rightElement = (
    <StarshipItemDetails itemId={state.itemId}>
            <Record label='model' label_key='model'/>
            <Record label='manufacturer' label_key='manufacturer'/>
            <Record label='cost In Credits' label_key='costInCreditsr'/>       
            <Record label='length' label_key='length'/>       
            <Record label='crew' label_key='crew'/>       
    </StarshipItemDetails>
    )

    return (
        <Row left={leftElement} right={rightElement}/>
    
    )
}

export default StartshipPage;

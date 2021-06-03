import React, { ReactElement } from 'react'
import { render } from 'react-dom';

interface Props {
    
}

function NewTab({}: Props): ReactElement {
    return (
        <div>
            <h1>Hello world, this is new Tab page</h1>
        </div>
    )
}

export default NewTab;


render(<NewTab />, document.getElementById('app'))

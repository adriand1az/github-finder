import React, {Fragment} from 'react'
import spinner from './spinner.gif'
const Spinner = () => {
    return (
        <Fragment>
            <img 
            src={spinner} 
            alt="...loading"
            style={spinnerStyle}
            />
        </Fragment>
    )
}

const spinnerStyle = {
    width: '200px',
    display: 'block',
    margin: 'auto',
    
}
export default Spinner

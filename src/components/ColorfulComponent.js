import React from 'react';


const NumberComponent = props => {
    if(isNaN(props.id)){
        return (
            <>
                <h1 style={{color:props.color, backgroundColor:props.bgcolor}}>The word is {props.id}</h1>
            </>
        )
    }
    else{
        return(
            <>
            </>
        )
    }
}

export default NumberComponent;
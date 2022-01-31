import React from 'react';
import { Link } from '@reach/router';

const GoBackToHomeButton = (props)=>{

    return(
        <div>
            <button>
                <Link to = {"/"}>
                    Return Home
                </Link>
            </button>
        </div>
    )
}


export default GoBackToHomeButton;
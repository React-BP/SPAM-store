import React from 'react';
import classes from './button.css';

const button = (props) => {
    return (
        <div>
            <button disabled={props.disabled} 
                    className={[classes.Button, classes[props.btnType]].join(' ')}
                    onClick={props.clicked}
            >{props.children}</button>
        </div>
    );
};

export default button;
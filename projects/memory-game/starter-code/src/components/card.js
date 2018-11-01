import React from 'react';
import classNames from 'classnames';

const Card = (props) => {
    const type = "diamonds";
    const array = {};
    array[type] = true;
    array.hidden = false;
    return (
        <div className={classNames("card", array)}> <p>K</p> </div>
    )
}

export default Card;
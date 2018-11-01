import React from 'react';
import classNames from 'classnames';
import {RANKS} from '../GlobalVariables';

const Card = (props) => {
    const { rank, suit, hidden} = props;
    
    return (
        <div className={classNames("card", suit, {hidden: hidden})}> <p>{ RANKS[rank] }</p> </div>
    )
}

export default Card;
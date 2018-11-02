import React from 'react';
import classNames from 'classnames';
import {RANKS} from '../GlobalVariables';

const Card = (props) => {
    const { id, rank, suit, hidden, handleClick} = props;
    
    return (
        <div className={classNames("card", suit, {hidden: hidden})} onClick={()=>handleClick(id)}> <p>{ RANKS[rank] }</p> </div>
    )
}

export default Card;
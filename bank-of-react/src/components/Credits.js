import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const Credits = (props) => {
    let creditsView = () => {
        const { credits } = props;
        return credits.map((credit) => {
            let date = credit.date.slice(0,10);
            return <li key={credit.id}>{credit.amount} {credit.description}</li>
        })
    }
    return (
        <div>
            <h1> Credits </h1>
            {creditsView()}
        </div>

    )
}
export default Credits;
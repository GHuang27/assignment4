import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

const Debits = (props) => {
    let debitsView = () => {
        const { debits } = props;
        return debits.map((debit) => {
            let date = debit.date.slice(0,10);
            return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
        })
    }
    return (
        <div>
            <h1> Debits </h1>
            {debitsView()}
            
            <div>
                <Link to="/">Home</Link>
                <Link to="/userProfile">User Profile</Link>
                <Link to="/login">Login</Link>
                <Link to="/credits">Credits</Link>
                <AccountBalance accountBalance={props.accountBalance}/>
            </div>
        </div>
    )
}
export default Debits;
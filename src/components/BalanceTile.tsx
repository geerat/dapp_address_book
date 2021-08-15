import React from 'react';

interface Props {
    balance: string;
    account: string;
}

export const BalanceTile = (props: Props) => {
    return (
        <div className="">
            <p>{parseFloat(props.balance).toFixed(4)} Eth</p>
            <p>{props.account}</p>
        </div>
    );
};

import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/Button';
import { useEthers, useEtherBalance, useTransactions } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';

interface Props {}

export const Dashboard = (props: Props) => {
    const { activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);
    const history = useHistory();

    const connectWallet = (e: React.MouseEvent<HTMLButtonElement>): void => {
        console.log('connect wallet');
        activateBrowserWallet();
    };

    const goToContacts = () => {
        history.push('/contacts');
    };

    return (
        <div>
            <h3>Crypto address book</h3>
            <p>The easiest and quickest way to manage and pay your contacts.</p>
            <p>Connect your wallet to begin.</p>
            {etherBalance && `${parseFloat(formatEther(etherBalance)).toFixed(2)}ETH`}
            <br />
            {account ? (
                <>
                    `${account}`
                    <Button label="Contacts" type="primary" onClick={goToContacts} />
                </>
            ) : (
                <Button label="Connect Wallet" type="primary" onClick={connectWallet} />
            )}
        </div>
    );
};

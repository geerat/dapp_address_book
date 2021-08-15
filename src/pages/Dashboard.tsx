import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/generics/Button';
import { useEthers, useEtherBalance } from '@usedapp/core';
import { ConnectWalletPrompt } from '../components/ConnectWalletPrompt';
import { MobileView } from '../components/surfaces/MobileView';

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
        <MobileView>
            {/* {etherBalance && `${parseFloat(formatEther(etherBalance)).toFixed(2)}ETH`} */}
            {account && etherBalance ? (
                <div className="flex flex-col justify-center items-center w-screen h-screen">
                    <Button label="View Contacts" type="primary" onClick={goToContacts} />
                </div>
            ) : (
                <ConnectWalletPrompt handleConnectWallet={connectWallet} />
            )}
        </MobileView>
    );
};

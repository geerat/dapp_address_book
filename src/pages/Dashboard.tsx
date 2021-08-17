import { useHistory } from 'react-router-dom';
import { Button } from '../components/generics/Button';
import { useEthers, useEtherBalance } from '@usedapp/core';
import { ConnectWalletPrompt } from '../components/ConnectWalletPrompt';
import { MobileView } from '../components/surfaces/MobileView';
import { useError } from '../hooks/useError';

interface Props {}

export const Dashboard = (props: Props) => {
    const { activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);
    const { sendError } = useError();
    const history = useHistory();

    const connectWallet = (): void => {
        activateBrowserWallet((e) => {
            if (e.name === 'NoEthereumProviderError') {
                sendError("Couldn't connect to MetaMask. Make sure you have Metamask installed.");
            } else {
                sendError(e.message);
            }
        });
    };

    const goToContacts = () => {
        history.push('/contacts');
    };

    return (
        <MobileView>
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

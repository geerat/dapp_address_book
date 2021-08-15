import React from 'react';
import { Button } from './generics/Button';
import { Typography } from './generics/Typography';
import { CenterVertically } from './surfaces/CenterVertically';

interface Props {
    handleConnectWallet: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ConnectWalletPrompt = (props: Props) => {
    return (
        <CenterVertically>
            <Typography variant="heading" element="h2" center={true}>
                Crypto address book
            </Typography>
            <Typography variant="paragraph" element="p" center={true}>
                The easiest and quickest way to manage and pay your contacts.
            </Typography>
            <Typography variant="paragraph" element="p" className="pb-8" center={true}>
                Connect your wallet to begin.
            </Typography>
            <Button
                label="Connect Wallet"
                type="primary"
                onClick={props.handleConnectWallet}
            />
        </CenterVertically>
    );
};

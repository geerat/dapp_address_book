import { useSendTransaction } from '@usedapp/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/generics/Button';
import { Input } from '../components/generics/Input';
import { Contact, useContactData } from '../hooks/useContactData';
import { useEthers, useEtherBalance } from '@usedapp/core';
import { parseEther } from '@ethersproject/units';
import { Toolbar } from '../components/Toolbar';
import { MobileView } from '../components/surfaces/MobileView';
import { ProfilePic } from '../components/ProfilePic';

type SendParams = {
    id: string;
};
export const Send = () => {
    //DApp hooks
    const { account } = useEthers();
    const { sendTransaction, state } = useSendTransaction();
    const etherBalance = useEtherBalance(account);
    //

    const [contact, setContact] = useState<Contact>({ id: '', name: '', address: '' });
    const [amount, setAmount] = useState<string>('');

    const { getContact } = useContactData();
    const { id } = useParams<SendParams>();

    useEffect(() => {
        setContact(getContact(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setAmount(e.currentTarget.value);
    };

    const handleSend = (e: React.MouseEvent<HTMLButtonElement>): void => {
        const weiAmount = parseEther(amount);
        sendTransaction({ to: contact?.address, value: weiAmount });
    };

    useEffect(() => {
        if (state.status !== 'Mining') {
            console.log('Show success page');
            console.log(state);
        }
    }, [state]);
    return (
        <div>
            <Toolbar
                header={`Send to ${contact.name}`}
                backPath="/contacts"
                button={{ text: 'edit', path: `/contacts/${id}/edit` }}
            />
            <MobileView>
                {etherBalance && `Your account balance: ${etherBalance}`}
                <ProfilePic name={contact.name} size="large" />
                <Input
                    label="Amount"
                    id="amount"
                    value={amount}
                    onChange={handleChange}
                />
                Tx fee: {amount}
                <Button label="Send" type="primary" onClick={handleSend} />
            </MobileView>
        </div>
    );
};

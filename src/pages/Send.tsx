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
import { Typography } from '../components/generics/Typography';
import { formatEther } from '@ethersproject/units';

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
    const [error, setError] = useState<string>('');

    const { getContact } = useContactData();
    const { id } = useParams<SendParams>();

    useEffect(() => {
        setContact(getContact(id));
    }, [getContact, id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        error && validateInput();
        setAmount(e.currentTarget.value);
    };

    const handleSend = (): void => {
        const weiAmount = parseEther(amount);
        sendTransaction({ to: contact.address, value: weiAmount });
    };

    const validateInput = (): void => {
        if (etherBalance && parseFloat(amount) > parseFloat(formatEther(etherBalance))) {
            setError("You don't have enough Eth for this transaction");
        } else {
            setError('');
        }
    };

    useEffect(() => {
        if (state.status !== 'Mining') {
            console.log('Show success page'); //TODO: success page and error handling
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
                {etherBalance &&
                    `Your account balance: ${parseFloat(formatEther(etherBalance)).toFixed(4)} Eth`}
                <div className="pt-10 pb-5">
                    <ProfilePic name={contact.name} size="large" />
                </div>
                <Typography variant="paragraph" element="p" className="pb-5">
                    {contact.address}
                </Typography>
                <Input
                    type="number"
                    label="Amount"
                    id="amount"
                    value={amount}
                    onChange={handleChange}
                    onBlur={validateInput}
                    errorMessage={error}
                />
                <Button label="Send" type="primary" onClick={handleSend} />
            </MobileView>
        </div>
    );
};

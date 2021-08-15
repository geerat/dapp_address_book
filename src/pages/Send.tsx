import { useSendTransaction } from '@usedapp/core';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Contact, useContactData } from '../hooks/useContactData';
import { useEthers, useEtherBalance } from '@usedapp/core';
import { parseEther } from '@ethersproject/units';

type SendParams = {
    id: string;
};
export const Send = () => {
    //DApp hooks
    const { account } = useEthers();
    const { sendTransaction, state } = useSendTransaction();
    const etherBalance = useEtherBalance(account);
    //

    const [contact, setContact] = useState<Contact>();
    const [amount, setAmount] = useState<string>('');

    const history = useHistory();
    const { getContact } = useContactData();
    const { id } = useParams<SendParams>();

    useEffect(() => {
        setContact(getContact(id));
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setAmount(e.currentTarget.value);
    };

    const handleSend = (e: React.MouseEvent<HTMLButtonElement>): void => {
        const weiAmount = parseEther(amount);
        sendTransaction({ to: contact?.address, value: weiAmount });
    };

    useEffect(() => {
        if (state.status != 'Mining') {
            console.log('Show success page');
            console.log(state);
        }
    }, [state]);
    return (
        <div>
            {etherBalance && `Your account balance: ${etherBalance}`}
            send to: {contact?.name}
            <Input label="Amount" id="amount" value={amount} onChange={handleChange} />
            Tx fee: {amount}
            <Button label="Send" type="primary" onClick={handleSend} />
        </div>
    );
};

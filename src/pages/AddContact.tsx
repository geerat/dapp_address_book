import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/generics/Button';
import { Input } from '../components/generics/Input';
import { MobileView } from '../components/surfaces/MobileView';
import { Toolbar } from '../components/Toolbar';
import { ContactEdits, useContactData } from '../hooks/useContactData';
import { isAddress } from 'web3-utils';

export const AddContact = () => {
    const { addContact } = useContactData();
    const history = useHistory();
    const [contact, setContact] = useState<ContactEdits>(
        (): ContactEdits => ({
            name: '',
            address: '',
        })
    );

    const [errors, setErrors] = useState<Record<string, boolean>>({ name: false, address: false });
    const handleAddContact = (e: React.MouseEvent<HTMLButtonElement>): void => {
        const addressInvalid = isFieldInvalid('address', contact.address);
        const nameInvalid = isFieldInvalid('name', contact.name);

        setErrors({
            address: addressInvalid,
            name: nameInvalid,
        });

        if (addressInvalid || nameInvalid) return;

        addContact(contact);
        history.push('/contacts');
    };
    const isFieldInvalid = (id: string, value: string): boolean => {
        if (id === 'address') {
            return !isAddress(value);
        } else {
            return value.length < 1;
        }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.currentTarget.id !== 'name' && e.currentTarget.id !== 'address') return;

        setContact({ ...contact, [e.currentTarget.id]: e.currentTarget.value });
        if (errors[e.currentTarget.id]) return;
        setErrors({
            ...errors,
            [e.currentTarget.id]: isFieldInvalid(e.currentTarget.id, e.currentTarget.value),
        });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setErrors({
            ...errors,
            [e.currentTarget.id]: isFieldInvalid(e.currentTarget.id, e.currentTarget.value),
        });
    };

    return (
        <>
            <Toolbar header="New Contact" backPath="/contacts" />
            <MobileView>
                <Input
                    label="Name"
                    id="name"
                    value={contact.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    errorMessage={errors.name ? 'Please enter a name' : ''}
                />
                <Input
                    label="Ethereum Address"
                    id="address"
                    value={contact.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    errorMessage={errors.address ? 'Please enter a valid Ethereum address' : ''}
                />
                <Button label="Add Contact" onClick={handleAddContact} type="primary" />
            </MobileView>
        </>
    );
};

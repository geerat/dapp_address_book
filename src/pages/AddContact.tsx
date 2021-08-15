import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/generics/Button';
import { Input } from '../components/generics/Input';
import { ContactDetails, useContactData } from '../hooks/useContactData';

interface Props {}

export const AddContact = (props: Props) => {
    const { addContact } = useContactData();
    const history = useHistory();
    const [contact, setContact] = useState<ContactDetails>(
        (): ContactDetails => ({
            name: '',
            address: '',
        })
    );
    const handleAddContact = (e: React.MouseEvent<HTMLButtonElement>): void => {
        addContact(contact);
        history.push('/contacts');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setContact({ ...contact, [e.currentTarget.id]: e.currentTarget.value });
    };

    return (
        <div>
            Add Contact
            <Input label="Name" id="name" value={contact.name} onChange={handleChange} />
            <Input
                label="Ethereum Address"
                id="address"
                value={contact.address}
                onChange={handleChange}
            />
            <Button label="Add Contact" onClick={handleAddContact} type="text" />
        </div>
    );
};

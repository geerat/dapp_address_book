import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '../components/generics/Button';
import { Input } from '../components/generics/Input';
import { MobileView } from '../components/surfaces/MobileView';
import { Toolbar } from '../components/Toolbar';
import { Contact, useContactData } from '../hooks/useContactData';

interface Props {}
type EditParams = {
    id: string;
};

export const EditContact = (props: Props) => {
    const { id } = useParams<EditParams>();
    const { getContact, editContact } = useContactData();
    const [contact, setContact] = useState<Contact>({ id: '', name: '', address: '' });
    const history = useHistory();

    useEffect(() => {
        setContact(getContact(id));
    }, [getContact, id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setContact({ ...contact, [e.currentTarget.id]: e.currentTarget.value });
    };

    const handleSave = () => {
        if (!contact?.id) throw new Error('Error');
        editContact(contact.id, { address: contact?.address, name: contact?.name });
        history.push(`/contact/${contact.id}/`);
    };
    return (
        <div>
            <Toolbar header="Edit" backPath={`/contacts/${id}`} />
            <MobileView>
                <Input
                    type="text"
                    id="name"
                    label="Name"
                    value={contact?.name}
                    onChange={handleChange}
                />
                <Input
                    type="text"
                    id="address"
                    label="Address"
                    value={contact?.address}
                    onChange={handleChange}
                />
                <Button label="save" type="primary" onClick={handleSave} />
            </MobileView>
        </div>
    );
};

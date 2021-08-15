import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/Button';
import { ContactTile } from '../components/ContactTile';
import { ContactList, useContactData } from '../hooks/useContactData';

interface Props {}

export const Contacts = (props: Props) => {
    const history = useHistory();
    const { getContactList } = useContactData();
    const [contacts, setContacts] = useState<ContactList>([]);
    useEffect(() => {
        setContacts(getContactList());
    }, []);

    const handleDisconnect = () => {
        console.log('handle disconnect');
    };

    const contactTiles = contacts.map((contact) => <ContactTile contact={contact} />);
    return (
        <div>
            <Button
                label="add contact"
                type="primary"
                onClick={() => history.push('/contacts/add')}
            />
            {contactTiles}
            <Button label="Disconnect" type="secondary" onClick={handleDisconnect} />
        </div>
    );
};

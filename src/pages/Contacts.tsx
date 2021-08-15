import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/generics/Button';
import { ContactTile } from '../components/ContactTile';
import { ContactList, useContactData } from '../hooks/useContactData';
import { Toolbar } from '../components/Toolbar';
import { MobileView } from '../components/surfaces/MobileView';

interface Props {}

export const Contacts = (props: Props) => {
    const history = useHistory();
    const { getContactList } = useContactData();
    const [contacts, setContacts] = useState<ContactList>([]);
    useEffect(() => {
        setContacts(getContactList());
    }, [getContactList]);

    const handleDisconnect = () => {
        console.log('handle disconnect');
    };

    const contactTiles = contacts.map((contact) => (
        <ContactTile key={contact.id} contact={contact} />
    ));
    return (
        <div>
            <Toolbar header="Address Book" backPath="/" />
            <div>
                <Button
                    label="add contact"
                    type="text"
                    onClick={() => history.push('/contacts/add')}
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    }
                />
                <div className="overflow-auto" style={{ height: '80vh' }}>
                    {contactTiles}
                </div>
                <MobileView>
                    <Button
                        label="Disconnect"
                        type="secondary"
                        onClick={handleDisconnect}
                    />
                </MobileView>
            </div>
        </div>
    );
};

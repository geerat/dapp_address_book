import { v4 as uuidv4 } from 'uuid';
import { useCallback } from 'react';
export type ContactList = Array<BaseContact>;
type DataLayerSchema = {
    contacts: Array<Contact>;
};
export interface ContactDetails {
    name: string;
    address: string;
}
export interface BaseContact {
    id: string;
    name: string;
}
export interface Contact extends BaseContact {
    address: string; //TODO is there an eth add type?
}
const blankData: DataLayerSchema = {
    contacts: [],
};

export const useContactData = () => {
    const getContactData = (): DataLayerSchema => {
        const localStorageData = localStorage.getItem('tempkey');
        const data: DataLayerSchema = localStorageData
            ? JSON.parse(localStorageData)
            : blankData;
        return data;
    };

    const saveContactData = (data: DataLayerSchema): void => {
        localStorage.setItem('tempkey', JSON.stringify(data));
    };

    const addContact = (contact: ContactDetails) => {
        //TODO: what happens if theres nothing in ls, or if a contact with that id already exists
        const contactsData = getContactData();
        const id = uuidv4();
        contactsData.contacts.push({ ...contact, id: id });
        saveContactData(contactsData);
    };

    const editContact = (id: string, edits: ContactDetails) => {
        const contactsData = getContactData();
        let contact = contactsData.contacts.find((contact) => contact.id === id);
        if (!contact) return;
        contact = { ...contact, ...edits };
        saveContactData(contactsData);
    };

    const getContact = useCallback((id: string): Contact => {
        const contactsData = getContactData();
        const contact = contactsData.contacts.find((contact) => contact.id === id);
        if (!contact) throw new Error(`could not get contact data for id: ${id}`);
        return contact;
    }, []);

    const getContactList = useCallback((): ContactList => {
        const contactsData = getContactData();
        const contactList = contactsData.contacts.map((contact) => ({
            id: contact.id,
            name: contact.name,
        }));
        return contactList;
    }, []);

    return { addContact, editContact, getContact, getContactList };
};

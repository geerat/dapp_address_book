import React from 'react';
import { useHistory } from 'react-router-dom';
import { BaseContact } from '../hooks/useContactData';
import { Button } from './Button';

interface Props {
    contact: BaseContact;
}

export const ContactTile = (props: Props) => {
    const history = useHistory();
    const navigateTo = (page: string) => {
        history.push(`/contacts/${props.contact.id}/${page}`);
    };

    return (
        <div>
            {props.contact.name}{' '}
            <Button label={'Send'} type="icon" onClick={() => navigateTo('send')} />
        </div>
    );
};

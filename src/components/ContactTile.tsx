import { useHistory } from 'react-router-dom';
import { BaseContact } from '../hooks/useContactData';
import { Typography } from './generics/Typography';
import { ProfilePic } from './ProfilePic';

interface Props {
    contact: BaseContact;
}

export const ContactTile = (props: Props) => {
    const history = useHistory();
    const handleSelect = () => {
        history.push(`/contacts/${props.contact.id}/`);
    };

    return (
        <div
            className="h-20 flex flex-row justify-left items-center"
            onClick={handleSelect}
        >
            <div className="px-6">
                <ProfilePic name={props.contact.name} size="icon" />
            </div>
            <Typography variant="paragraph" element="p">
                {props.contact.name}
            </Typography>
        </div>
    );
};

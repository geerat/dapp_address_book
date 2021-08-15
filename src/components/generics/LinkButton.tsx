import { Link } from 'react-router-dom';
import { ButtonVariants } from './Button';

interface Props {
    label: string;
    type: ButtonVariants;
    path: string;
}

export const LinkButton = (props: Props) => {
    return <Link to={props.path}>{props.label}</Link>;
};

import { Link } from 'react-router-dom';
import { ButtonVariants } from './Button';

interface Props {
    label: string;
    type: ButtonVariants;
    path: string;
}

export const LinkButton = (props: Props) => {
    return (
        <div className="px-3 py-5">
            <Link className="text-lg" to={props.path}>{props.label}</Link>
        </div>
    );
};

import { useHistory } from 'react-router-dom';
import { Button } from '../components/generics/Button';
import { LinkButton } from '../components/generics/LinkButton';
import { Typography } from '../components/generics/Typography';

export const NotFoundPage = () => {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <Typography variant="heading" element="h1">
                Page not found.
            </Typography>
            <Typography variant="paragraph" element="p">
                Sorry, we couldn't locate that page!
            </Typography>
            <Button onClick={goBack} label="Back" type="primary" />
            <LinkButton label="Home" type="secondary" path="/" />
        </div>
    );
};

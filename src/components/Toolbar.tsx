import { BackButton } from './generics/BackButton';
import { LinkButton } from './generics/LinkButton';
import { Typography } from './generics/Typography';

interface Props {
    header: string;
    button?: ButtonData;
    backPath: string;
}

interface ButtonData {
    text: string;
    path: string;
}
export const Toolbar = (props: Props) => {
    return (
        <div className="h-12 flex flex-row justify-between items-center p-0">
            <BackButton path={props.backPath} />
            <Typography variant="subheading" element="h2">
                {props.header}
            </Typography>
            {props.button ? (
                <LinkButton
                    label={props.button?.text}
                    type="text"
                    path={props.button?.path}
                />
            ) : (
                <div></div>
            )}
        </div>
    );
};

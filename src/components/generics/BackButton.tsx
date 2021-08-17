import React from 'react';
import { useHistory } from 'react-router-dom';

interface Props {
    path: string;
}

export const BackButton = (props: Props) => {
    const history = useHistory();
    const handleClick = () => {
        history.push(props.path);
    };

    return (
        <div className="pl-6 cursor-pointer" onClick={handleClick}>
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
                    d="M15 19l-7-7 7-7"
                />
            </svg>
        </div>
    );
};

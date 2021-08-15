import React from 'react';

interface Props {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    label: string;
    type: ButtonVariants;
    icon?: React.ReactNode;
}

export type ButtonVariants = 'primary' | 'secondary' | 'text';

const variantClasses = {
    primary:
        'font-sylo bg-orange-100 w-full max-w-xl text-white font-bold py-2 px-4 rounded-full hover:bg-orange-300 p-2',
    secondary:
        'bg-sylo-sec w-full max-w-xl text-white font-bold py-2 px-4 rounded-full hover:bg-sylo-sec-hover p-2',
    text: 'text-blue-primary font-sylo w-full max-w-xl text-white font-bold py-2 px-4 rounded-full p-2',
};

export const Button = (props: Props) => {
    return (
        <button className={variantClasses[props.type]} onClick={props.onClick}>
            {props.icon}
            {props.label}
        </button>
    );
};

import React from 'react';

interface Props {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    label: string;
    type: Variants;
}

type Variants = 'primary' | 'secondary' | 'icon';

const variantClasses = {
    primary:
        'font-sylo bg-orange-100 w-56 text-white font-bold py-2 px-4 rounded-full hover:bg-orange-300',
    secondary:
        'bg-sylo-sec w-56 text-white font-bold py-2 px-4 rounded-full hover:bg-sylo-sec-hover',
    icon: '',
};

export const Button = (props: Props) => {
    return (
        <button className={variantClasses[props.type]} onClick={props.onClick}>
            {props.label}
        </button>
    );
};

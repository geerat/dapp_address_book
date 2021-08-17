import React from 'react';

interface Props {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    label: string;
    type: ButtonVariants;
    icon?: React.ReactNode;
    disabled?: boolean;
}

export type ButtonVariants = 'primary' | 'secondary' | 'text';

const variantClasses = {
    primary:
        'font-sylo bg-orange-100 w-4/5 max-w-xl text-white font-bold py-2 px-4 rounded-full hover:bg-orange-300',
    secondary:
        'bg-sylo-sec w-4/5 max-w-xl text-white font-bold py-2 px-4 rounded-full hover:bg-sylo-sec-hover',
    text: 'text-blue-primary font-sylo w-4/5 max-w-xl text-white font-bold py-2 px-4 rounded-full',
};

export const Button = (props: Props) => {
    return (
        <button className={variantClasses[props.type]} onClick={props.onClick}>
            <div className="flex flex-row justify-center">
                {props.type === 'text' && <div className="pr-10">{props.icon}</div>}
                <p>{props.label}</p>
            </div>
        </button>
    );
};

import React from 'react';

interface Props {
    label: string;
    id: string;
    value: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: Props) => {
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                className="rounded-full"
                value={props.value}
                id={props.id}
                onChange={props.onChange}
                onBlur={props.onBlur}
                placeholder={props.label}
            />
        </div>
    );
};

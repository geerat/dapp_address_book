import React from 'react';

interface Props {
    label: string;
    id: string;
    value: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: InputType;
    errorMessage?: string;
}

type InputType = 'number' | 'text';

export const Input = (props: Props) => {
    return (
        <>
            <input
                className="appearance-none my-4 text-xl bg-grey-input rounded-full w-full max-w-xl py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={props.value}
                id={props.id}
                onChange={props.onChange}
                onBlur={props.onBlur}
                placeholder={props.label}
                type={props.type}
                step="0.001"
            />
            {props.errorMessage && (
                <p className="text-red-500 italic">{props.errorMessage}</p>
            )}
        </>
    );
};

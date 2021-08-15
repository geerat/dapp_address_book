import React from 'react';

interface Props {
    children: React.ReactNode;
}

export const CenterVertically = (props: Props) => {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            {props.children}
        </div>
    );
};

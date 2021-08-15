import React from 'react';

interface Props {
    children: React.ReactNode;
}

export const MobileView = (props: Props) => {
    return (
        <div className="flex flex-col justify-center items-center mx-4">
            {props.children}
        </div>
    );
};

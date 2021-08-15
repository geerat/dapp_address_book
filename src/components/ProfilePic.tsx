import React from 'react';

interface Props {
    name: string;
    size: Size;
}

type Size = 'large' | 'icon';
const sizeClasses = {
    large: 'w-32 h-32',
    icon: 'w-12 h-12',
};
const fontSizeClasses = {
    large: 'text-5xl text-white',
    icon: 'text-xl text-white',
};
export const ProfilePic = (props: Props) => {
    const allNames = props.name.split(' ').map((name) => name.slice(0, 1).toUpperCase());

    const initials =
        allNames.length > 1
            ? `${allNames[0]}${allNames[allNames.length - 1]}`
            : allNames[0];
    return (
        <div
            className={`${
                sizeClasses[props.size]
            } bg-main-secondary rounded-full flex justify-center items-center`}
        >
            <span className={fontSizeClasses[props.size]}>{initials}</span>
        </div>
    );
};

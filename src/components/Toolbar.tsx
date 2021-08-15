import React from 'react';

interface Props {
    children: JSX.Element;
}
export const Toolbar = (props: Props) => {
    return <>toolbar{props.children}</>;
};

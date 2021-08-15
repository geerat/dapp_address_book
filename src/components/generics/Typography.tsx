interface Props {
    children: string;
    variant: Variant;
    element: Elements;
    center?: boolean;
    className?: string;
}

const variantClasses = {
    paragraph: 'break-words px-5 text-blue-primary text-lg',
    heading: 'p-2 text-4xl px-5 py-6 ',
    subheading: 'p-2 text-2xl',
};
type Elements = 'h1' | 'h2' | 'p';
type Variant = 'paragraph' | 'heading' | 'subheading';
export const Typography = (props: Props) => {
    const classNames = `${props.className && props.className} 
    ${variantClasses[props.variant]} ${props.center && 'text-center'}`;

    switch (props.element) {
        case 'h1':
            return <h1 className={classNames}>{props.children}</h1>;
        case 'h2':
            return <h2 className={classNames}>{props.children}</h2>;
        case 'p':
            return <p className={classNames}>{props.children}</p>;
    }
};

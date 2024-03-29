module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'orange-100': '#F15A29',
                'orange-300': '#BE4620',
                'sylo-sec': '#4D6AA7',
                'sylo-sec-hover': '#354974',
                'main-secondary': '#8A96AA',
                'blue-primary': '#495162',
                'grey-input': '#F6F6F6',
            },
            fontFamily: {
                'sylo-sb': [
                    'RawlineSemiBold',
                    'Quicksand',
                    'Helvetica Neue',
                    'Helvetica',
                    'Arial',
                    'sans-serif',
                ],
                sylo: ['Rawline', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

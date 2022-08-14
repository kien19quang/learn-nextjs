import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
let theme = createTheme({
    typography: {
        //fontFamily: '"Heebo", sans-serif',
    },
    palette: {
        primary: {
            main: '#FF6464',
        },
        secondary: {
            light: '#EDF7FA',
            main: '#00A8CC',
        },
        error: {
            main: red.A400,
        },
        text: {
            primary: '#21243D',
        },
    },

    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: 'md',
            },
            styleOverrides: {
                maxWidthSm: {
                    maxWidth: '680px',

                    '@media (min-width: 600px)': {
                        maxWidth: '680px',
                    },
                },

                maxWidthMd: {
                    maxWidth: '860px',

                    '@media (min-width: 900px)': {
                        maxWidth: '860px',
                    },
                },
            },
        },
        MuiLink: {
            defaultProps: {
                underline: 'none',
            },
            styleOverrides: {
                root: {
                    color: 'black',

                    '&:hover, &.active': {
                        color: '#FF6464',
                    },
                },
            },
        },
        MuiTypography: {
            defaultProps: {
                fontFamily: 'Heebo, sans-serif',
            },
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'contained', color: 'primary' },
                    style: {
                        color: 'white',
                    },
                },
            ],
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    paddingInline: 2,
                },
            },

            variants: [
                {
                    props: { color: 'secondary' },
                    style: {
                        backgroundColor: '#142850',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 16,
                    },
                },
            ],
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;

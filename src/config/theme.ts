const defaultTheme = {
    primary: {
        main: 'rgb(76, 175, 80)',
        light: 'rgb(111, 191, 115)',
        dark: 'rgb(53, 122, 56)',
        contrastText: 'rgba(0, 0, 0, 0.87)',
        hover: 'rgba(76, 175, 80, 0.04)',
        focus: 'rgb(76, 175, 80, 0.12)',
        active: 'rgb(76, 175, 80, 0.2)',
    },
    secondary: {
        main: 'rgb(255, 152, 0)',
        light: 'rgb(255, 172, 51)',
        dark: 'rgb(178, 106, 0)',
        contrastText: 'rgba(0, 0, 0, 0.87)',
        hover: 'rgba(255, 152, 0, 0.04)',
        focus: 'rgb(255, 152, 0, 0.12)',
        active: 'rgb(255, 152, 0, 0.2)',
    },
    error: {
        light: 'rgb(229, 115, 115)',
        main: 'rgb(244, 67, 54)',
        dark: 'rgb(211, 47, 47)',
        contrastText: 'rgb(255, 255, 255)',
        hover: 'rgba(244, 67, 54, 0.04)',
        focus: 'rgb(244, 67, 54, 0.12)',
        active: 'rgb(244, 67, 54, 0.2)',
    },
    warning: {
        light: 'rgb(255, 184, 77)',
        main: 'rgb(255, 152, 0)',
        dark: 'rgb(245, 123, 0)',
        contrastText: 'rgba(0, 0, 0, 0.87)',
        hover: 'rgba(255, 152, 0, 0.04)',
        focus: 'rgb(255, 152, 0, 0.12)',
        active: 'rgb(255, 152, 0, 0.2)',
    },
    info: {
        light: 'rgb(100, 180, 246)',
        main: 'rgb(33, 150, 243)',
        dark: 'rgb(25, 118, 210)',
        contrastText: 'rgb(255, 255, 255)',
        hover: 'rgba(33, 150, 243, 0.04)',
        focus: 'rgb(33, 150, 243, 0.12)',
        active: 'rgb(33, 150, 243, 0.2)',
    },
    grey: {
        '50': '#fafafa',
        '100': '#f5f5f5',
        '200': '#eeeeee',
        '300': '#e0e0e0',
        '400': '#bdbdbd',
        '500': '#9e9e9e',
        '600': '#757575',
        '700': '#616161',
        '800': '#424242',
        '900': '#212121',
        A100: '#f5f5f5',
        A200: '#eeeeee',
        A400: '#bdbdbd',
        A700: '#616161',
    },
    text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.6)',
        disabled: 'rgba(0, 0, 0, 0.38)',
    },
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    divider: 'rgba(0, 0, 0, 0.12)',
    breakpoints: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
    },
};

export type MainColors = 'primary' | 'secondary' | 'error' | 'warning' | 'info';

export type ColorVarients = {
    main?: string;
    light?: string;
    dark?: string;
    contrastText?: string;
    hover?: string;
    focus?: string;
    active?: string;
};

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BreakpointValues = {
    [key in Breakpoint]?: number;
};

export type Theme = {
    text?: {
        primary?: string;
        secondary?: string;
        disabled?: string;
    };
    disabled?: string;
    disabledBackground?: string;
    divider?: string;
    breakpoints?: BreakpointValues;
} & { [key in MainColors]?: ColorVarients };

export default defaultTheme;

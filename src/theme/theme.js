import { ThemeProvider as Provider } from 'styled-components';

const theme = {};

export const ThemeProvider = (props) => <Provider theme={theme} {...props} />;

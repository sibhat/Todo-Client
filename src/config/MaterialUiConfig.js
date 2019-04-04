import {createMuiTheme} from "@material-ui/core";

export default   createMuiTheme({
    palette: {
        background: {
            default: "#ffffff",
            paper: "#e2e2e2"
        },
        primary: {
            main: "#ffffff"
        },
        secondary: {
            main: "#f30239"
        },
        text: {
            primary: "#000000",
            secondary: "#fff4ff"
        },
        contrastThreshold: 9,
    },
    typography: {
        useNextVariants: true,
    },
});
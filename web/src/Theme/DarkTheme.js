const { createTheme } = require("@mui/material");

export const darkTheme=createTheme({

    palette: {
        mode:"dark",
        primary:{
            main:"#ffffff"
        },
        secondary:{
            main:"#00d1cd"
        },
        black:{
            main:"#242B2E",
        },
        background:{
            main:"#444444",
            default:"#37383C",
            paper:"#37383C"
        },
        textColor:{
            main: "#FFFFFF",
        }
    }
})
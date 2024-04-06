const { createTheme } = require("@mui/material");

export const darkTheme=createTheme({

    palette: {
        mode:"dark",
        primary:{
            main:"#1ab1ae"
        },
        secondary:{
            main:"#37383C"
        },
        black:{
            main:"#242B2E",
        },
        background:{
            main:"#444444",
            default:"#1E1E20",
            paper:"#37383C"
        },
        textColor:{
            main: "#FFFFFF",
        }
    }
})
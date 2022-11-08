import Box from '@mui/material/Box';

import { createTheme } from '@mui/material/styles';
import { useState } from "react";

export function Post(props) {

    const theme = createTheme();

    return (
        <Box sx={{

            width: '25vw',
            height: '25vw',

            backgroundImage: "url('" + props.image + "')",

            backgroundSize: '100% 100%',

            marginTop: '5vw',
            marginRight: 'auto',

            boxShadow: '0px 4px 4px 0px #00000040',

            [theme.breakpoints.down('sm')]: {
                width: '55.5vw',
                height: '55.5vw',
                marginRight: '0vw',
                marginTop: '0vw',
                marginBottom: '10vw',
            },
        }}></Box>
    );
}

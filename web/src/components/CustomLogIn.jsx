import { Button } from "@mui/material";
import { createTheme } from '@mui/material';

export function CustomLogIn({sendValue}) {
    const theme = createTheme();
    return (
        <Button variant="contained" onClick={function(){sendValue()}} 
        sx={{

            backgroundColor: '#5E2075',
            color: '#FEFCFF',
            borderRadius: '35px',
            fontFamily: 'Roboto',
            fontWeight: '400',
            fontSize: '1.5vw',

            textTransform: 'none',
            marginTop: '-2%',
            marginBottom: '24 %',
            width: '16vw',
            height: '4vw',
            padding: '2.6%',
            "&.MuiButtonBase-root:hover": {
                bgcolor: '#75206C',

            },
            [theme.breakpoints.down('sm')]: {
                width:'35vw',
                height:'10vw',
                marginTop:'4vw',
                fontSize: '3.2vw',
            },
        }}>

            Entrar
        </Button>
    )

}
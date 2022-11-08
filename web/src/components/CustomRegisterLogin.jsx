import { Button } from "@mui/material";
import { createTheme } from '@mui/material';

export function CustomRegisterLogin({redirect}) {
    const theme = createTheme();
    return (
        <Button variant="contained" 
        onClick={function(){redirect()}}
        sx={{

            backgroundColor: ' #FE690E',

            color: '#FEFCFF',
            borderRadius: '35px',
            fontFamily: 'Roboto',
            fontWeight: '400',
            fontSize: '1.5vw',
            textTransform: 'none',
            marginTop: '15%',
            width: '18vw',
            height: '4vw',
            padding: '2%',
            "&.MuiButtonBase-root:hover": {
                bgcolor: '#FE4415',
            },
            [theme.breakpoints.down('sm')]: {
                width:'35vw',
                height:'10vw',
                marginTop:'4vw',
                fontSize: '3.2vw',
            },
        }}>
            Registrar-se
        </Button>

    )
}
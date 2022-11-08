import { Button } from "@mui/material"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CustomTextFieldPassWord } from "./CustomTextFieldPassWord";

const theme = createTheme();

export function CustomRegisterButton({sendValue}){
    return(
        <Button variant="contained" onClick={function(){sendValue()}}
            fullWidth
            sx={{

                "&.MuiButtonBase-root:hover": {
                    bgcolor: "#75206C",
                    },

                marginTop: '1%',
                marginBottom: '5px',

                paddingTop: '5%',
                paddingBottom: '5%',

                height: '4.1667vw',
                maxHeight: '55px',

                maxWidth: '300px',

                backgroundColor: '#5E2075',
                color: '#FEFCFF',
                
                borderRadius: '35px',

                fontFamily: 'Roboto',
                fontWeight: '400',
                fontSize: 'clamp(0px, 1.2vw, 23px)',
                textTransform: 'none',

                [theme.breakpoints.down('sm')]: {
                    maxWidth: 'none',
                    width: '40vw',
                    height: '8vw',
    
                    fontSize: '3vw',
                 },

                 "input": {
                    padding:'0px',
                 }

            }}>
                Registrar-se
        </Button>
    )
}
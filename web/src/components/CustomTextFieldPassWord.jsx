import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/system';

const theme = createTheme();

export function CustomTextFieldPassWord({valueRef}){
    return(
        <TextField
            inputRef={valueRef}
            fullWidth
            type="password"
            sx={{
                display: 'block',
                padding: '0px',

                '& .MuiInputBase-root': {
                    background: '#EFEFEF',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '35px',
                    },
                '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                },

                '& .MuiOutlinedInput-input': {
                    height: '1.2vw',
                    
                },

                [theme.breakpoints.down('sm')]: {
                    marginTop: '2%',
                    
                 },
            }}
        >
        </TextField>
    )
}
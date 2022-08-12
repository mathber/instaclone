import TextField from '@mui/material/TextField';

export function CustomTextField(){
    return(
        <TextField
            fullWidth
            sx={{
                display: 'block',
                padding: '0px',
                
                '& .MuiInputBase-root': {
                    backgroundColor: '#D9D9D9',
                    borderRadius: '35px',
                    },
                '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                }
            }}
        >
        </TextField>
    )
}
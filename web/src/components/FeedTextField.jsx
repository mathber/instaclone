import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/system';

const theme = createTheme();

export function FeedTextField(){
    
    return(
        <TextField sx={{width:'40vw', marginLeft:'1.5vw', marginRight:'1vw',
            input: {
                fontSize: '1.8vw',
                fontWeight: '200',
                paddingTop: '0.4vw',
                color:'#FEFEFE',
            },
            [theme.breakpoints.down('sm')]: {
                width:'70vw', marginLeft:'2vw',
                input: {
                    fontSize: '5vw',
                    paddingTop: '1.7vw'
                }
            },
        
        }}
            placeholder="No que você está pensando?"
            variant='standard'
            InputProps={{
                disableUnderline: true,
        }}/>
    )
}
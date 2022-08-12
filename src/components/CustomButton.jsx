import { Button } from "@mui/material"

export function CustomButton(){
    return(
        <Button variant="contained" component="label"              
        sx={{
            marginLeft: '10px',

            backgroundColor: '#D9D9D9',
            color: '#5E2075',
            
            boxSizing: 'inherit',
            borderRadius: '35px',

            height: '56px',

            transition: 'none',
            boxShadow: 'none',
        }}
        
            >
            S
            <input hidden accept="image/*" multiple type="file" />
        </Button>
    )
}
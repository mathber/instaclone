import { Button } from "@mui/material"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';

const theme = createTheme();

export function CustomImageButton({setSelectedImage}){

    return(
        <Button variant="contained" component="label"
        disableElevation
        disableRipple
        fullWidth
        size="small"        
        sx={{
            
            "&.MuiButtonBase-root:hover": {
            bgcolor: "#EFEFEF",
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            },

            padding: '0px',
            
            backgroundColor: '#EFEFEF',
            color: '#5E2075',
            
            boxSizing: 'inherit',
            borderRadius: '35px',
            
            height: '4.1667vw',
            maxHeight: '55px',
            maxWidth: '205px',
            
            fontFamily: 'Roboto',
            fontSize: 'clamp(0px, 0.86vw, 16px)',
            textTransform: 'none',
            
            transition: 'none',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

            [theme.breakpoints.down('sm')]: {
                maxWidth: 'none',
                width: '54vw',
                height: '8vw',
                
                fontSize: '3vw',
            },
            
            
        }}
        
        >
            Selecionar Imagem
            <input hidden accept="image/*" multiple type="file" 
            onChange={e => setSelectedImage(e.target.files[0])}
            />
            
        </Button>
    )
}
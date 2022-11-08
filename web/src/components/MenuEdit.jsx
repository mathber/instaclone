import '../pages/userpage/UserPage.css';

import Box from '@mui/material/Box'
import Link from '@mui/material/Link';

import { createTheme } from '@mui/material/styles';
import { Button, TextField } from '@mui/material';
import { useState } from "react";

import UploadIcon from '@mui/icons-material/Upload';
import CloseIcon from '@mui/icons-material/Close';

export function MenuEdit({editOptionShown}){
    const theme = createTheme();

    return (
        <Box sx={{ width: '48vw', height: '56vw',
            position: 'absolute', 
            marginLeft: 'auto', marginRight: 'auto',
            left: '0', right: '0', zIndex:'1',
            
            background:'linear-gradient(180deg, #FF5722 0.96%, #DF0D57 99.04%);', borderRadius:'10px',
            [theme.breakpoints.down('sm')]: { width: '70%', height:'30vh'}
        }}>
            <Box sx={{display:'flex', flexDirection:'row-reverse'}}>
                <CloseIcon onClick={function(){editOptionShown()}}
                sx={{marginRight:'1vw', marginTop:'1vw', color:'#FEFEFE'}}/>
            </Box>
            <Box sx={{display:'flex', width:'90%', justifyContent:'space-around', marginTop:'3vw',
            marginLeft:'auto', marginRight:'auto'}}>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <UploadIcon sx={{fontSize:'7vw', color:'#FEFEFE'}}/>
                    <h2 className='edit-menu'> Alterar foto de perfil </h2>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <UploadIcon sx={{fontSize:'7vw', color:'#FEFEFE'}}/>
                    <h2 className='edit-menu'> Alterar foto de capa </h2>
                </Box>
            </Box>
            <Box sx={{textAlign:'center', marginTop:'3vw', height:'30vw',
            [theme.breakpoints.down('sm')]: { height: '15vh'}}}>
                <Box sx={{display:'flex', width:'90%', marginLeft:'auto', marginRight:'auto'}}>
                    <Box sx={{width:'90%', marginLeft:'auto', marginRight:'1vw'}}>
                        <h2 className='edit-menu'>Nome de Usuário:</h2>
                        <TextField fullWidth sx={{ borderColor:'#FEFEFE', borderRadius:'10px',
                        margin:'0',
                        '& .MuiInputBase-root': { background: '#FEFEFE'},
                        '& .MuiOutlinedInput-root': {
                            border: 'none', height:'5.5vw',
                            '&:hover': { borderColor: '#FEFEFE'}}
                        }}></TextField>
                    </Box>
                    <Box sx={{width:'30%'}}>
                        <h2 className='edit-menu'>Idade:</h2>
                        <TextField fullWidth sx={{ borderColor:'#FEFEFE', borderRadius:'10px',
                        margin:'0', 
                        '& .MuiInputBase-root': { background: '#FEFEFE'},
                        '& .MuiOutlinedInput-root': {
                            border: 'none', height:'5.5vw',
                            '&:hover': { borderColor: '#FEFEFE'}}
                        }}></TextField>
                    </Box>
                </Box>
                <Box sx={{ width:'90%', marginLeft:'auto', marginRight:'auto', marginTop:'2.5vw'}}>
                    <h2 className='edit-menu'>Adicione uma biografia:</h2>
                    <TextField fullWidth multiline rows={5} sx={{ borderColor:'#FEFEFE', borderRadius:'10px',
                    height:'10vw', 
                    '& .MuiInputBase-root': { background: '#FEFEFE'},
                    input: { color:'#FEFEFE'},
                    '& .MuiOutlinedInput-root': {
                        border: 'none',  height:'15vw',},
                     }}></TextField>
                </Box>
            </Box>
            <Box sx={{display:'flex', justifyContent:'end',
            [theme.breakpoints.down('sm')]: { justifyContent:'center'}}}>
                <Button sx={{backgroundColor:'#FA2B0F', width:'2vw', height:'2.5vw',
                    marginRight:'2vw', color:'#FEFEFE', fontSize:'1.2vw', fontWeight:'400',
                    [theme.breakpoints.down('sm')]: { width: '70%', margin:'0', marginTop:'1vw', fontSize:'2vw'}
                }}> Enviar </Button>
            </Box>
        </Box>
    );
}

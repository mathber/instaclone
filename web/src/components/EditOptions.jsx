import '../pages/userpage/UserPage.css';

import Box from '@mui/material/Box'
import Link from '@mui/material/Link';

import { createTheme } from '@mui/material/styles';

export function EditOptions(){

    const theme = createTheme();

    return (
        <Box sx={{ position:'absolute', left: '77vw', top:'16.2vw',
        width:'20vw', height: '8vw',
        display:'flex', flexDirection:'column',
        alignItems:'center', justifyContent:'center',
        borderRadius:'10px', border: '0.1vw solid #FE690E',
        backgroundColor:'#FEFEFE', boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
        [theme.breakpoints.down('sm')]: {
            width:'34vw', height: '13vw',
            left: '40vw', top:'63vw',
         },
         }}>
            <Link sx={{fontFamily: 'Roboto', fontSize: '1.9vw', fontWeight: '200', marginBottom:'0.7vw',
            textDecoration:'none', color:'#1E1E1E',
            
            "&.MuiTypography-root:hover": {
                textDecoration:'underline',
                textDecorationColor:'#1E1E1E',
            },

            [theme.breakpoints.down('sm')]: {
                fontSize: '3.2vw', marginBottom:'1.2vw',
             },
            }}>Editar Capa de Perfil</Link>
            <Link sx={{fontFamily: 'Roboto', fontSize: '1.9vw', fontWeight: '200',
            textDecoration:'none', color:'#1E1E1E',

            "&.MuiTypography-root:hover": {
                textDecoration:'underline',
                textDecorationColor:'#1E1E1E',
            },

            [theme.breakpoints.down('sm')]: {
                fontSize: '3.2vw',
             },
            }}>Editar Foto de Perfil</Link>
        </Box>
    );
}

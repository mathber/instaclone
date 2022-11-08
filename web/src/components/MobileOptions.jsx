import '../pages/userpage/UserPage.css';

import Box from '@mui/material/Box'

import { createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import LogoutIcon from '@mui/icons-material/Logout';

const theme = createTheme();

export function MobileOptions({dados}){
    const navigate = useNavigate();
    return (
        <Box sx={{ width:'45vw', height:'48vw',
        position:'absolute', top:'12vw', left:'53vw',
        display:'flex', flexDirection:'column', justifyContent:'center',
        zIndex:'1',
        backgroundColor:'#FEFEFE', borderRadius:'10px',
        border:'0.5vw solid #E1E1E1',
        paddingLeft:'1vw',
        opacity:'0',
        [theme.breakpoints.down('sm')]: { opacity:'1' }
        }}>
            <Box sx={{display: 'flex', alignItems:'center',
            marginBottom:'1vw',}}>
                <SearchIcon sx={{fontSize: '7vw'}}/>
                <h2 className='mobileOptions'>Pesquisar</h2>
            </Box>
            <Box sx={{display: 'flex', alignItems:'center',
            marginBottom:'1vw',}}>
                <PersonIcon onClick={function(){navigate(`/user/${dados[1].id}`,
            {   state:
                    dados
            });}}
                sx={{fontSize: '7vw'}}/>
                <h2 className='mobileOptions'>Perfil</h2>
            </Box>
            <Box sx={{display: 'flex', alignItems:'center', 
            marginBottom:'1vw', paddingBottom:'2vw', borderBottom:'0.5vw solid #E1E1E1'}}>
                <PeopleIcon sx={{fontSize: '7vw'}}/>
                <h2 className='mobileOptions'>Lista de Amigos</h2>
            </Box>
            <Box sx={{display: 'flex', alignItems:'center', 
            marginBottom:'1vw', marginTop:'1vw'}}>
                <MiscellaneousServicesIcon sx={{fontSize: '7vw'}}/>
                <h2 className='mobileOptions'>Configuração</h2>
            </Box>
            <Box sx={{display: 'flex', alignItems:'center', 
            marginBottom:'1vw'}}>
                <LogoutIcon onClick={function(){navigate("/"); alert("Desconectado!")}} sx={{fontSize: '7vw'}}/>
                <h2 className='mobileOptions'>Desconectar</h2>
            </Box>
        </Box>
    );
}

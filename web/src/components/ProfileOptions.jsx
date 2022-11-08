import PersonIcon from '@mui/icons-material/Person';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import LogoutIcon from '@mui/icons-material/Logout';
import Box from '@mui/material/Box'
import '../pages/userpage/UserPage.css';

import { useNavigate } from 'react-router-dom';

export function ProfileOptions(){
    const navigate = useNavigate();
    return (
        <Box sx={{position:'relative'}}>
            <div className="arrow-up"></div>
            <Box sx={{
                width: '11.72vw',
                height: '13.68vw',

                position: 'absolute',
                top: '6.5vw',
                right: '1.5vw',

                backgroundColor: '#FEFEFE',
                borderRadius: '20px',
                boxShadow: '0px 0px 4px 4px #00000040',
            }}>
                <Box sx={{
                    marginTop: '0.6vw',
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <PersonIcon sx={{
                        fontSize: '3vw',
                        
                        borderRadius: '50%',
                        boxShadow: '0px 4px 4px 0px #00000040',

                        marginTop: '0.5vw',
                        marginLeft: '0.5vw',
                    }}/>
                    <h3> Perfil </h3>
                </Box>
                <Box sx={{
                    marginTop: '0.2vw',
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <MiscellaneousServicesIcon sx={{
                        fontSize: '3vw',
                        
                        borderRadius: '50%',
                        boxShadow: '0px 4px 4px 0px #00000040',

                        marginLeft: '0.5vw',
                    }}/>
                    <h3> Configuração </h3>
                </Box>
                <Box sx={{
                    marginTop: '0vw',
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <LogoutIcon onClick={function(){navigate("/"); alert("Desconectado!")}} sx={{
                        fontSize: '3vw',
                        
                        borderRadius: '50%',
                        boxShadow: '0px 4px 4px 0px #00000040',

                        marginLeft: '0.5vw',
                    }}/>
                    <h3> Desconectar </h3>
                </Box>
            </Box>
        </Box>
    );
}

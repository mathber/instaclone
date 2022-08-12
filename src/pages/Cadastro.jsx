import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import { createTheme, padding, sizing, ThemeProvider, width } from '@mui/system';
import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import './cadastro.css';
import { CustomTextField } from '../components/CustomTextField';
import { CustomButton } from '../components/CustomButton';

const options = ['Masculino', 'Feminino'];

export function Cadastro() {
    return ( 
        
            <Grid container component="main"
            
            >  
                <CssBaseline/>
                <Grid item xs={5}
                sx={{
                    flexDirection: 'center',
                }}
                >
                    <Box
                    sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    alignContent: 'center',

                    paddingLeft: '2%',
                    
                    marginTop: '0px',
                    }}
                    >

                        <Box component="header"
                        sx={{
                            marginTop: '5%',
                            marginBottom: '7%',
                        }}
                        >
                        
                        <h1>Registrar</h1>
                        </Box>
                        
                        <Box
                            sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        
                            width: '62%',
                            paddingBottom: '35px',
                            
                        }}>

                            <h5>Nome</h5>
                            <CustomTextField/>
                        </Box>
                        <Box
                            sx={{
                            display: 'flex',
                            flexDirection: 'column',

                            width: '62%',
                            paddingBottom: '35px',
                            
                        }}>

                            <h5>E-mail</h5>
                            <CustomTextField/>
                        </Box>
                        <Box
                            sx={{
                            display: 'flex',
                            flexDirection: 'column',

                            width: '62%',
                            paddingBottom: '35px',
                            
                        }}>

                            <h5>Senha</h5>
                            <CustomTextField/>
                        </Box>
                        <Box
                            sx={{
                            display: 'flex',
                            flexDirection: 'column',

                            width: '62%',
                            paddingBottom: '35px',
                            
                        }}>

                            <h5>Confirmar Senha</h5>
                            <CustomTextField/>
                        </Box>
                        <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',

                            width: '62%',
                            
                        }}>
                            <Box
                            sx={{
                                width: '50%',
                            }}>
                                <h5> Sexo </h5>
                                <Autocomplete
                                    disablePortal
                                    options={ options }
                                    openText='False'
                                    sx={{ 

                                        '& .MuiInputBase-root': {
                                            backgroundColor: '#D9D9D9',
                                            borderRadius: '35px',
                                            },

                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                            },

                                    }}
                                    renderInput={(params) => <TextField {...params} label="Sexo" />}
                                />
                            </Box>
                            <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',

                                width: '50%',
                            }}
                            >
                                <h5> Imagem </h5>
                               <CustomButton/>
                            </Box>
                            
                        </Box>
                        <Box
                        sx={{
                            
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',

                            width: '45%',
                            marginTop: '4%',
                        }}>
                            <Button variant="contained"
                            fullWidth
                            sx={{
                                marginTop: '1%',
                                marginBottom: '0.5%',

                                backgroundColor: '#5E2075',
                                color: '#FEFCFF',

                                borderRadius: '35px',

                            }}>
                                Registrar
                            </Button>
                            <Link href="#"
                            sx={{
                                color: '#5E2075',
                            }}
                            >Já possui conta?</Link>
                        </Box>
                       
                    </Box>    
                </Grid>
                <Grid item xs={7}
                sx={{
                    backgroundColor: '#5E2075',
                    borderLeft: '4px solid #FE690E',
                }}
                >
                </Grid>
            </Grid>
        

        
    );
}


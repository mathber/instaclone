import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import { createTheme, padding, ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

const options = ['Masculino', 'Feminino'];

export function Cadastro() {
    return (
        
            <Grid container component="main">  
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
                    }}
                    >
                        <Box component="header">
                        
                        <h1>Registrar</h1>
                        </Box>
                        
                        <h5>Nome</h5>
                        <TextField
                            sx={{
                                width: '60%',
                                height: '44px',
                                paddingBottom: '70px'

                            }}
                        >
                        Nome
                        </TextField>
                        <TextField
                            sx={{
                                width: '60%',
                                height: '44px',
                                
                
                            }}
                        >
                        E-mail
                        </TextField>
                        <TextField
                            sx={{
                                width: '60%',
                                height: '44px',

                            }}
                        >
                        Senha
                        </TextField>
                        <TextField
                            sx={{
                                width: '60%',
                                height: '44px',
                            }}
                        >
                        Confirmar Senha
                        </TextField>
                        <Autocomplete
                            disablePortal
                            id="sexo"
                            options={ options }
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Sexo" />}
                        />
                    </Box>    
                </Grid>
                <Grid item xs={7}>
                
                </Grid>
            </Grid>
        

        
    );
}


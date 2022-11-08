import './cadastro.css';
import api from '../../services/api';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { CustomTextField } from '../../components/CustomTextField';
import { CustomTextFieldPassWord } from '../../components/CustomTextFieldPassWord';
import { CustomImageButton } from '../../components/CustomImageButton';
import { CustomRegisterButton } from '../../components/CustomRegisterButton';
import { CustomTextFieldEmail } from '../../components/CustomTextFieldEmail';

import { createTheme } from '@mui/material/styles';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export function Cadastro() {

    // Opções do AutoSelect(Componente MUI)
    const options = ['Masculino', 'Feminino'];
    // Determina o uso de temas e de outras funções
    const theme = createTheme();

    // Função específica para a variavél sexo
    const [selectedOptions, setSelectedOptions] = useState([]);
    const handleChange = (event, value) => setSelectedOptions(value);
    const sexo = selectedOptions;

    // Função específica para a variável imagem, no caso, selectedImage
    const [selectedImage, setSelectedImage] = useState();

    // Funções específicas para as variáveis dos TextFields
    const nome = useRef(), email = useRef(), senha = useRef(), confirmarSenha = useRef();
    var status = null;
    // Função que envia os dados para o banco de dados descrito no endereço
    async function sendValue() {
        //const dados = JSON({ username:nome,email:email,password:senha });
        var formData = new FormData();
        var imagefile = document.querySelector('#file');
        formData.append("image", imagefile);
        await api
            .post("http://127.0.0.1:3333/addUsuario/", {
                username: nome.current.value,
                email: email.current.value,
                password: senha.current.value,
                sex: sexo,
                image: selectedImage,
                formData
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function (response) {
                status = response.status;
                console.log(status);
            })
            console.log(status);

        /*
        console.log("Nome: " + nome.current.value);
        console.log("Email: " + email.current.value);
        console.log("Senha: " + senha.current.value);
        console.log("Confirmar Senha: " + confirmarSenha.current.value);
        console.log("Sexo: " + sexo); 
        console.log(selectedImage);
        */
    }
    console.log(status);

    let navigate = useNavigate();

    // FUNÇÃO VERIFICAÇÃO
    // verifica se os valores receberam valores, caso contrário, resulta em
    // um alerta "Preencha o(s) campo(s) restante(s)!". Em seguida, determina se os valores de senha
    // e confirmarSenha são equivalentes, caso contrário, resulta em um alerta "A confirmação da
    // senha não é a mesma!".

    // Se todas as condições são cumpridas é executado o sendValue();
    function Verification() {
        console.log(status);

        if (nome.current.value == "" || email.current.value == "" || senha.current.value == "" || confirmarSenha.current.value == "" || sexo == null) {
            alert('Preencha o(s) campo(s) restante(s)!');
        } else {
            if (senha.current.value == confirmarSenha.current.value) {
                sendValue();
                alert('Cadastro confirmado!');
                navigate("/");
                
            } else {
                alert('A confirmação da senha não é a mesma!');
            }
        }
    }

    // CONTEÚDO DA PÁGINA
    return (
        <Grid container component="main"
            sx={{
                overflow: 'hidden',

                [theme.breakpoints.down('sm')]: {
                    display: 'flex',
                    flexDirection: 'column-reverse',

                    alignItems: 'center',
                    alignContent: 'center',

                },
            }}
        >
            <Grid item xs={5}
                sx={{
                    flexDirection: 'center',
                    height:'100vh',

                    [theme.breakpoints.down('sm')]: {
                        display: 'contents',
                    },

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
                        marginBottom: '5%',

                        [theme.breakpoints.down('sm')]: {
                            width: '80%',
                            padding: '0px',

                        },

                    }}
                >

                    <Box component="header"
                        sx={{
                            marginTop: '5%',
                            marginBottom: 'clamp(0px, 8%, 50px)',

                            fontFamily: 'Roboto',
                            fontSize: 'clamp(0px, 4vw, 50px)',
                            fontWeight: '800',
                            lineHeight: '56px',
                            letterSpacing: '0em',
                            textAlign: 'left',

                            color: '#5E2075',

                            [theme.breakpoints.down('sm')]: {
                                fontSize: '6.1vw',
                                fontWeight: '400',

                                marginTop: '3%',
                                marginBottom: '3%',

                            },

                        }}
                    >

                        Registrar
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',

                            width: '68%',
                            minWidth: '172px',
                            maxWidth: '450px',

                            paddingBottom: 'clamp(0px, 6%, 40px)',

                            fontFamily: 'Roboto',
                            fontSize: 'clamp(0px, 1.205vw, 25px)',
                            fontWeight: '400',
                            lineHeight: '1.385vw',
                            letterSpacing: '0em',

                            color: '#5E2075',

                            [theme.breakpoints.down('sm')]: {
                                fontSize: '3vw',
                                paddingBottom: '6.2%',

                            },

                        }}>

                        <p>Nome</p>
                        <CustomTextField valueRef={nome} />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',

                            width: '68%',
                            minWidth: '172px',
                            maxWidth: '450px',

                            paddingBottom: 'clamp(0px, 6%, 40px)',

                            fontFamily: 'Roboto',
                            fontSize: 'clamp(0px, 1.205vw, 25px)',
                            fontWeight: '400',
                            lineHeight: '1.385vw',
                            letterSpacing: '0em',

                            color: '#5E2075',

                            [theme.breakpoints.down('sm')]: {
                                fontSize: '3vw',
                                paddingBottom: '6.2%',

                            },

                        }}>

                        <p>E-mail</p>
                        <CustomTextFieldEmail valueRef={email} />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',

                            width: '68%',
                            minWidth: '172px',
                            maxWidth: '450px',

                            paddingBottom: 'clamp(0px, 6%, 40px)',

                            fontFamily: 'Roboto',
                            fontSize: 'clamp(0px, 1.205vw, 25px)',
                            fontWeight: '400',
                            lineHeight: '1.385vw',
                            letterSpacing: '0em',

                            color: '#5E2075',

                            [theme.breakpoints.down('sm')]: {
                                fontSize: '3vw',
                                paddingBottom: '6.2%',

                            },

                        }}>

                        <p>Senha</p>
                        <CustomTextFieldPassWord valueRef={senha} />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',

                            width: '68%',
                            minWidth: '172px',
                            maxWidth: '450px',

                            paddingBottom: 'clamp(0px, 6%, 40px)',

                            fontFamily: 'Roboto',
                            fontSize: 'clamp(0px, 1.205vw, 25px)',
                            fontWeight: '400',
                            lineHeight: '1.385vw',
                            letterSpacing: '0em',

                            color: '#5E2075',

                            [theme.breakpoints.down('sm')]: {
                                fontSize: '3vw',
                                paddingBottom: '6.2%',

                            },

                        }}>

                        <p>Confirmar Senha</p>
                        <CustomTextFieldPassWord valueRef={confirmarSenha} />
                    </Box>
                    <Box
                        sx={{
                            display: 'inline-flex',

                            width: '68%',
                            minWidth: '172px',
                            maxWidth: '450px',

                            [theme.breakpoints.down('sm')]: {
                                display: 'flex',
                                flexDirection: 'column',

                                alignContent: 'center',
                                alignItems: 'center',

                            },

                        }}>
                        <Box
                            sx={{
                                width: '50%',
                                marginRight: '2%',

                                [theme.breakpoints.down('sm')]: {

                                    paddingBottom: 'clamp(0px, 8%, 40px)',
                                    margin: '0px',

                                    width: '100%',

                                },

                            }}>
                            <h5 className='under'> Sexo </h5>
                            <Autocomplete
                                onChange={handleChange}
                                disablePortal
                                fullWidth
                                options={options}
                                openText='False'
                                sx={{

                                    '& .MuiInputBase-root': {
                                        height: '4.1667vw',
                                        maxHeight: '55px',

                                        maxWidth: '205px',

                                        backgroundColor: '#EFEFEF',
                                        borderRadius: '35px',

                                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

                                        [theme.breakpoints.down('sm')]: {
                                            height: '8vw',

                                            maxWidth: 'none',
                                            width: '54vw',
                                        },

                                    },

                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },

                                    '& .MuiSvgIcon-root': {
                                        color: '#5E2075',

                                    },

                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',

                                width: '50%',

                                marginLeft: '2%',

                                fontFamily: 'Roboto',
                                fontSize: 'clamp(0px, 1.205vw, 25px)',
                                fontWeight: '400',
                                lineHeight: '1.385vw',
                                letterSpacing: '0em',

                                color: '#5E2075',

                                [theme.breakpoints.down('sm')]: {
                                    width: '100%',
                                    margin: '0px',

                                    fontSize: '3vw',

                                },
                            }}
                        >
                            <p id='under'> Foto de Perfil </p>
                            <CustomImageButton setSelectedImage={setSelectedImage} />
                        </Box>

                    </Box>
                    <Box
                        sx={{

                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',

                            width: '45%',

                            paddingTop: 'clamp(0px, 8%, 45px)',

                        }}>
                        <CustomRegisterButton sendValue={Verification} />
                        <Link href="#"
                            component="button"
                            variant="body2"
                            onClick={() => {
                            navigate('/'); }}
                            sx={{
                                color: '#5E2075',
                                fontSize: 'clamp(0px, 1.2vw, 23px)',
                                textDecoration: 'none',

                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '3vw',
                                },
                            }}
                        >Já possui conta?</Link>
                    </Box>

                </Box>
            </Grid>
            <Grid item xs={12} sm={7}
                sx={{

                    display: 'block',

                    background: 'linear-gradient(180deg, #75206C 24.69%, #FE690E 100%)',
                    borderLeft: '4px solid #FE690E',

                    [theme.breakpoints.down('sm')]: {
                        display: 'flex',
                        border: 'none',

                    },

                }}

            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',

                        marginTop: '12%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: '30%',


                        fontFamily: 'Roboto',
                        fontSize: 'clamp(20px, 2.56vw, 55px)',

                        fontWeight: '400',
                        lineHeight: '3.196vw',

                        textAlign: 'center',

                        color: '#FEFCFF',

                        [theme.breakpoints.down('sm')]: {
                            color: 'rgba(100, 100, 100, 0)',
                            marginBottom: '0%',
                            img: {
                                width: '72%',
                            }

                        },

                    }}
                >
                    <img id="logo_grande" src="\images\logo_cortada1.png" alt="Logo Emakers" />
                    Venha fazer parte da <br></br>
                    maior rede social também!
                </Box>
            </Grid>
        </Grid>




    );
}


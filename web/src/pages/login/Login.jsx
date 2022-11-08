import './Login.css';
import api from '../../services/api';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { createTheme } from '@mui/material';
import { CustomTextFieldEmail } from '../../components/CustomTextFieldEmail';
import { CustomTextFieldPassWord } from '../../components/CustomTextFieldPassWord';
import { CustomLogIn } from '../../components/CustomLogIn';
import { CustomRegisterLogin } from '../../components/CustomRegisterLogin';

import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {

    const theme = createTheme();
    let navigate = useNavigate();
    var status = null
    var dados = null
    var usuario = null
    
    /*var dados = { 
        username: 'matheus',
        userimage: 'images/hehehe.jpg',
        image: 'images/hyoukaprot.png' }
    ;
    */

    // Funções específicas para as variáveis de email e senha.
    const email = useRef(), senha = useRef();
    // Função que envia os dados para o banco de dados descrito no endereço
    async function sendValue() {
        await api
            .post("http://127.0.0.1:3333/login", {
                email: email.current.value,
                password: senha.current.value,
            },).then(function (response) {
                status = response.status;
                //console.log(response.status)
                //console.log(response.data)
                dados = response.data
            })

        await api.get(`http://127.0.0.1:3333/getUsuario/${dados[1]}`, {
            headers: {
                'Authorization': `Bearer ${dados[2]}`
            }
        }).then((res) => {
            console.log(res.data)
            //console.log(usuario[0])
            usuario = res.data
        })
    }

    async function passingData() {
        await navigate(`/user/${dados[1]}`,
            {
                state:
                    usuario,dados
            });
    }

    // FUNÇÃO VERIFICAÇÃO
    // verifica se as variáveis receberam valores, caso contrário, resulta em
    // um alerta "Preencha o(s) campo(s) restante(s)!". Em seguida, é enviado o valor
    // e se os status, retornado do backend, for diferente de 200 é redirecionado para
    // a página do feed.

    // Se todas as condições são cumpridas é executado o sendValue();
    async function Verification() {
        if (email.current.value == "" || senha.current.value == "") {
            alert('Preencha o(s) campo(s) restante(s)!');
        } else {
            await sendValue();
            console.log(status)
            if (status == 200) {
                alert('Login confirmado!');
                passingData();
            } else {
                alert('Senha inválida');
            }
        }
    }


    return (
        <div>
            <Grid container component="main"
                sx={{

                    display: 'flex',
                    flexDirection: 'row',
                    [theme.breakpoints.down('sm')]: {
                        height:'100vh',
                        width:'172vw',
                        alignItems: 'center',
                        alignContent: 'center',
                    },
                }} >
                <Grid item xs={6.5}
                    sx={{
                        display: 'inline',
                        height:'100vh',

                        [theme.breakpoints.down('sm')]: {
                            display:'flex',
                            flexDirection:'column',
                            alignItems: 'center',
                            alignSelf: 'center',
                            marginLeft:'3.4vw',
                            width: '10vw',
                            height:'60vh',
                        },
                    }}>
                    <Box sx={{
                        display: 'flex',
                        height:'15vh',

                    }}>
                        <img className="logo-login" src="/images/logoEJ.png" />

                    </Box>
                    <Box sx={{

                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        alignContent: 'center',
                        justifyContent:'center',
                        height:'85%',
                        marginTop:'-7vh',

                        [theme.breakpoints.down('sm')]: {
                            height:'100%',
                        },

                    }}>
                        <div className="header">
                            <h1 className="header">Entre em Sua Conta</h1>
                        </div>

                        <div className="field2">
                            <h4 className="field">E-mail</h4>

                            <CustomTextFieldEmail valueRef={email} />
                        </div>

                        <div className="field2">
                            <h4 className="field">Senha</h4>
                            <CustomTextFieldPassWord valueRef={senha} />
                        </div>
                        <div className="field">

                            <CustomLogIn sendValue={Verification} />
                        </div>
                    </Box>

                </Grid>

                <Grid
                    item xs={7} sm={5.5}
                    sx={{
                        display:'flex',
                        flexDirection: 'column',
                        justifyContent:'center',
                        borderLeft: 'solid',
                        borderColor: ' #FE690E',
                        borderWidth: '100%',
                        background: 'linear-gradient(180deg, #75206C 44.69%, #FE690E 100%)',
                        [theme.breakpoints.down('sm')]: {

                            borderLeft: 'none',
                            borderTop: 'solid',
                            borderColor: ' #FE690E',
                            borderWidth: '100%',
                            alignSelf: 'center',
                            height: '40vh',
                        },

                    }}>
                    <h1 className='header2'>
                        Novo Aqui?
                    </h1>
                    <h1 className='subtitle1'>
                        Registre-se e venha
                    </h1>
                    <h1 className='subtitle2'>
                        fazer parte da
                    </h1>
                    <h1 className='subtitle3'>
                        maior rede social!
                    </h1>
                    <div className="bottom2">
                        <CustomRegisterLogin redirect={() => navigate('/cadastro')} />

                    </div>

                </Grid>
            </Grid>
        </div >

    )
}


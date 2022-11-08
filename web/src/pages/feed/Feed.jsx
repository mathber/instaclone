import './feed.css';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button"

import { FeedTextField } from '../../components/FeedTextField';
import { PostFeed } from '../../components/PostFeed';
import { ProfileOptionsFeed } from '../../components/ProfileOptionsFeed';
import { MobileOptions } from '../../components/MobileOptions';

import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import MenuIcon from '@mui/icons-material/Menu';

import { useState } from "react";
import { createTheme } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router-dom';

const theme = createTheme();

const postsFeed = [{ 
        username: 'matheus',
        userimage: 'images/hehehe.jpg',
        image: 'images/hyoukaprot.png',
    },
    {   
        username: 'ronaldo',
        userimage: 'images/logoEJ2.png',
        image: 'images/qrocafé2.jpg' },
    { 
        username: 'roberto',
        userimage: 'images/Blossom Large.jpg',
        image: 'images/hyouka-prot.png' },

];


export function Feed() {

    const navigate = useNavigate();
    const location = useLocation();

    const dados = location.state;
    console.log(dados);
    // Função específica para a variável imagem, no caso, selectedImage
    const [selectedImage, setSelectedImage] = useState();

    const [profileOptionsOn, setProfileOptionsOn] = useState(false);
    const profileOptionShown = event => {
        setProfileOptionsOn(current => !current);
    };
    
    const [mobileOptionsOn, setMobileOptionsOn] = useState(false);
    const mobileOptionShown = event => {
        setMobileOptionsOn(current => !current);
    };

    return (
        <Box sx={{[theme.breakpoints.down('sm')]: {
            width:'110vw', display:'unset'
        }}}>
            {/* FUNDO GRADIENTE */}
            <Box sx={{position:'absolute', width:'100%', height:'100%', margin:'0',
            background:'linear-gradient(180deg, #FF930F 1.98%, #932458 100%)'}}></Box>
            {/* RODAPÉ */}
            <Box sx={{ position:'absolute', width: '100%', top:'0', backgroundColor:'#FFBF0F',
            boxShadow: '0px 4px 4px 0px #00000040', zIndex:'1'}}>
                <Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row',
                            width: '10vw', height: '6.25vw',
                            alignItems: 'center',
                            [theme.breakpoints.down('sm')]: {
                                height:'18vw',
                            },
                        }}>
                        
                        <img id="logo-feed" src="images\logoEJ3.png" alt="Logo Emakers" />
                        {/* ÍCONE DE MENU PARA MODELO MOBILE */}
                        <MenuIcon onClick={mobileOptionShown} sx={{ opacity: '0',
                            backgroundColor: 'none', color: '#FEFEFE',
                            marginLeft: '71vw',
                            fontSize:'0',
                            [theme.breakpoints.down('sm')]: {
                                opacity: '1', fontSize:'10vw',
                                marginLeft: '41vw',
                            },
                        }}/>
                        <SearchIcon sx={{ backgroundColor: '#FEFEFE',
                            fontSize: '2.8vw',

                            marginLeft: '1vw',

                            borderRadius: '50%',
                            boxShadow: '0px 4px 4px 0px #00000040',

                            [theme.breakpoints.down('sm')]: {
                                opacity: '0',
                            },
                        }}/>
                        <PeopleIcon sx={{ backgroundColor: '#FEFEFE',
                            fontSize: '2.8vw',

                            marginLeft: '1vw',

                            borderRadius: '50%',
                            boxShadow: '0px 4px 4px 0px #00000040',
                            [theme.breakpoints.down('sm')]: {
                                opacity: '0',
                            },
                        }}/>
                        <Avatar alt="Imagem do Usuário" src={`dados:image/png;base64,${dados[0]}`}
                            onClick={profileOptionShown}
                            sx={{ alignSelf: 'center',
                                width: '3vw', height: '3vw',   

                                marginLeft: '1vw',

                                boxShadow: '0px 4px 4px 0px #00000040',
                                [theme.breakpoints.down('sm')]: {
                                    opacity: '0',
                                },
                            }}/>
                    </Box>
                    {profileOptionsOn && <ProfileOptionsFeed dados={dados}/>}
                </Box>
            </Box>
            {mobileOptionsOn && <MobileOptions dados={dados}/>}

            {/* CONTEÚDO PRINCIPAL */}
            <Box sx={{
                position:'relative',
                height: '100vh', 
            }}>
                {/* FEED */}
                <Grid sx={{paddingTop:'3vw'}}>
                    {/* CONFIGURAÇõES DO POST */}
                    <Box sx={{ display: 'flex', flexDirection: 'column',
                        width: '61vw', height: '7.6vw',
                        marginLeft: 'auto', marginRight: 'auto', marginTop:'5vw',
                        
                        background: 'linear-gradient(180deg, #FF490F 0%, #DF0D57 100%)',
                        borderRadius: '18px',
                        boxShadow: '0px 4px 4px 0px #00000080',

                        [theme.breakpoints.down('sm')]: {
                            width: '90%', height: '28vw', marginBottom:'8vw', marginTop:'20vw',
                        },
                    }}>
                        <h2 id='comando'>Faça uma postagem</h2>
                        <Box sx={{display:'flex', alignItems:'center', justifyContent:'left',
                        marginTop: '0.4vw', marginLeft:'1.5vw',
                        [theme.breakpoints.down('sm')]: {marginTop: '2.5vw'}}}>
                            <Avatar alt="Imagem do Usuário" src={`dados:image/png;base64, ${dados[0]}`}
                            sx={{width: '3vw', height: '3vw',
                            [theme.breakpoints.down('sm')]: {width: '9vw', height: '9vw'}
                            }}/>
                            <FeedTextField/>
                        </Box>
                    </Box>
                    {/* POSTS NO FEED */}
                    <Grid sx={{ width: '61vw', height: '7.3vw',
                    marginLeft: 'auto', marginRight: 'auto', marginTop: '2.5vw',
                    }}>
                        {
                        postsFeed.map((postFeed, index) => <PostFeed username={postFeed.username} 
                        userimage={postFeed.userimage}
                        image={postFeed.image} 
                        comments={postFeed.comments}
                        key={index} />)
                        }
                    </Grid>
                </Grid>
            </Box>
        </Box>
        );
}
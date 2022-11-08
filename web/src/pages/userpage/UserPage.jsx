import './UserPage.css';
import api from '../../services/api';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';

import { useState } from "react";
import { createTheme } from '@mui/material/styles';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import { ProfileOptions } from '../../components/ProfileOptions';
import { Post } from '../../components/Post';
import { MobileOptions } from '../../components/MobileOptions';
import { EditOptions } from '../../components/EditOptions';
import { MenuEdit } from '../../components/MenuEdit';


const posts = [{ image: '../images/hyoukaprot.png' },
{ image: '../images/hyouka-prot.png' },
{ image: '../images/hehehe.jpg' },
{ image: '../images/qrocafé2.jpg' },
];



const theme = createTheme();


export function UserPage() {

    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const data = location.state;
    /*var dados = { 
        id: '1',
        username: 'matheus',
        userimage: 'images/hehehe.jpg',
        image: 'images/hyoukaprot.png' }
    */
    
    async function passingData() {
        await navigate('/feed',
            {
                state:
                   //colocar oque deseja passar
                    data
            });
    }
    /*const data = ["salve", 
    {username: "matheus",
    bio: "melhor uma pedra no seu caminho do que duas no rim, beba água!"
    }
    ]*/

    // Responsável pela renderização das abas de Opção, Edição e Opção(Mobile)

    const [profileOptionsOn, setProfileOptionsOn] = useState(false);
    const [profileEditOn, setEditOptionsOn] = useState(false);
    const [mobileOptionsOn, setMobileOptionsOn] = useState(false);

    const profileOptionShown = event => {
        setProfileOptionsOn(current => !current);
    };
    const editOptionShown = event => {
        setEditOptionsOn(current => !current);
    };
    const mobileOptionShown = event => {
        setMobileOptionsOn(current => !current);
    };

    function addBio(){
        if(data[1].bio == '' || data[1].bio == null){
            return "(adicione sua biografia!)";
        } else {
            return data[1].bio;
        }
    }
    var idade;
    function addYears(){
        if(idade == null){
            return null
        } else {
            return ", " + idade;
        }
    }

    return (
        <Box
            sx={{
                width: '100%',
                height: '1vw',
                margin: '0px',

            }}>
            <Box
                sx={{
                    height: '27.34375vw',
                    backgroundImage: 'url("../images/Blossom Large.jpg")',
                    borderBottom: '0.25vw solid #FE690E',

                    backgroundSize: '100% 100%',

                    [theme.breakpoints.down('sm')]: {
                        height: '61.1vw',
                    },

                }}
            >
                {profileOptionsOn && <ProfileOptions />}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '10vw',
                        height: '6.25vw',

                        alignItems: 'center',
                    }}
                >
                    <img id="logo" src="..\images\logoEJ3.png" alt="Logo Emakers" 
                     onClick={() => passingData()}
                    />
                    <MenuIcon onClick={mobileOptionShown} sx={{
                        backgroundColor: 'none',
                        color: '#FEFEFE',

                        marginLeft: '68vw',

                        opacity: '0',

                        [theme.breakpoints.down('sm')]: {
                            marginLeft: '47vw',
                            marginTop: '10vw',
                            fontSize: '10vw',
                            opacity: '1',
                        },
                    }}
                    />
                    <SearchIcon sx={{
                        backgroundColor: '#FEFEFE',
                        fontSize: '2.8vw',

                        marginLeft: '1vw',

                        borderRadius: '50%',
                        boxShadow: '0px 4px 4px 0px #00000040',

                        [theme.breakpoints.down('sm')]: {
                            opacity: '0',
                        },
                    }}
                    />
                    <PeopleIcon sx={{
                        backgroundColor: '#FEFEFE',
                        fontSize: '2.8vw',


                        marginLeft: '1vw',

                        borderRadius: '50%',
                        boxShadow: '0px 4px 4px 0px #00000040',

                    }} />
                    <Avatar alt="Imagem do Usuário" src={`data:image/png;base64, ${data[0]}`}
                        onClick={profileOptionShown}
                        sx={{
                            alignSelf: 'center',

                            marginLeft: '1vw',

                            width: '3vw',
                            height: '3vw',

                            boxShadow: '0px 4px 4px 0px #00000040',
                            
                            '& .MuiAvatar-img': {
                                margin: '0',
                            },

                        }}
                    />
                </Box>
                {mobileOptionsOn && <MobileOptions />}

            </Box>
            <Box sx={{
                position: 'relative',
                top: '-24vw',
                [theme.breakpoints.down('sm')]: {
                    position: 'relative',
                    top: '-45vw',
                },
            }}>
                <Avatar alt="Imagem do Usuário" src={`data:image/png;base64, ${data[0]}`}
                    sx={{
                        width: '21.5vw',
                        height: '21.5vw',
                        marginLeft: '5vw',

                        top: '14vw',

                        border: '0.23vw solid #FE690E',

                        '& .MuiAvatar-img': {
                            margin: '0',
                        },

                        [theme.breakpoints.down('sm')]: {
                            position: 'relative',
                            width: '50vw',
                            height: '50vw',

                            left: '19.5vw',
                        },

                    }}
                />
                {profileEditOn && <MenuEdit editOptionShown={editOptionShown}/>}
                <EditIcon onClick={editOptionShown}
                    sx={{
                        position: 'relative',
                        top: '1vw',
                        left: '93vw',

                        backgroundColor: '#FEFEFE',
                        fontSize: '2.4vw',

                        borderRadius: '50%',
                        boxShadow: '0px 4px 4px 0px #00000040',

                        [theme.breakpoints.down('sm')]: {
                            position: 'relative',
                            fontSize: '6vw',
                            left: '64vw',
                            top: '5vw',
                        },
                    }}
                />
                <Box sx={{
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',

                    marginTop: '1vw',
                    marginLeft: '22vw',
                    marginRight: 'auto',
                    marginBottom: '5vw',

                    paddingLeft: '7vw',
                    paddingRight: '7vw',
                    paddingBottom: '1vw',

                    borderBottom: '0.3vw solid #FE690E',

                    [theme.breakpoints.down('sm')]: {
                        width: '80%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: '8vw',
                    },

                }}>
                    <h1> {data[1].username} {addYears()} </h1>
                    <h2> {addBio()} <br /> </h2>

                </Box>
                <Grid container item spacing={3}
                    sx={{

                        // FEED

                        display: 'flex',
                        flexDirection: 'row',

                        marginLeft: '10.8317vw',
                        marginRight: 'auto',

                        width: '85%',

                        [theme.breakpoints.down('sm')]: {
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginTop: '0',
                        },

                    }}>
                    {
                        posts.map((post, index) => <Post image={post.image} key={index} />)
                    }
                </Grid>
            </Box>
        </Box>
    );


}
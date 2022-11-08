import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';

import { createTheme } from '@mui/material/styles';
import { useState } from "react";


export function PostFeed(props) {

    const theme = createTheme();
    const comments =  [{
        username: 'joao',
        comment: 'que lindo!'
    },
    {   username: 'pedro',
        comment: 'show!'
    }]

    return (
        <Box sx={{ width:'48vw',
            display:'flex', flexDirection:'column',
            alignItems:'center',
            background:'linear-gradient(180deg, #FF490F 0%, #DF0D57 100%)',

            boxShadow: '0px 4px 4px #A22700', backdropFilter:'blur(5px)',
            
            borderRadius: '20px',

            marginRight:'auto', marginLeft:'auto',
            marginBottom: '2vw',

            [theme.breakpoints.down('sm')]: {
                width:'90vw', marginLeft:'-14.5vw',
                marginBottom: '5vw',
            }
        }}>
            <Box>
                {/* RODAPÉ */}
                <Box sx={{display:'flex', flexDirection:'inline', alignItems:'center',
                height:'3.5vw', marginTop:'1vw',
                paddingBottom:'0.5vw', borderBottom:'0.2vw solid #FE690E',
                [theme.breakpoints.down('sm')]: {height: '10vw'}}}>
                    <Avatar src={props.userimage} sx={{width: '3.35vw', height: '3.35vw',
                    [theme.breakpoints.down('sm')]: {width: '7vw', height: '7vw'}
                }}/>
                    <h2 id='username'>{props.username}</h2>
                </Box>
                {/* IMAGEM */}
                <Box sx={{ width: '40vw', height: '40vw',

                    backgroundImage: "url('" + props.image + "')",
                    backgroundSize: '100% 100%',
        
                    marginRight: 'auto', marginTop:'1vw',
        
                    boxShadow: '0px 4px 4px 0px #00000040',

                    [theme.breakpoints.down('sm')]: {width: '75vw', height: '75vw',
                    marginTop: '2vw', marginBottom:'2vw',}

                }}/>
                {/* INTERAÇÕES */}
                <Box sx={{marginTop:'1vw'}}>
                    <FavoriteBorderIcon sx={{fontSize:'3vw', marginRight:'0.6vw', color:'#FEFEFE',
                    [theme.breakpoints.down('sm')]: {fontSize:'6vw'}}}/>
                    <ChatIcon sx={{fontSize:'3vw', marginRight:'0.6vw', color:'#FEFEFE',
                    [theme.breakpoints.down('sm')]: {fontSize:'6vw'}}}/>
                    <ShareIcon sx={{fontSize:'3vw', color:'#FEFEFE',
                    [theme.breakpoints.down('sm')]: {fontSize:'6vw'}}}/>
                </Box>
                {/* COMENTÁRIOS */}
                <Box>
                    {
                        comments.map((comment, index) => <Box key={index} sx={{display:'flex'}}>
                            <h2 id='commentUsername'>{comment.username}</h2>
                            <h2 id='comment'>{comment.comment}</h2>
                        </Box>)
                    }
                </Box>
                {/* FAÇA SEU COMENTÁRIO */}
                <Box sx={{borderTop:'0.15vw solid #FE690E', margin:'0.9vw 0'}}>
                    <Box sx={{marginTop:'0.5vw', display:'flex', alignContent:'center'}}>
                        <EditIcon sx={{fontSize:'3vw', color:'#FEFEFE',
                        [theme.breakpoints.down('sm')]: {fontSize:'6vw'}}}/>
                        <TextField sx={{width:'31vw', marginLeft:'1vw', marginRight:'1vw',
                            input: {
                                fontSize: '1.8vw', color:'#FEFEFE',
                                fontWeight: '200',
                                paddingTop: '0.4vw'
                            },
                            [theme.breakpoints.down('sm')]: { width:'60vw',
                            input: { fontSize: '4vw'},    
                        }
                        }}
                            placeholder="Faça um comentário!"
                            variant='standard'
                            InputProps={{
                                disableUnderline: true,
                            }}/>
                        <SendIcon sx={{fontSize: '3vw', color:'#FEFEFE',
                        [theme.breakpoints.down('sm')]: {fontSize:'6vw'}}}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

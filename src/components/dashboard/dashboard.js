import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Sidenav from './sidenav';
import { Box } from '@mui/system';
import {AppBar, Button} from '@mui/material';
import Navbar from './navbar';
import { Grid,Card, CardContent
 } from '@mui/material';
 import { useHistory } from 'react-router-dom';

 const useStyles= makeStyles((theme)=>({
    gradient:{
        background:"#bb0000",
   
    },
    gradientLight:{
        background :"rgb(112, 195, 205)",
        background: "#eceff1"
    },
    iconStyle:{
        marginTop: "20px",
        marginLeft:"20px",
        color:"#fff",
    },
    bgcolor:{
        minHeight: "100vh",
        background: "#eceff1",
        background: "#eceff1",

    },
    home:{
        marginTop: "20px"
    },
    app:{
        backgroundColor:"#bb0000" ,
        color:"white",
        padding:'17px',
        borderRadius:'5px',
        fontSize:"25px",
    },
    btn:{
        justifyContent:"center",
        alignItems:"center",
      },
}));


export default function Dboard(){
     const classes= useStyles();
     const history=useHistory();
    return(
        <>
        <div className={classes.bgcolor}>
        <Navbar />
        <Box height={70}/>
         <Box sx={{ display: 'flex' }}>
             <Sidenav/>
       
         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <Grid container spacing={2}>
               <Grid item xs={8}>
               <Stack spacing={4} direction="row">
               <Card sx={{ minWidth: 33 +"%" ,height:150,  background:"linear-gradient(0deg, rgba(187,0,0,0.5998774509803921) 0%, rgba(48,58,46,0.6923144257703081) 100%)"}}  className={classes.gradient}>
                <CardContent>
                    <div className={classes.iconStyle}>
                        <MailOutlineIcon/>
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color:"#fff"}}>
                    SMS This Week
                    </Typography>
                    <Typography gutterBottom variant="body3" component="div" color="white">
                    Start campaign
                    </Typography>
                </CardContent> 
            </Card>

            <Card sx={{ minWidth: 33 +"%" ,height:150, background:"linear-gradient(0deg, rgba(187,0,0,0.5998774509803921) 0%, rgba(48,58,46,0.6923144257703081) 100%)"}} className={classes.gradientLight}>
                <CardContent>
                    <div className={classes.iconStyle}>
                        <MailOutlineIcon/>
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color:"white"}}>
                    SMS This Week
                    </Typography>
                    <Typography gutterBottom variant="body3" component="div" sx={{color:"white"}}>
                    Start campaign
                    </Typography>
                </CardContent> 
            </Card>
            <Card sx={{ minWidth: 33 +"%" ,height:150, background:"linear-gradient(0deg, rgba(187,0,0,0.5998774509803921) 0%, rgba(48,58,46,0.6923144257703081) 100%)"}} className={classes.gradient}>
                <CardContent>
                <div className={classes.iconStyle}>
                        <MailOutlineIcon/>
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color:"white"}}>
                    SMS This Week
                    </Typography>
                    <Typography gutterBottom variant="body3" component="div" sx={{color:"white"}}>
                    Start campaign
                    </Typography>
                </CardContent> 
            </Card>
            <Card sx={{ minWidth: 33 +"%" ,height:150, background:"linear-gradient(0deg, rgba(187,0,0,0.5998774509803921) 0%, rgba(48,58,46,0.6923144257703081) 100%)" }} className={classes.gradientLight}>
                <CardContent>
                <div className={classes.iconStyle}>
                        <MailOutlineIcon/>
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color:"white"}}>
                    SMS This Week
                    </Typography>
                    <Typography gutterBottom variant="body3" component="div" sx={{color:"white"}}>
                    Start campaign
                    </Typography>
                </CardContent> 
            </Card> 
            </Stack> 
            <Stack spacing={1} className={classes.home}  direction="row">
                                    <Card sx={{ minWidth: 146 + "%", height: 450, background: "" }} className={classes.gradient}>
                                        <CardContent>
                                            <Box>
                                            <div color='red'>
                                                <AppBar position='static' variant='h1' className={classes.app}><b>Follow The Given Below Instructions:</b></AppBar>
                                            </div>
                                            
                                            <Typography variant=" subtitle2:h2" noWrapcomponent="div" sx={{ display: { xs: 'none', sm: 'block',padding:'15px',margin:'25px' } }}>
                                            <Stack margin={2} direction="column">
                                            Step 1: Click on the proceed button given below.
                                            </Stack>
                                            <Stack margin={2} direction="column">
                                            Step 2: Choose your plan and proceed.
                                            </Stack> 
                                            <Stack margin={2} direction="column">
                                            Step 3: Now fill the details in the form and make payment.
                                            </Stack>
                                            <Stack margin={2} direction="column">
                                            Step 4: After successful payment you will get otp on your registered number. 
                                            </Stack>
                                            <Stack margin={2} direction="column">
                                            Step 5: Enter that given otp and you will be authorized user.
                                            </Stack>
                                            
                                                     </Typography>
                                                     <Stack direction="row" spacing={1}  className={classes.btn}  >
      <Button  variant="contained" onClick={()=>{history.push('/pricing')}}>Proceed</Button>
    </Stack>
             
                                                   
          </Box>
                                        </CardContent>

                                    </Card>
                                            </Stack>
         </Grid>
      
    </Grid>
    

         <Box height={20}/>
       <Grid container spacing={2} direction="row">
        <Grid item xs={8}>
        </Grid>
        <Grid item xs={4}>
        </Grid> 
      </Grid>
       </Box>

    </Box>
    {/* <div>
        <Bottom/>
    </div> */}
    </div>
        
        </>
    )
}
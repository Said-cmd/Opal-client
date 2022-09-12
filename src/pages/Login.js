import React from "react";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    control: {
        padding: theme.spacing(2),
    },
    logo: {
        padding: theme.spacing(2)
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
      },
      text: {
        padding: theme.spacing(2)
      }
}));

function Login() {
    const classes = useStyles();
    const history = useHistory()
    return(
        <div>
           <Grid
            sx={{ height: '100vh', width: '100vw', backgroundColor: '#fff' }}
            className='home-container'
            alignContent='center'
            justifyContent='center'>
            <Box
                sx={{ height: '100vh', width: '100vw', p: 3 }}
                className='flex column'>
                <Box className='flex'>
                <Avatar 
                src="/logo.png"
                className={classes.large}
                />
                <Typography variant='h1' component='h1' className={classes.text}>
                    Opal
                </Typography>
                </Box>
                <Box className='flex column'>
                <Typography component='h2' variant='h6' align='center' className={classes.text}>
                    A tool to organise your transactions.
                </Typography>
                <Typography
                className={classes.text}
                >
                </Typography>
                <Button
                    onClick={() => history.push('/account')}
                    variant='contained'
                    size='large'
                    className='login-button'
                    color='secondary'>
                    Login
                </Button>
                </Box>
            </Box>
    </Grid>
        </div>
    )
}

export default Login;
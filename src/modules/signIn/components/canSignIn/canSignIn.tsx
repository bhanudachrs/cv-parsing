import React,{useEffect} from 'react'
import { MainContainer } from '../../../../shared/styles/styled'
import history from '../../../app/components/history'
import { Grid, TextField, Card, Typography, Container } from "@mui/material"
import { makeStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button, Label, CardContent,ErrText } from '../../style'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    InputMr:{
        margin:theme.spacing(2),
        padding:theme.spacing(3) 
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    card:{
        height: "auto", 
        width: "500px",
         minWidth: "350px",
        maxWidth: "500px",
        margin:theme.spacing(10)
    },
    nav:{
        textAlign:"center"
    },
    
  }));

const CanSignIn = () => {

    const classes = useStyles();

    const [mode, setMode] = React.useState('Login')
    const [UserData, setUserData] = React.useState({
        email: "",
        username: "",
        full_name: "",
        password: "",
        cPassword: ""
    })
    const [UserDataErr, setUserDataErr] = React.useState({
        email: "",
        username: "",
        full_name: "",
        password: "",
        cPassword: ""
    })
    // useEffect(()=>{
    //     ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
    //         console.log(value)
    //         if (value !== UserData.password) {
    //             return false;
    //         }
    //         return true;
    //     });
    //     return()=>{
    //             ValidatorForm.removeValidationRule('isPasswordMatch');
    //                 }
    // },[])
    const handleSubmit = () => {
        if (mode == 'Register') {
            console.log(UserData)
            if(UserData.password == UserData.cPassword){
                localStorage.setItem('auth-token','qwertyuioplkjhgfdszxcvbnmmbvc')
                history.push("/dashboard")
            }
        }
        if (mode == 'Login') {
            console.log(UserData)
            localStorage.setItem('auth-token','qwertyuioplkjhgfdszxcvbnmmbvc')
            history.push("/dashboard")
        }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     
        let name = e.target.name
        let value = e.target.value
        let data = { [name]: value }
        setUserData(prevState => {
            return { ...prevState, ...data };
        });

    }

    return (
        <MainContainer>
            <Container>
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                >
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography fontWeight="bolder" margin="60px 10px" textAlign="center" variant="h4" color={"#00D7E7"}>
                                Hello Candidate .. !!
                            </Typography>
                            {mode == 'Register' ?
                                <ValidatorForm
                                    useRef="form"
                                    onSubmit={handleSubmit}
                                    onError={(errors: any) => console.log(errors)}
                                >

                                    <Grid item xs={12} className={classes.InputMr} >
                                        <Label>username</Label>
                                        <TextValidator

                                            onChange={handleChange}
                                            name="username"
                                            value={UserData.username}
                                            required
                                            validators={['required']}
                                            errorMessages={['this field is required']}
                                            variant="standard"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} className={classes.InputMr} >
                                        <Label>Email</Label>
                                        <TextValidator
                                            onChange={handleChange}
                                            name="email"
                                            value={UserData.email}
                                            required
                                            validators={['required']}
                                            errorMessages={['this field is required']}
                                            variant="standard"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} className={classes.InputMr}>
                                        <Label >Password</Label>
                                        <TextValidator
                                   
                                            onChange={handleChange}
                                            name="password"
                                            type="password"
                                            required
                                            validators={['minNumber:0', 'maxNumber:255', 'matchRegexp:^[0-9]$']}
                                            // errorMessages={['password is required']}
                                            value={UserData.password}
                                            variant="standard"
                                            fullWidth
                                        />
                                        {/* <ErrText>{UserData.password.length < 8 ? "password must contain 8 character":""}</ErrText> */}
                                    </Grid>
                                    <Grid item xs={12} className={classes.InputMr}>
                                        <Label >Confirm Password</Label>
                                      
                                        <TextValidator
                                            onChange={handleChange}
                                            name="cPassword"
                                            type="password"
                                            variant="standard"
                                            fullWidth
                                            validators={['required']}
                                            errorMessages={['this field is required']}
                                            value={UserData.cPassword}
                                        />
                                       {UserData.password != UserData.cPassword ?  <ErrText>Password mismatched</ErrText>:""}
                                    </Grid>
                                    <Grid item xs={12} className={classes.InputMr}>
                                        <Button type="submit" 
                                        >
                                            Register
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.InputMr}>
                                        <p className={classes.nav}>Already Registred..? <span onClick={() => setMode('Login')} >Login</span> </p>
                                    </Grid>
                                </ValidatorForm> : <ValidatorForm
                                    useRef="form"
                                    onSubmit={handleSubmit}
                                    onError={(errors: any) => console.log(errors)}
                                >
                                    <Grid item xs={12} className={classes.InputMr} >
                                        <Label color={"#00D7E7"}>Email</Label>
                                        <TextValidator
                                            onChange={handleChange}
                                            name="email"
                                            value={UserData.email}
                                            required
                                            validators={['required', 'isEmail']}
                                            errorMessages={['this field is required', 'email is not valid']}
                                            variant="standard"
                                            fullWidth
                                        />

                                    </Grid>
                                    <Grid item xs={12} className={classes.InputMr}>
                                        <Label color={"#00D7E7"}>Password</Label>
                                        <TextValidator

                                            onChange={handleChange}
                                            name="password"
                                            type="password"
                                            // required
                                            validators={['minNumber:8']}
                                            errorMessages={['password must contain 8 charcter']}
                                            value={UserData.password}
                                            variant="standard"
                                            fullWidth
                                        />
                                    </Grid>

                                    <Grid item xs={12} className={classes.InputMr}>
                                        <Button type="submit" 
                                        >
                                            Login
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.InputMr}>
                                        <p className={classes.nav}>click here to? <span  onClick={() => {
                                            setMode('Register')
                                    }}>Register</span> </p>
                                    </Grid>
                                </ValidatorForm>}

                        </CardContent>

                    </Card>
                </Grid>

            </Container>
        </MainContainer>
    )
}

export default CanSignIn
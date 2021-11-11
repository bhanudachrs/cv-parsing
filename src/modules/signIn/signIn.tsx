import React from 'react'
import { Container, Grid, TextField, Card, Typography ,
    FormControlLabel,
    Checkbox,
    FormLabel,
    FormControl,
    FormHelperText,
    RadioGroup,
    Radio,
    InputLabel,
    Switch,
    Select,
    MenuItem,
    Button} from "@mui/material"
    import { Link } from 'react-router-dom';
    import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useForm, Controller } from "react-hook-form";
// import {m} from "react-material-ui-form-validator"
import { MainContainer } from '../../shared/styles/styled'
const SignIn = () => {

const [UserData,setUserData]=React.useState({
email:String,
password:String
})

    // const classes = useStyles();
//   const { register, handleSubmit, control} = useForm();
//   const onSubmit = (data:any) => console.log(data);
//   console.log(errors);

    const handleSubmit = () => {

    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {   
        let name:any= e.target.name
        let value:any = e.target.value
        // setUserData([...UserData,{[name]:value}])
    }
    return(<MainContainer>
        <img src="https://image.shutterstock.com/image-photo/office-meeting-blur-background-business-260nw-1476238367.jpg" style={{minWidth:"100vh",height:"130vh",opacity:"70%",position: "fixed"}}/>

<Grid
    container
    style={{ marginTop: "80px",position:"fixed",justifyContent:"center" ,alignItems:"center"}}

    >
    <Card style={{
        height: "500px", width: "350px",
        maxWidth: "500px", margin: "20px",background: "rgba(0,0,0,0.5)"
    }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h5" color={"#F3B723"} style={{ fontWeight: "bolder", margin: "30px 0px" }}>
                Login
            </Typography>
        </div>
        <ValidatorForm
            useRef="form"
            onSubmit={handleSubmit}
            onError={(errors:any )=> console.log(errors)}
        >
            <Grid item xs={12} style={{ margin: "40px 25px" }}>
                <label style={{ color: "#F3B723" }}>Email</label>
                <TextValidator
                 style={{
                    color: "#ffffff",
                    background: "transparent",
                    border: "none",
                    // borderBottom: "1px solid #ffffff",
                    outline: "none",
                    height: "40px",
                    fontSize: "16px"}}
                    onChange={handleChange}
                    // className={inputBg}
                    name="email"
                    value={UserData.email}
                    required
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                    variant="standard"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} style={{ margin: "40px 25px" }}>
                <label style={{ color: "#F3B723" }}>Password</label>
                <TextValidator
                style={{
                    color: "#ffffff",
                    background: "transparent",
                    border: "none",
                    // borderBottom: "1px solid #ffffff",
                    outline: "none",
                    height: "40px",
                    fontSize: "16px"}}
                    onChange={handleChange}
                    // className={inputBg}
                    name="password"
                    type="password"
                    required
                    validators={['required']}
                    errorMessages={['this field is required']}
                    value={UserData.password}
                    variant="standard"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} style={{ margin: "40px 25px" }}>
                <Button type="submit" style={{ backgroundColor: "#F3B723", color: "black" }} variant="contained" fullWidth >
                    Login
                </Button>
            </Grid>
            <Grid item xs={12} style={{ margin: "50px 25px" }}>
                <p style={{ textAlign: "center", color: "GrayText" }}>Are you HR...? <Link to="/">Login</Link> </p>
            </Grid>
        </ValidatorForm>
    </Card>
</Grid> 
       </MainContainer>)
}

export default SignIn
import * as React from 'react';
import {  GlobalContext } from './GlobalContextProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const LogIn = () => {
    const {username, password} = React.useContext(GlobalContext);
    const [userInput, setUser] = React.useState("");
    const [passwordInput, setPassword] = React.useState("");
    return <>
    <div>
        <div>
            <TextField id="standard-basic" label="Username" onChange={(e) => setUser(e.target.value)} />
        </div>
        <div>
            <TextField id="standard-basic" label="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <br/>
    <Button variant="outlined" color="primary" 
        onClick={() => {if(username === userInput && password === passwordInput){
            console.log("Login exitoso");
             }else{
            console.log("Acceso denegado");
    }}}>Log in</Button>
    </div>
    </>
    };

    
export default LogIn;
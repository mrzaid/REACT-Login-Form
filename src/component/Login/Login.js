import React, { Component } from 'react';
import { Input } from '../Input/Input';
import './Login.css';
import {validateForm} from './helper';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { id: 0, name: "admin", pass: "admin" },
                { id: 1, name: "irfan", pass: "1234567" },
                { id: 2, name: "aamir", pass: "aamir" }
            ],
            isAuth: false,
            currentUser: null,
            errors:{
                hasError: false,
                errorsObj: {}, ///{name:{message:'malik ustaad'}}
                                   //{errors.errorObj[name].message}
                                   //{errors.errorsObj[name]
                serverError:''     
                                },
            name : "",
            

        }
        if(localStorage.getItem("currentUser")){
this.props.history.push("/dashboard")
        }
    }
    // render kay bahar ek func banatay thay and nichay call karta thay 
    // so now we are making a dummy function
//event handler

// validate  = ()=> {  //for checking info in forum
//     const {errors,name,pass} = this.state;
//     if(name.length<=3){
//         errors.hasError=true
//                  //input js mein name khela hai tou name imp hai
//                  //name yahan undefine hai code phateiga
// errors.errorsObj["name"] ?                  
// //pehlay say mojoud hoga tou concatenate kareiga
// errors.errorsObj["name"].message+="Name Can Not Be Less Than 4 Characters":
// errors.errorsObj["name"]={message:"Name Can Not Be Less Than 4 Characters "}
// //agar first time araha tou yeh chalayga
// //undefine ko object de diya takay badmein .message kardein
//     // this.setState({errors}); //state update kardi
//     }
//     // console.log(errors);
// if(name.indexOf("a") !== 0 ){
// errors.hasError=true
// errors.errorsObj["name"] ?                  
// errors.errorsObj["name"].message+=`Name Shoud start with "z" \n`:
// errors.errorsObj["name"]={message:`Name Shoud start with "z" \n`}
// }    
// //method1// return errors.hasError ? errors :{
// //     hasError: false,
// //     errorsObj: {},
// //     serverError:''
// // }     
// return errors }


//we will do this in helper.js
onChange=(ev)=>{
    const {errors,name,pass} = this.state
    this.setState({
        [ev.target.name]:ev.target.value,
        errors:validateForm("each", {name ,pass},
        ev.target.name ,errors)
    })
}

onSubmit=(ev)=>{
ev.preventDefault();
const {users,errors,name,pass} = this.state; //users uthaye from users
const validate = validateForm("all", {name,pass},);
// console.log(validate);

if (validate.hasError) {
    this.setState(
{    errors : validate}
    )
    return; //agay code ni jayega
}

//this is serverAPI caller
var currentUser = users.filter( (user)=>{
    return user.name === name && user.pass === pass
} )
if (currentUser.length){
    // this.setState({currentUser:currentUser[0]}) curentuser mein value bhardi thi
    localStorage.setItem("currentUser",JSON.stringify(currentUser[0]))
    // JSON.parse(localStorage.getItem("currentUser")
    this.props.history.push({pathname:"/dashboard",state:{isAuth:true} } )
}
//server say error
else{
    errors.serverError = "WRONG CREDENTIALS"
    this.setState({errors })
    //set state is liye karaya dubara render chalayega
    //  agar error hoga tou ussay print karwado
    return;
}

}
render() {

             //props ko state kay sath bind karwatay hain
        const {name,errors,pass} = this.state;
        // console.log(errors);
        
        return (
            <div>            
                {/* onsubmit pay event bind and onsubmit call kardiya aur func render say abahar    */}
            <div className="login-form-wrapper">
                
            <form onSubmit={(ev)=>this.onSubmit(ev)}>
            <h1>REACT LOGIN FORM</h1>
        {errors.serverError && <p> 
            <strong className="errors">{errors.serverError}</strong></p>
            }
                <Input
                type = 'text'
                value={name}
                name='name'
                label="Username"
                id='name'
                placeholder='ENTER YOUR NAME HERE'
                onChange={(ev)=>this.onChange(ev)}
                // onChange =
                // {(ev)=>this.setState({[ev.target.name]:ev.target.value})}
                errors={errors}
                />
                  <Input
                type = 'password'
                value={pass}
                name='pass'
                label="Password"
                id='pass'
                placeholder='ENTER YOUR Password HERE'
                // onChange =
                /* {(ev)=>this.setState({[ev.target.name]:ev.target.value})} */
                onChange={(ev)=>this.onChange(ev)}
                errors={errors}
                />
                <Input
                type= "submit"
                value="Login"
                name="my-login-btn"
                id="my-login-btn"
                
                />
                </form>
                </div>
            </div>
        );
    }
}

export default Login;
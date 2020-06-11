import React, { Component } from 'react';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentUser:JSON.parse(localStorage.getItem("currentUser"))
         }
         //pata nawe
        //  if(this.props.localStorage.state){
        //  if(!this.props.localStorage.state.isAuth){
        //      this.props.history.push("/")
        //  }
        // }else{
        //     this.props.history.push("/")
        // }
    }
    render() { 
        return ( 
<div>
    Dashboard
</div>
         );
    };
}
 
export default Dashboard;
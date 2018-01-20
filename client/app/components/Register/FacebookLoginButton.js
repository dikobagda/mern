import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
 
class FbLogin extends React.Component {
    responseFacebook(response) {
       console.log(response);
    }
    
    render() {
        return (
            <FacebookLogin
                appId="1870695736544311"
                autoLoad={false}
                fields="name,email,picture"
                callback={this.responseFacebook}
                cssClass="ui facebook button sosmed"
            >
                <button className="ui facebook button sosmed"> 
                    <i className="facebook icon"></i> | &nbsp; Login with Facebook 
                </button>
            </FacebookLogin>
        )
    }
}


export default FbLogin
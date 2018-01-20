
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
 
class GLogin extends React.Component {
    responseGoogle(response) {
       console.log(response);
    }
    
    render() {
        return (
            <GoogleLogin
                clientId="438557433153-gm9p4sococ391iuumgl16esmriddc4qc.apps.googleusercontent.com"
                className="ui google plus button sosmed"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
            >
                <i className="google plus icon"></i> | &nbsp; Login with Google 
            </GoogleLogin>
        )
    }
}


export default GLogin
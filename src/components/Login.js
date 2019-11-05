import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';

const Login = () => {
  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      <div style={{ margin: 'auto' , textAlign:'center'}}>
        <Input style={{marginBottom:'30px'}} placeholder='Username' />
        <Input.Password style={{marginBottom:'30px'}} placeholder='Password' />
        <Link style={{marginBottom:'30px'}} to='/List'>
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;

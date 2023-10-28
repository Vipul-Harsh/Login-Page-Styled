import React from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://wallpapercave.com/wp/wp2133118.jpg");
`;

const LoginForm = styled.form`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80%;
`;

const Title = styled.h2`
  font-size: 24px;
  letter-spacing: 10px;
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

const Profile = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Round = styled.div`
  height: 100%;
  width: 40%;
  border-radius: 50%;
  background-image: url('https://www.nicepng.com/png/full/128-1280406_user-icon-png.png');
  background-size: 100%;
background-repeat:no-repeat;
`;

const Input = styled.input`
  width: 80%;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  padding: 10px;
  margin: 8px 0;
  border: none;
  outline: none;
  border-radius: 4px;
  ::placeholder {
    color: white;
  }
`;

const Forget = styled.div`
  height: 5%;
  width: 85%;
  padding: 10px;
  text-align: right;
`;

const Button = styled.button`
  width: 85%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Link = styled.a`
  color: #333;
`;

const LineAfterButton = styled.div`
  display: flex;
  width: 85%;
  align-items: center;
  margin: 20px 0;
`;

const Line = styled.hr`
  flex: 1;
  border: none;
  border-top: 1px solid #ccc;
`;

const OrText = styled.span`
  margin: 0 10px;
  color: #333;
`;

const Box = styled.div`
  height: 15%;
  width: 85%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Circle = styled.div`
  height: 100%;
  width: 25%;
  border-radius: 50%;
  background-image: url('https://sguru.org/wp-content/uploads/2018/02/Facebook-PNG-Image-71244.png');
  background-size: 101%;
  background-repeat: no-repeat;
`;

const Circle1 = styled.div`
  height: 100%;
  width: 25%;
  border-radius: 50%;
  background-image: url('https://fitnessbydaanish.files.wordpress.com/2020/02/google-512.png');
  background-size: 100%;
  background-repeat: no-repeat;
`;

const Circle2 = styled.div`
  height: 100%;
  width: 25%;
  border-radius: 50%;
  background-image: url('https://th.bing.com/th/id/OIP.ho1dc1a3VpPFl1Fy3pv5vAHaHZ?pid=ImgDet&rs=1');
  background-size: 100%;
  background-repeat: no-repeat;
`;

const Login = () => {
  return (
    <LoginContainer>
      <LoginForm>
        <Title>LOGIN FORM</Title>
        <Profile>
          <Round />
        </Profile>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Forget><Link>Forget your password?</Link></Forget>
        <Button type="submit">Login</Button>
        <LineAfterButton>
          <Line />
          <OrText>OR</OrText>
          <Line />
        </LineAfterButton>
        <Box>
          <Circle></Circle>
          <Circle1></Circle1>
          <Circle2></Circle2>
        </Box>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;

import styled, { keyframes } from "styled-components";

const BreathAndJump = keyframes`
    0%{
        height:95px;
        transform:translateY(0);
    }
    20%{
        height:100px;
        transform:translateY(-5px);
    }
    40%{
        height:95px;
        transform:translateY(0);
    }
    60%{
        height:100px;
        transform:translateY(-5px);
    }
    70%{
        height:100px;
        transform:translateY(-5px);
    }
    80%{
        height:95px;
        transform:translateY(0);
    }
    90%{
        height:100px;
        transform:translateY(-5px);
    }
    100%{
        height:95px;
        transform:translateY(0);
    }
`;

const Blink = keyframes`
    0%{
        transform:scale(1, 0.05) 
    },
    5%{
        transform:scale(1,1)
    }
    

    95%{
        
        transform: scale(1,1)
    }
    100%{
    
        transform:scale(1,0.05) 
    }
`;
const Container = styled.div`
  position: relative;
`;
const Head = styled.div`
  height: 95px;
  width: 110px;
  border-radius: 50%;
  box-shadow: 0 0 5px #fff;
  animation: ${BreathAndJump} 3s linear infinite;
  background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
  background-blend-mode: multiply, multiply;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  position: relative;
  overflow: hidden;
  padding: 10px;
`;
const Len = styled.div`
  flex: 1 1 0;
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 8px;
`;
const Eyes = styled.div`
  width: 20px;
  height: 25px;
  background: #f5f5f5;
  box-shadow: 0 0 12px #f5f5f5;
  border-radius: 40%;
  margin-top: 20px;
  position: relative;

  animation: ${Blink} 5s linear infinite;
`;
const Robot = () => {
  return (
    <Container>
      <Head className="w-48 h-48 rounded-full">
        <Len>
          <Eyes></Eyes>
          <Eyes></Eyes>
        </Len>
      </Head>
    </Container>
  );
};

export default Robot;

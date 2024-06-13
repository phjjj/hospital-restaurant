import styled from "styled-components";
import Title from "../components/common/Title";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import homeImg from "/public/img/home.png";

function Home() {
  return (
    <HomeStyle>
      <Title size="large" color="primary">
        병원맛집
      </Title>
      <div className="img">
        <img src={homeImg} />
      </div>
      <Link to="/select">
        <Button size="large" schema="primary">
          시작하기
        </Button>
      </Link>
    </HomeStyle>
  );
}
const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;

  .img {
    animation: floating 3s ease-in-out infinite;
    @keyframes floating {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-50px);
      }
      100% {
        transform: translateY(0);
      }
    }

    width: 305px;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export default Home;

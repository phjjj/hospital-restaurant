import styled from "styled-components";
import Title from "../components/common/Title";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <HomeStyle>
      <Title size="large" color="primary">
        병원맛집
      </Title>
      <div className="img">
        <img src={"/src/assets/img/home.png"} />
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
  height: 100vh;
  .img {
    width: 305px;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export default Home;

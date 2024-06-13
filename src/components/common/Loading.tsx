import styled from "styled-components";
import Title from "./Title";
import LoadingImg from "../../assets/img/spinner.gif";

function Loading() {
  return (
    <LoadingStyle>
      <div className="img">
        <img src={LoadingImg} />
      </div>
      <div className="loading-text">
        <Title size="small" color="primary">
          병원 맛집
        </Title>
        <p>데이터를 불러오는 중입니다...</p>
      </div>
    </LoadingStyle>
  );
}
const LoadingStyle = styled.div`
  .loading-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export default Loading;

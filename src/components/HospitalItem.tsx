import styled from "styled-components";
import { Hospital } from "../pages/Result";
import Title from "./common/Title";

interface Props {
  hospital: Hospital;
}
const medal = ["🥇", "🥈", "🥉"];

function HospitalItem({ hospital }: Props) {
  return (
    <HospitalItemStyle>
      <div className="info">
        <Title size="small" color="primary">
          영업중
        </Title>
        <h1 className="hospital-name">{hospital.name}</h1>
        <span>{hospital.distance}</span>
        <div className="img">
          <img src="/src/assets/img/star.png" />
        </div>
        <span>{hospital.grade}</span>
        <span className="medal">{medal[hospital.rank - 1]}</span>
      </div>

      <div className="info">
        <h1>상세 주소</h1>
        <span>{hospital.location}</span>
      </div>
    </HospitalItemStyle>
  );
}
const HospitalItemStyle = styled.li`
  position: relative;
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 19px;
  .info {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  h1 {
    font-size: 1.1rem;
    font-weight: 700;
  }

  .img {
    width: 20px;
    height: auto;
    img {
      width: 100%;
    }
  }
  .medal {
    position: absolute;
    font-size: 2.8rem;
    right: 10px;
    top: -8px;
  }
`;

export default HospitalItem;

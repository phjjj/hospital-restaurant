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
        <label>영업중</label>
        <h4>
          {hospital.name} {hospital.distance}
        </h4>

        <div className="grade">
          <div className="img">
            <img src="/src/assets/img/star.png" />
          </div>
          <span>{hospital.grade}</span>
        </div>

        <span className="medal">{medal[hospital.rank - 1]}</span>
      </div>

      <div className="address">
        <span>상세 주소</span>
        <p>{hospital.location}</p>
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
  padding: 20px;
  width: 100%;
  gap: 10px;
  // 애니베이션
  transition: 0.3s;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .info {
    display: flex;
    align-items: center;
    gap: 20px;
    @media screen and (max-width: 400px) {
      gap: 10px;
    }

    label {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
    }
    .grade {
      display: flex;
      gap: 5px;
      font-weight: 700;
      .img {
        width: 20px;
        height: auto;
        img {
          width: 100%;
        }
      }
    }
  }
  .address {
    display: flex;
    span {
      white-space: nowrap;
      font-weight: 700;
    }
    font-size: 0.9rem;
    gap: 5px;
    color: #6c757d;
  }

  .medal {
    position: absolute;
    font-size: 2.5rem;
    right: 10px;
    top: -8px;
  }
`;

export default HospitalItem;

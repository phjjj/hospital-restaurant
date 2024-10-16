"use client";
import styled from "styled-components";
import { FormatHospital } from "../../_model/hospital.model";
import HospitalDetail from "./HospitalDetail";
import { Suspense, useState } from "react";
import Image from "next/image";
import starPng from "../../../../public/images/star.png";

interface Props {
  hospital: FormatHospital;
}
const medal = ["🥇", "🥈", "🥉"];

function HospitalItem({ hospital }: Props) {
  const [modal, setModal] = useState(false);

  const onClickItem = () => {
    setModal(true);
  };

  return (
    <>
      {modal && (
        <Suspense fallback={<></>}>
          <HospitalDetail hospital={hospital} setModal={setModal} />
        </Suspense>
      )}
      <HospitalItemStyle onClick={onClickItem}>
        <div className='info'>
          <h4>
            {hospital.yadmNm} {hospital.distance}
          </h4>

          <div className='grade'>
            <div className='img'>
              <Image src={starPng} alt='star' width={20} />
            </div>
            <span>{hospital.rating}</span>
          </div>

          {hospital.rank && (
            <div className='medal'>{medal[hospital.rank - 1]}</div>
          )}
        </div>

        <div className='address'>
          <span>상세 주소</span>
          <p>{hospital.addr}</p>
        </div>
      </HospitalItemStyle>
      {/* <Map /> */}
    </>
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

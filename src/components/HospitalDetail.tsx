import styled from "styled-components";
import {
  Container as MapDiv,
  Marker,
  NaverMap,
  useNavermaps,
} from "react-naver-maps";
import Modal from "./common/Modal";
import { FormatHospital } from "../model/hospital.model";

interface Props {
  setModal: (value: boolean) => void;
  hospital: FormatHospital;
}

function HospitalDetail({ setModal, hospital }: Props) {
  const navermaps = useNavermaps();

  return (
    <Modal setModal={setModal}>
      <HospitalDetailStyle>
        <div className="map">
          <MapDiv
            style={{
              width: "100%",
              height: "100%",
            }}>
            <NaverMap
              defaultCenter={new navermaps.LatLng(hospital.YPos, hospital.XPos)}
              defaultZoom={15}>
              <Marker
                defaultPosition={
                  new navermaps.LatLng(hospital.YPos, hospital.XPos)
                }
              />
            </NaverMap>
          </MapDiv>
        </div>

        <div className="info">
          <div>
            <h3>병원 정보</h3>
            <p>{hospital.yadmNm}</p>
            <p>{hospital.addr}</p>
            <p>{hospital.telno}</p>
          </div>
          <div>
            <div className="review-title">
              <div className="img">
                <img src={"/src/assets/img/gpt.png"} />
              </div>
              <h3>GPT 의견</h3>
            </div>
            <p>{hospital.review}</p>
          </div>
        </div>
      </HospitalDetailStyle>
    </Modal>
  );
}
const HospitalDetailStyle = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  gap: 20px;
  .map {
    width: 100%;
    height: 800px;
    z-index: 100;

    // 모바일 버전
    @media (max-width: 768px) {
      width: 100%;
      height: 400px;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 12px;

    h3 {
      font-size: 1.5rem;
    }
    .review-title {
      display: flex;
      gap: 10px;
      align-items: center;
    }
    .img {
      width: 30px;
      height: 30px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      font-size: 1.12rem;
    }
  }
`;
export default HospitalDetail;

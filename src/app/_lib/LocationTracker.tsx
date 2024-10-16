// /app/components/LocationTracker.tsx
"use client";

import { useEffect } from "react";
import { useLocationStore } from "../_store/useLocationStore";

const LocationTracker = () => {
  const setLocation = useLocationStore((state) => state.setLocation);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            // Zustand 상태에 저장
            setLocation(latitude.toString(), longitude.toString());
          },
          (error) => {
            console.error("위치 정보를 가져오는 데 실패했습니다:", error);
          },
        );
      } else {
        console.error("이 브라우저에서는 Geolocation을 지원하지 않습니다.");
      }
    };

    getLocation();
  }, [setLocation]);

  return null;
};

export default LocationTracker;

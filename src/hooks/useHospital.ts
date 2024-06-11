import { useEffect, useState } from "react";
import { getHospitals } from "../api/hospital.api";
import { FormatHospital } from "../model/hospital.model";
import { getRanking } from "../api/openai.api";

export const useHospitals = (name: string, clCd: string, dgsbjtCd: string) => {
  const [hospitals, setHospitals] = useState<FormatHospital[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const hospitalsData = await getHospitals(name, clCd, dgsbjtCd);
        const rankedHospitals = await getRanking(hospitalsData);
        setHospitals(rankedHospitals);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHospitals();
  }, [name, clCd, dgsbjtCd]);

  return { hospitals, loading };
};

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LocationState {
  latitude: string | null;
  longitude: string | null;
  setLocation: (latitude: string, longitude: string) => void;
}

export const useLocationStore = create<LocationState>()(
  persist(
    (set) => ({
      latitude: null,
      longitude: null,
      setLocation: (latitude, longitude) => set({ latitude, longitude }),
    }),
    {
      name: "location-storage", // unique name
    },
  ),
);

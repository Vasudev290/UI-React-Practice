import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatues, setOnlineStautes] = useState(true);
  //check if online
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStautes(false);
    });
    window.addEventListener("online", () => {
      setOnlineStautes(true);
    });
  }, []);
  //Boolean Value
  return onlineStatues;
};

export default useOnlineStatus;

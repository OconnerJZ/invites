import { clientAxiosGET } from "@Config/axios/methodRequest";
import { useEffect, useState } from "react";

const useMyInvites = () => {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const data = await clientAxiosGET({ url: "event" });
    setEvents(data);
  };

  useEffect(() => {
    getEvents();
  }, []);
  return { events };
};

export default useMyInvites;

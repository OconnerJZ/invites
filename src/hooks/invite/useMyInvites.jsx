import { clientAxiosGET } from "@Config/axios/methodRequest";
import { useEffect, useState } from "react";

const useMyInvites = () => {
  const [guest, setGuest] = useState([]);
  const [events, setEvents] = useState([]);
  const getGuest = async () => {
    const data = await clientAxiosGET({ url: "guest" });
    setGuest(data);
  };
  const getEvents = async () => {
    const data = await clientAxiosGET({ url: "event" });
    setEvents(data);
  };
  useEffect(() => {
    getGuest();
    getEvents();
  }, []);
  return { events, guest };
};

export default useMyInvites;

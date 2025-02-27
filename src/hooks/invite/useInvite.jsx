import { clientAxiosGET, clientAxiosPUT } from "@Config/axios/methodRequest";
import { AWS_S3_URL } from "@Const/enviroments";
// import { decryptMessage } from "@Utils/commons";
import { notification } from "antd";
import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";

const openNotification = (api, placement = "top") => {
  api.info({
    message: `Confirmación`,
    description: "¡Se ha enviado tu confirmación!",
    placement,
  });
};

const useInvite = () => {
  const params = useParams();
  const inviteId = params?.guestId === undefined ? params?.inviteId : params?.inviteId
  const [api, contextHolder] = notification.useNotification();
  const [invite, setInvite] = useState({});
  const endpoint = `invite/${inviteId}/${params?.guestId}`;

  const getInvite = async () => {
    const data = await clientAxiosGET({ url: endpoint });
    setInvite(data);
  };
  const event_id = invite?.event_id;
  const hasCounterDown = invite?.hasCounterDown;
  const birthday = invite?.birthday;
  const ceremony = invite?.ceremony;
  const location = invite?.location;
  const dressCode = invite?.dressCode;
  const ticket = invite?.ticket;
  const images = invite?.images;
  const bg = invite?.bg;

  const path = `${AWS_S3_URL}files/${event_id}/images/`;
  const pathAudio = `${AWS_S3_URL}files/${event_id}/audios/${birthday?.song}`;

  const onConfirmation = async (id) => {
    const data = {
      confirmation: 1,
    };
    const response = await clientAxiosPUT({ url: `guest/${id}`, data });
    if (response.data === 1) {
      getInvite();
      openNotification(api);
    }
  };
  const confirm = {
    guestId: params?.guestId === undefined ? "" : params?.guestId,
    onConfirmation: onConfirmation,
    confirmation: invite?.ticket?.confirmation,
  };

  useLayoutEffect(() => {
    getInvite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    hasCounterDown,
    birthday,
    ceremony,
    location,
    dressCode,
    ticket,
    confirm,
    images,
    bg,
    path,
    pathAudio,
    contextHolder,
  };
};

export default useInvite;

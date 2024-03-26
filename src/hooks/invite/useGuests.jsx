import {
  clientAxiosGET,
  clientAxiosPOST,
  clientAxiosPUT,
} from "@Config/axios/methodRequest";
import { BASE_URL_INVITE } from "@Const/enviroments";
import { useInviteContext } from "@Context/InviteContext";
import { ColumnsGuests } from "@Pages/ColumnsGuests";
// import { encryptMessage } from "@Utils/commons";
import { message } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const success = (messageApi, content) => {
  messageApi.open({
    type: "success",
    content: content,
  });
};

const useGuests = () => {
  const params = useParams();
  const [guests, setGuests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [row, setRow] = useState({});
  const { addFest, addLinkFest } = useInviteContext();

  const [messageApi, contextHolder] = message.useMessage();

  const getGuest = async () => {
    setIsLoading(true);
    const data = await clientAxiosGET({
      url: `event/${params?.inviteId}/guests`,
    });
    setGuests(data);
    setIsLoading(false);
  };

  const getInvite = async () => {
    const data = await clientAxiosGET({
      url: `event/${params?.inviteId}`,
    });
    addFest(data);
  };

  const onShare = (row) => {
    const url = `${BASE_URL_INVITE}${row?.event_id}/${row?.id}`;
    addLinkFest(url);
    const message = `Invitación: ${url}`;
    const whatsappUrl = `https://wa.me/${row?.phone}?text=${encodeURIComponent(
      message
    )}`;
    const esDispositivoMovil =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    const target = esDispositivoMovil ? "_self" : "_blank";
    window.open(whatsappUrl, target);
  };

  const refresh = () => {
    getGuest();
  };

  const openGuest = () => {
    setOpen(true);
  };
  const closeGuest = () => {
    setOpen(false);
    setRow({});
  };

  const modalGuest = {
    open,
    openGuest,
    closeGuest,
  };

  const onEdit = (row) => {
    openGuest();
    setRow(row);
  };

  const columns = ColumnsGuests(onShare, onEdit);

  const onFinish = async (values) => {
    const data = values;
    if (!row?.id) {
      data.event_id = params?.inviteId;
      data.confirmation = 0;
      const response = await clientAxiosPOST({ url: "guest", data });
      success(messageApi, response?.message);
    } else {
      const response = await clientAxiosPUT({ url: "guest/" + row?.id, data });
      success(messageApi, response?.message);
    }
    refresh();
    closeGuest();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const formGuest = {
    onFinish,
    onFinishFailed,
  };

  useEffect(() => {
    getGuest();
    getInvite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    guests,
    columns,
    isLoading,
    onShare,
    refresh,
    modalGuest,
    formGuest,
    contextHolder,
    row,
  };
};

export default useGuests;

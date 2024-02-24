import { BASE_URL_API } from "@Const/enviroments";
import { typeEvents } from "@Const/lists";
import { useInviteContext } from "@Context/InviteContext";
import { Helmet } from "react-helmet";

const HelmetComponent = () => {
  const { fest, urlfest } = useInviteContext();
  const title =
    fest?.id > 0
      ? `${typeEvents[fest?.event_type_id]} ${
          fest?.name_celebrated?.split(" ")[0]
        }`
      : "Invitaciones";
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={fest?.phrase} />
      <meta
        property="og:image"
        content={`${BASE_URL_API}files/${fest?.id}/images/${fest?.avatar}`}
      />
      <meta property="og:url" content={urlfest} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default HelmetComponent;

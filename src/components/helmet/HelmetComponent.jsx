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
      <meta name="title" content={title} />
      <meta name="description" content={fest?.phrase} />
      <meta
        name="image"
        content={`${BASE_URL_API}files/${fest?.id}/images/${fest?.avatar}`}
      />
      <meta name="url" content={urlfest} />
      <meta name="type" content="website" />
    </Helmet>
  );
};

export default HelmetComponent;

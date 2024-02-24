import { createContext, useContext, useMemo, useState } from "react";

const InviteContext = createContext(null);

// eslint-disable-next-line react/prop-types
const InviteProvider = ({ children }) => {
  const [fest, setFest] = useState({
    id: "",
    name_celebrated: "",
    event_type_id: "",
    avatar: "",
    phrase: "",
  });
  const [urlfest, setUrlfest] = useState("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const addFest = (event) => setFest(event);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const addLinkFest = (url) => setUrlfest(url);
  const configProviderValue = useMemo(
    () => ({
      urlfest,
      fest,
      addFest,
      addLinkFest,
    }),
    [fest, urlfest, addFest, addLinkFest]
  );
  return (
    <InviteContext.Provider value={configProviderValue}>
      {children}
    </InviteContext.Provider>
  );
};

export default InviteProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useInviteContext = () => {
  const context = useContext(InviteContext);
  if (context === undefined) {
    throw new Error("Error de aplicacion en creacion de context.");
  }
  return context;
};

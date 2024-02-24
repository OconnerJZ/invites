import { createContext, useContext, useState } from "react";

const InviteContext = createContext(null);

const InviteProvider = ({ children }) => {
  const [fest, setFest] = useState({
    id: "",
    name_celebrated: "",
    event_type_id: "",
    avatar: "",
    phrase: ""
  });
  const addFest = (event) => setFest(event);
  return (
    <InviteContext.Provider
      value={
        fest,
        addFest,
      }
    >
      {children}
    </InviteContext.Provider>
  );
};

export default InviteProvider;

export const useInviteContext = () => {
  const context = useContext(InviteContext);
  if (context === undefined) {
    throw new Error("Error de aplicacion en creacion de context.");
  }
  return context;
};

import InviteProvider from "@Context/InviteContext";
import HelmetComponent from "./HelmetComponent";
import Router from "./Router";

const App = () => {
  return (
    <InviteProvider>
      <HelmetComponent />
      <Router />
    </InviteProvider>
  );
};

export default App;

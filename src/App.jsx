import InviteProvider from "@Context/InviteContext";
import HelmetComponent from "./components/helmet/HelmetComponent";
import Router from "./Router";

const App = () => {
  return (
    <InviteProvider>
      {/* <HelmetComponent /> */}
      <Router />
    </InviteProvider>
  );
};

export default App;

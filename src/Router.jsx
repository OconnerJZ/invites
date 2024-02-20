import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "@Components/layout/Layout";
import MyInvites from "@Pages/MyInvites";
import Invite from "@Pages/Invite";
import LayoutClient from "@Components/layout/LayoutClient";
import { Result } from "antd";
import Guests from "@Pages/Guests";

const Router = () => {
  const rutaDefault = (
    <Route
      path="*"
      element={
        <Result
          status={404}
          title="404"
          subTitle="No se ha encontrado el recurso"
        />
      }
    />
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="mis-invitaciones">
            <Route path="" element={<MyInvites />} />
            <Route path=":inviteId">
              <Route path="" element={<Invite />} />
              <Route path="guests" element={<Guests />} />
            </Route>
          </Route>
          {rutaDefault}
        </Route>
        <Route path="/" element={<LayoutClient />}>
          <Route path="invite">
            <Route path=":inviteId">
              <Route path=":guestId" element={<Invite />} />
            </Route>
          </Route>
          {rutaDefault}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

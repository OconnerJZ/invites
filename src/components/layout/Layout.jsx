import Navbar from "./Navbar";
import { Layout as AntdLayout } from "antd";
import { Box, Toolbar } from "@mui/material";
import Content from "./Content";
import { TITLE_FOOTER } from "@Const/commons";

const {
  Header: AntdHeader,
  Content: AntdContent,
  Footer: AntdFooter,
} = AntdLayout;

const Layout = () => {
  return (
    <AntdLayout
      style={{
        minHeight: "100vh",
      }}
    >
      <Box className="header-navbar">
        <AntdHeader>
          <Navbar />
        </AntdHeader>
      </Box>
      <Toolbar />
      <AntdContent
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "0 0px",
        }}
      >
        <Content />
      </AntdContent>
      <AntdFooter
        style={{
          backgroundColor: "#3a3b3d",
          color: "#f5f5f5",
          textAlign: "center",
          letterSpacing: "3.2px",
        }}
      >
        {TITLE_FOOTER}
      </AntdFooter>
    </AntdLayout>
  );
};

export default Layout;

import { Layout as AntdLayout } from "antd";
import Content from "./Content";

const {
  Content: AntdContent,
} = AntdLayout;

const LayoutClient = () => {
  return (
    <AntdLayout
      style={{
        minHeight: "100vh",
      }}
    >
      <AntdContent
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "0 0px",
        }}
      >
        <Content />
      </AntdContent>
    </AntdLayout>
  );
};

export default LayoutClient;

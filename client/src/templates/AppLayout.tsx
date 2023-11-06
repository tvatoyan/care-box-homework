import { ReactNode } from "react";
import { Layout } from "antd";

const { Header, Content } = Layout;

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <Layout className="layout" style={{ height: "100%" }}>
      <Header style={{ background: "#d6e9fe" }}></Header>
      <Content style={{ padding: "20px 100px", overflowY: "auto" }}>
        {children}
      </Content>
    </Layout>
  );
};

export default AppLayout;

import { Space, Typography } from "antd";

function Landing() {
  return <Space direction="vertical" style={{width: "100%", justifyContent: "center"}}>
    <Typography.Title style={{width: "100%", textAlign: "center"}}>Halcyon Days</Typography.Title>
    <Typography.Paragraph></Typography.Paragraph>
  </Space>
}

export default Landing;
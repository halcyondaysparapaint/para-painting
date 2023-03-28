import { Space, Typography } from "antd";

function Landing() {
  return <Space direction="vertical" style={{width: "100%", justifyContent: "center"}}>
    <Typography.Title style={{width: "100%", textAlign: "center"}}>Halcyon Days</Typography.Title>
    <Typography.Paragraph style={{textAlign: "center"}}>
      Halcyon Days is a text to image model trained specifically on long-form story inputs.
      Our goal is to create an image generator that can help people visualize the past, present, and future.
    </Typography.Paragraph>
  </Space>
}

export default Landing;
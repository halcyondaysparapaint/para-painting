import { Space, Typography, Image } from "antd";
import { examples } from "./examples";

const {Title} = Typography;

function Example() {
  const { prompt, image } = examples[2];

  return (
    <Space direction="vertical" style={{ width: "100%" }} size="middle">
      <Title level={3}>Example</Title>
      <strong>Prompt (102 words): </strong>
      {prompt}
      <strong>Generated:</strong>
      <Image width={300} src={image} preview={false} />
    </Space>
  );
}

export default Example;
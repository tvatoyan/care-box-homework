import { Space, Skeleton } from "antd";

interface Props {
  count: number;
}

const Loading = ({ count }: Props) => {
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <Space
          key={index}
          direction="vertical"
          align="center"
          style={{ marginRight: 40, paddingBottom: 10 }}
        >
          <Skeleton.Input active={true} size="small" />
          <Skeleton.Avatar active={true} size="large" />
          <Skeleton.Input active={true} size="small" />
        </Space>
      ))}
    </>
  );
};

export default Loading;

import { Row, Col, Skeleton } from "antd";

interface Props {
  count: number;
}

const Loading = ({ count }: Props) => {
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <Row key={index} style={{ marginBottom: 20 }}>
          <Col span={6}>
            <Skeleton.Input active={true} size="small" />
          </Col>
          <Col span={6}>
            <Skeleton.Input active={true} size="small" />
          </Col>
          <Col span={6}>
            <Skeleton.Input active={true} size="small" />
          </Col>
          <Col span={3}>
            <Skeleton.Input active={true} size="small" />
          </Col>
          <Col span={3}>
            <Skeleton.Input active={true} size="small" />
          </Col>
        </Row>
      ))}
    </>
  );
};

export default Loading;

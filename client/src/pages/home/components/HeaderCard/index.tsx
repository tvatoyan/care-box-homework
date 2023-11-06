import { Typography, Row, Space, Skeleton } from "antd";
import { MdLocationPin } from "react-icons/md";
import { weatherCodeDay, getIconByCode } from "src/utils";
import StyledCard from "../StyledCard";

interface Props {
  location?: string;
  temperature?: number;
  weaderCode?: number;
  loading: boolean;
}

const HeaderCard = ({ location, temperature, weaderCode, loading }: Props) => {
  return (
    <StyledCard>
      <Row justify={"space-between"}>
        <Typography.Title level={1} style={{ color: "#fff" }}>
          {loading ? <Skeleton.Input active={true} size={"large"} /> : "Today"}
        </Typography.Title>
        <div style={{ marginTop: 16 }}>
          {loading ? (
            <Skeleton.Avatar active={true} size={"large"} />
          ) : (
            <>
              {weaderCode &&
                getIconByCode({ size: 60, color: "#fff", code: weaderCode })}
            </>
          )}
        </div>
      </Row>
      <Row justify={"space-between"}>
        <Space direction="vertical">
          <Row align={"middle"}>
            <MdLocationPin color="#fff" style={{ marginRight: 10 }} />
            <Typography.Text strong style={{ color: "#fff" }}>
              {loading ? (
                <Skeleton.Input active={true} size={"small"} />
              ) : (
                location
              )}
            </Typography.Text>
          </Row>
          <Typography.Text strong style={{ color: "#fff" }}>
            {loading ? (
              <Skeleton.Input active={true} size={"small"} />
            ) : (
              weatherCodeDay[weaderCode as keyof typeof weatherCodeDay]
            )}
          </Typography.Text>
        </Space>
        <Typography.Title level={1} style={{ color: "#fff" }}>
          {loading ? (
            <Skeleton.Input active={true} size={"large"} />
          ) : (
            temperature
          )}
          &deg;
        </Typography.Title>
      </Row>
    </StyledCard>
  );
};

export default HeaderCard;

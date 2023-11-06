import { Row, Typography, Space } from "antd";
import { WeatherMinutely } from "src/types";
import { weatherCodeDay, getIconByCode } from "src/utils";
import StyledCard from "../StyledCard";
import Loading from "./Loading";

interface Props {
  data?: WeatherMinutely[];
  loading: boolean;
}

const MinutelyWeatherCard = ({ data, loading }: Props) => {
  return (
    <StyledCard>
      <Row>
        <Typography.Title level={5} style={{ color: "#fff" }}>
          MINUTLY FORCAST
        </Typography.Title>
      </Row>
      <Row wrap={false} style={{ overflowX: "scroll", whiteSpace: "nowrap" }}>
        {loading ? (
          <Loading count={12} />
        ) : (
          <>
            {data?.map((item, index) => (
              <Space
                key={index}
                direction="vertical"
                align="center"
                style={{ marginRight: 40, paddingBottom: 10 }}
              >
                <Typography.Text style={{ color: "#fff" }}>
                  {new Intl.DateTimeFormat("en-US", {
                    hour: "2-digit",
                    minute: "numeric",
                  }).format(new Date(item.time))}
                </Typography.Text>
                <div>
                  {getIconByCode({
                    size: 30,
                    color: "#fff",
                    code: item.values.weatherCode,
                  })}
                </div>
                <Typography.Text style={{ color: "#fff" }}>
                  {item.values.temperature}&deg;
                </Typography.Text>
                <Typography.Text strong style={{ color: "#fff" }}>
                  {
                    weatherCodeDay[
                      item.values.weatherCode as keyof typeof weatherCodeDay
                    ]
                  }
                </Typography.Text>
              </Space>
            ))}
          </>
        )}
      </Row>
    </StyledCard>
  );
};

export default MinutelyWeatherCard;

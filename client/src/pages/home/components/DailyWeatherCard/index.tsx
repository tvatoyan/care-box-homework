import { Row, Typography, Col, Space } from "antd";
import { WeatherDaily } from "src/types";
import { weatherCodeDay, getIconByCode } from "src/utils";
import StyledCard from "../StyledCard";
import Loading from "./Loading";

interface Props {
  data?: WeatherDaily[];
  loading: boolean;
}

const DailyWeatherCard = ({ data, loading }: Props) => {
  return (
    <StyledCard>
      <Space direction="vertical" size={20} style={{ width: "100%" }}>
        <Row>
          <Typography.Title level={5} style={{ color: "#fff" }}>
            5-DAY FORCAST
          </Typography.Title>
        </Row>
        {loading ? (
          <Loading count={8} />
        ) : (
          <>
            {data?.map((item, index) => (
              <Row key={index}>
                <Col span={6}>
                  <Typography.Text style={{ color: "#fff" }}>
                    {index === 0
                      ? "Now"
                      : new Intl.DateTimeFormat("en-US").format(
                          new Date(item.time),
                        )}
                  </Typography.Text>
                </Col>
                <Col span={6}>
                  {getIconByCode({
                    size: 30,
                    color: "#fff",
                    code: item.values.weatherCodeMax,
                  })}
                </Col>
                <Col span={6}>
                  <Typography.Text style={{ color: "#fff" }}>
                    {item.values.temperatureAvg}&deg;
                  </Typography.Text>
                </Col>
                <Col span={3}>
                  <Typography.Text style={{ color: "#fff" }}>
                    {item.values.temperatureAvg}&deg;
                  </Typography.Text>
                </Col>
                <Col span={3}>
                  <Typography.Text strong style={{ color: "#fff" }}>
                    {
                      weatherCodeDay[
                        item.values
                          .weatherCodeMax as keyof typeof weatherCodeDay
                      ]
                    }
                  </Typography.Text>
                </Col>
              </Row>
            ))}
          </>
        )}
      </Space>
    </StyledCard>
  );
};

export default DailyWeatherCard;

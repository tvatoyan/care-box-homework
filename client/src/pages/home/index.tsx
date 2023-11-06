import { useEffect } from "react";
import { message, Result, Button } from "antd";
import { useMachine } from "@xstate/react";
import { weatherMachine } from "src/store/machines";
import HeaderCard from "./components/HeaderCard";
import DailyWeatherCard from "./components/DailyWeatherCard";
import MinutelyWeatherCard from "./components/MinutelyWeatherCard";
import { AppLayout } from "src/templates";

const Home = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [state, send] = useMachine(weatherMachine);

  useEffect(() => {
    send("FETCH");
  }, []);

  useEffect(() => {
    if (state.value === "error") {
      messageApi.open({
        type: "error",
        content: state.context.errorMessage,
      });
    }
  }, [state.value]);

  return (
    <AppLayout>
      {state.value === "error" ? (
        <Result
          status="error"
          title={state.context.errorMessage}
          subTitle="Sorry, something went wrong."
          extra={<Button type="primary">Back Home</Button>}
        />
      ) : (
        <>
          <HeaderCard
            location={state.context.weather?.location?.name}
            loading={state.matches("loading") || state.matches("idle")}
            weaderCode={
              state.context.weather?.timelines?.daily &&
              state.context.weather?.timelines?.daily[0]?.values?.weatherCodeMax
            }
            temperature={
              state.context.weather?.timelines?.daily &&
              state.context.weather?.timelines?.daily[0]?.values?.temperatureAvg
            }
          />
          <MinutelyWeatherCard
            loading={state.matches("loading") || state.matches("idle")}
            data={state.context.weather?.timelines?.minutely}
          />
          <DailyWeatherCard
            loading={state.matches("loading") || state.matches("idle")}
            data={state.context.weather?.timelines?.daily}
          />
        </>
      )}
      {contextHolder}
    </AppLayout>
  );
};

export default Home;

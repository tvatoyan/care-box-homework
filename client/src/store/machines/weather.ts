import { createMachine, assign, DoneEventObject } from "xstate";
import { WeatherResponse } from "src/types";
import { fetchWeather } from "src/api";

export const weatherMachine = createMachine(
  {
    id: "weatherMachine",
    initial: "idle",
    context: {
      weather: {} as WeatherResponse,
      errorMessage: undefined as string | undefined,
    },
    schema: {
      services: {} as {
        loadWeather: {
          data: WeatherResponse;
        };
      },
    },
    states: {
      idle: {
        on: {
          FETCH: "loading",
        },
      },
      loading: {
        invoke: {
          src: () => fetchWeather(),
          onDone: {
            target: "succes",
            actions: "setWeather",
          },
          onError: {
            target: "error",
            actions: "setError",
          },
        },
      },
      succes: {},
      error: {},
    },
  },
  {
    actions: {
      setWeather: assign((_, event: DoneEventObject) => {
        return {
          weather: event.data.data,
        };
      }),
      setError: assign((_, event: DoneEventObject) => {
        return {
          errorMessage: event.data.response.data.error,
        };
      }),
    },
  },
);

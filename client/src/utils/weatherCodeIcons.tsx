import { BsFillSunFill, BsFillCloudSunFill } from "react-icons/bs";
import { WiDayCloudy, WiNightCloudy, WiCloudy, WiDayFog } from "react-icons/wi";
import {
  BsCloudFog2,
  BsCloudDrizzleFill,
  BsCloudDrizzle,
  BsCloudSnow,
  BsFillCloudSnowFill,
  BsCloudRain,
  BsFillCloudRainHeavyFill,
} from "react-icons/bs";
import { RiDrizzleLine, RiSnowyLine } from "react-icons/ri";
import { LuCloudDrizzle } from "react-icons/lu";
import { PiCloudSnowLight, PiCloudSnow, PiCloudSnowFill } from "react-icons/pi";
import { TiWeatherStormy } from "react-icons/ti";
import { GrStatusPlaceholder } from "react-icons/gr";

interface Props {
  size: number;
  color: string;
  code: number;
}

export const getIconByCode = ({ size, color, code }: Props) => {
  const weatherCodeIcons = {
    0: <GrStatusPlaceholder color={color} size={size} />,
    1000: <BsFillSunFill color={color} size={size} />,
    1100: <BsFillCloudSunFill color={color} size={size} />,
    1101: <WiDayCloudy color={color} size={size} />,
    1102: <WiNightCloudy color={color} size={size} />,
    1001: <WiCloudy color={color} size={size} />,
    2000: <BsCloudFog2 color={color} size={size} />,
    2100: <WiDayFog color={color} size={size} />,
    4000: <RiDrizzleLine color={color} size={size} />,
    4001: <BsCloudDrizzle color={color} />,
    4200: <LuCloudDrizzle color={color} size={size} />,
    4201: <BsCloudDrizzleFill color={color} size={size} />,
    5000: <BsCloudSnow color={color} size={size} />,
    5001: <RiSnowyLine color={color} size={size} />,
    5100: <PiCloudSnowLight color={color} size={size} />,
    5101: <BsFillCloudSnowFill color={color} size={size} />,
    6000: <RiDrizzleLine color={color} size={size} />,
    6001: <BsCloudRain color={color} size={size} />,
    6200: <BsCloudRain color={color} size={size} />,
    6201: <BsFillCloudRainHeavyFill color={color} size={size} />,
    7000: <PiCloudSnow color={color} size={size} />,
    7101: <PiCloudSnowFill color={color} size={size} />,
    7102: <PiCloudSnow color={color} size={size} />,
    8000: <TiWeatherStormy color={color} size={size} />,
  };

  return weatherCodeIcons[code as keyof typeof weatherCodeIcons];
};

import { Card } from "antd";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const StyledCard = ({ children }: Props) => {
  return (
    <Card
      style={{
        width: "100%",
        background:
          "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      }}
    >
      {children}
    </Card>
  );
};

export default StyledCard;

"use client";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Illustrations = () => {
  const theme = useTheme();
  const hidden = useMediaQuery(theme.breakpoints.down("md"));

  if (!hidden) {
    return (
      <>
        <img
          alt={"doctor-1"}
          src={"/images/illustrations/objects/doctor-1.svg"}
          className={"absolute inline-start-0 block-end-0"}
          width={230}
          height={230}
          style={{ bottom: 20, left: 80 }}
        />

        <img
          alt={"nature-1"}
          src={"/images/illustrations/objects/nature-1.svg"}
          className={"absolute inline-end-0 block-end-0"}
          width={280}
          height={200}
          style={{ bottom: 80, right: 20 }}
        />
      </>
    );
  } else {
    return null;
  }
};

export default Illustrations;

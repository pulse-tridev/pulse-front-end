"use client";

import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, useTheme } from "@mui/material/styles";
import Image from "next/image";

const MaskImg = styled("img")({
  width: "100%",
  position: "absolute",
  bottom: 0,
  zIndex: 1,
});

const Illustrations = () => {
  const maskBackground = "/images/illustrations/mask/misc-mask-light.png";

  const theme = useTheme();
  const hidden = useMediaQuery(theme.breakpoints.down("md"));

  if (!hidden) {
    return (
      <>
        <Image
          alt={"doctor"}
          src={"/images/illustrations/doctor.svg"}
          width={330}
          height={220}
          style={{ position: "absolute", bottom: 20, left: 80 }}
        />

        <MaskImg alt="mask" src={maskBackground} />

        <Image
          alt={"nature"}
          src={"/images/illustrations/nature.svg"}
          width={190}
          height={180}
          style={{ position: "absolute", right: 50, bottom: 80 }}
        />
      </>
    );
  } else {
    return null;
  }
};

export default Illustrations;

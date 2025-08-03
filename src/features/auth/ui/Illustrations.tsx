import { Box } from "@mui/material";
import Image from "next/image";

const Illustrations = () => (
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      zIndex: 0,
      pointerEvents: "none",
      display: { xs: "none", md: "block" },
    }}
  >
    <Box
      component="img"
      src="/images/illustrations/mask/misc-mask-light.png"
      alt="mask"
      sx={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    />

    <Image
      alt="nature"
      src="/images/illustrations/nature.svg"
      width={190}
      height={180}
      style={{ position: "absolute", right: 50, bottom: 80, zIndex: 2 }}
    />
  </Box>
);

export default Illustrations;

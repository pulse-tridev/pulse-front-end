import Image from "next/image";
import { IllustrationContainer } from "./styles";

const Illustrations = () => (
  <IllustrationContainer>
    <Image
      alt="mask"
      src="/images/illustrations/mask/misc-mask-light.png"
      width={1000}
      height={500}
      style={{
        width: "100%",
        height: "auto",
        position: "absolute",
        bottom: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
      priority
    />

    <Image
      alt="nature"
      src="/images/illustrations/nature.svg"
      width={190}
      height={180}
      style={{
        position: "absolute",
        right: 50,
        bottom: 80,
        zIndex: 2,
      }}
    />
  </IllustrationContainer>
);

export default Illustrations;

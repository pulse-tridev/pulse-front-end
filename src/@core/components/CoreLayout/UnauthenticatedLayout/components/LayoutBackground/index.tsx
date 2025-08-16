import Image from "next/image";

interface LayoutBackgroundProps {
  backgroundImage: string;
}

const LayoutBackground = ({ backgroundImage }: LayoutBackgroundProps) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Image
        src={backgroundImage}
        alt="Fundo da página"
        fill
        style={{ objectFit: "cover", zIndex: 0 }}
        priority
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom right, rgba(0,0,0,0.2), rgba(0,0,0,0.4))",
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default LayoutBackground;

import Image from "next/image";

interface BackgroundProps {
  backgroundImage: string;
}

const AuthLayoutBackground = ({ backgroundImage }: BackgroundProps) => {
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
            "linear-gradient(to bottom right, rgba(0,0,0,0.1), rgba(0,0,0,0.3))",
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default AuthLayoutBackground;

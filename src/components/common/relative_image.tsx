import Image from "next/image";

export const RelativeImage = ({ src }: { src: string }) => {
  return (
    <Image
      fill
      sizes=""
      src={src}
      alt="Relative image"
      style={{ objectFit: "cover" }}
    />
  );
};

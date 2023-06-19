import Image from "next/image";

const Header = () => {
  return (
    <div className="relative w-full h-[350px]">
      <Image src="/banner.webp" fill className="w-full h-full object-cover" />
    </div>
  );
};

export default Header;

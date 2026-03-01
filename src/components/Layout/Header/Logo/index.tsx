import Link from "next/link";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <span className="inline-flex items-center gap-2">
        <Image
          src="/textlogo.png"
          alt="AlgoCast — Where Trends Become Tradable."
          width={140}
          height={32}
          priority
        />
      </span>
    </Link>
  );
};

export default Logo;

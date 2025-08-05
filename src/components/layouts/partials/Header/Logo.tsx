// components/Logo.tsx (no "use client")
import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/images/logo.webp"
      alt="EZYFind company logo"
      width={184}
      height={101}
      priority
      fetchPriority="high"
    />
  );
}

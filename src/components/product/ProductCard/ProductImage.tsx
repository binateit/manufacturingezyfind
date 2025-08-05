
import { ENV } from "@/core/config/env";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";


interface ProductImageProps {
  productImage: string | null;
  alt: string;
}

export default function ProductImage({ productImage, alt }: ProductImageProps) {
    console.log('productImage', `${ENV.IMAGE_URL}${productImage}`)
  return (
    <div className="relative overflow-hidden mb-4">
      <div className="aspect-2/1">
        <Image
          src={productImage ? `${ENV.IMAGE_URL}${productImage}` : '/images/no-image.webp'}
          loading="lazy"
          width={270}
          height={135}
          className="w-full h-full object-contain"
          alt={alt}
        />
      </div>
      <button className="bg-primary absolute right-2 bottom-2 h-[35px] w-[35px] text-white flex items-center justify-center">
        <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
      </button>
    </div>
  );
}

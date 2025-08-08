import clsx from "clsx";

export interface PageBannerProps {
  title: string;
  backgroundImage: string;
  className?: string;
}

export default function PageBanner({ title, backgroundImage, className }: PageBannerProps) {
  return (
    <div
      role="img"
      aria-label={title}
      className={clsx(
        "page-title flex justify-center items-center h-[200px] md:h-[300px] lg:h-[400px] bg-black/45 bg-blend-color bg-cover bg-center",
        className
      )}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <p className="text-center text-white text-2xl md:text-4xl uppercase font-semibold">
        {title}
      </p>
    </div>
  );
}

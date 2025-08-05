import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { FC, useState } from "react";

const VideoBanner: FC = () => {
    const [playVideo, setPlayVideo] = useState<boolean>(false);

    return (
        <div className="aspect-[1280/545] w-full relative group">
            {!playVideo && (
                <>
                    <Image
                        src="/images/south-africas-manufacturing-B2B-marketplace.webp"
                        alt="Video Thumbnail"
                        fill
                        priority
                        fetchPriority="high"
                        sizes="100vw"
                        className="object-cover"
                    />
                    {/* Button only visible on hover */}
                    <button
                        onClick={() => setPlayVideo(true)}
                        className="absolute inset-0 flex items-center justify-center 
                        bg-black/0 hover:bg-black/40 md:group-hover:bg-black/40 
                        transition-colors duration-300">
                        <div
                            className="opacity-100 md:opacity-0 md:group-hover:opacity-100 
                                    transition-opacity duration-300 ease-in-out 
                                    bg-white rounded-full w-16 h-16 md:w-20 md:h-20 
                                    flex items-center justify-center shadow-lg"
                        >
                            <FontAwesomeIcon icon={faPlay} className="text-primary text-2xl md:text-3xl pl-1" />
                        </div>
                    </button>
                </>
            )}

            {playVideo && (
                <video
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/videos/manufacturing.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    )
}

export default VideoBanner
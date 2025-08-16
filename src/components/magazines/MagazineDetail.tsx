import { ENV } from "@/core/config/env";
import { formatDate } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";
import { MagazineDetails } from "@/core/models/magazines/magazineDetail";
import { Galleria } from "primereact/galleria";
import { TabView, TabPanel } from "primereact/tabview";
import { ReviewKeyType } from "@/core/constants/enum";
import ReviewWidget from "../widgets/Review";
import MagazineCard from "../widgets/MagazineCard";

interface MagazineDetailProps {
    magazine: MagazineDetails;
}

export default function MagazineDetail({ magazine }: MagazineDetailProps) {

    const images = magazine?.mapEflyersUploadDtos?.filter(dto =>
        dto.filePath &&
        (dto.filePath.toLowerCase().endsWith('.jpg') ||
            dto.filePath.toLowerCase().endsWith('.png') ||
            dto.filePath.toLowerCase().endsWith('.webp'))
    ).map(dto => ({
        itemImageSrc: dto?.filePath ? `${ENV.IMAGE_URL}${dto.filePath}` : "/images/no-image.webp",
        thumbnailImageSrc: dto?.filePath ? `${ENV.IMAGE_URL}${dto.filePath}` : "/images/no-image.webp",
        alt: magazine.magazineName || "Magazine Image",
    })) || [];

    const responsiveOptions = [
        { breakpoint: '991px', numVisible: 4 },
        { breakpoint: '767px', numVisible: 3 },
    ];


    return (
        <div className="container mx-auto px-4 py-6">
            <div className='mt-10 mb-5'>
                <Link href='/' className='text-primary'>Home</Link> / <Link href='/manufacturing/digital'> Digital Magazines</Link> / <span className='text-gray-500'>{magazine?.magazineName}</span>
            </div>

            {/* {pdfFiles && pdfFiles.length > 0 && (
                <FlipbookViewer pdfUrl={`${ENV.IMAGE_URL}${pdfFiles[0].filePath}`} />
            )} */}

            <div className="flex flex-wrap lg:flex-nowrap my-10 md:my-10 gap-5 lg:gap-15">
                <div className="basis-12/12 lg:basis-5/12 2xl:basis-6/12 overflow-hidden">
                    <div className="card">
                        {images.length > 1 ? (
                            <Galleria
                                value={images}
                                showItemNavigators={true}
                                responsiveOptions={responsiveOptions}
                                numVisible={4}
                                item={(item) => (
                                    <Image src={item.itemImageSrc} height={466} width={495} className="w-full cursor-crosshair" alt={item.alt} />
                                )}
                                thumbnail={(item) => (
                                    <Image src={item.thumbnailImageSrc} height={466} width={495} className="w-full cursor-crosshair" alt={item.alt} />
                                )}
                            />
                        ) : images.length === 1 ? (
                            <Image src={images[0].itemImageSrc} height={466} width={495} className="w-full" alt={magazine.magazineName} />
                        ) : (
                            <Image
                                src="/images/no-image.webp"
                                height={466}
                                width={495}
                                className="w-full "
                                alt="No Image"
                            />
                        )}
                    </div>
                </div>


                <div className="basis-12/12 lg:basis-7/12 2xl:basis-6/12">
                    <p className="text-2xl md:text-3xl text-primary font-semibold">
                        {magazine.magazineName}
                    </p>
                </div>
            </div>

            <div className='mt-20 mb-10'>
                <TabView>
                    <TabPanel header="Description">
                        <div className='card-shadow p-5'>
                            <p className='text-lg text-primary font-semibold mb-2'>{magazine?.magazineName}</p>
                            <p className='text-sm mt-2'>{magazine?.eFlyerDescription}</p>

                        </div>
                    </TabPanel>
                    <TabPanel header="Item Information">
                        <div className='card-shadow p-5'>
                            <p className='text-lg text-primary font-semibold mb-2'>Information</p>
                            <ul className='list-disc text-primary pl-5 mt-3'>
                                <li className="mb-1 text-sm">
                                    <span className="text-black">Start Date : {formatDate(magazine?.startDate || "")}</span>
                                </li>

                                <li className='mb-1 text-sm'><span className='text-black'>City: {magazine?.cityName}</span></li>
                                <li className='mb-1 text-sm'><span className='text-black'>Phone: {magazine?.phone}</span></li>
                                <li className='mb-1 text-sm'><span className='text-black'>Address: {magazine?.streetAddress}</span></li>
                                <li className='mb-1 text-sm'><span className='text-black'>Province: {magazine?.provinceName}</span></li>

                            </ul>

                        </div>
                    </TabPanel>
                    <TabPanel header="Review">
                        <div className='card-shadow p-5'>
                            <p className='text-lg text-primary font-semibold mb-2'>Review</p>
                            <ReviewWidget keyType={ReviewKeyType.Eflyer} key={magazine.eflyerId || 0} keyName={magazine.magazineName} />
                        </div>
                    </TabPanel>
                </TabView>
            </div>
            <div className="mb-20">
                <MagazineCard title={`More Similar Magazines`} categoryId={magazine?.categoryID} />
            </div>
        </div>
    );
}
import { useQuery } from "@apollo/client";
import { Get_Item_Request_Service_List } from "@/core/graphql/queries/getItemRequestServiceList";
import Slider from "react-slick";
import { GetItemServiceResultDto } from "@/core/models/items/get-item-service.model";
import Image from "next/image";
import Button from "../ui/Button";
import { useState } from "react";
import RequestItemFormPopup from "../requestItem/RequestItemFormPopup";
import { itemServiceSetting } from "@/core/config/itemServiceSetting";

const GetItemCarousel = () => {
    const { data, loading, error } = useQuery(Get_Item_Request_Service_List, {
        variables: {},
    });

    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedItemData, setSelectedItemData] = useState<{
        title?: string;
        description?: string | null;
        category?: string;
    } | undefined>(undefined);

    if (loading) return <div>Loading carousel...</div>;
    if (error) return <div>Error loading items.</div>;

    const items = data?.getItemRequestServiceList?.result || [];

    const handleRequestClick = (item: GetItemServiceResultDto) => {
        setSelectedItemData({
            title: item.itemRequestServiceTitle,
            description: item.itemRequestServiceDescription,
            category: item.categoryName?.categoryName,
        });
        setPopupOpen(true);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
        setSelectedItemData(undefined);
    };


    return (
        <div className="slider-container h-full mb-4">
            <div className=" mx-auto">

                <Slider
                    {...itemServiceSetting}
                    className="h-full -ml-[12px] -mr-[12px] xl:-mr-[10px]"
                >
                    {items.map((item: GetItemServiceResultDto, index: number) => (
                        <div
                            key={index}
                            className="px-3"
                        >
                            <div className="flex flex-col items-center text-center space-y-3 border border-gray-300  shadow-sm bg-white mb-4">
                                <div className=" overflow-hidden rounded ">
                                    <Image
                                        src={'/images/no-image.webp'}
                                        // src={item.thumbNailPath ? process.env.NEXT_PUBLIC_IMAGE_URL + item.thumbNailPath + '?random=' + item.itemRequestServiceID : '/images/no-image.webp'}
                                        alt={item.itemRequestServiceTitle}
                                        loading='lazy'
                                        width={250}
                                        height={300}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <h6 className="text-base font-semibold text-gray-800">
                                    {item.itemRequestServiceTitle}
                                </h6>
                                <Button
                                    className="bg-[var(--primary-color)] border border-[var(--primary-color)] text-sm text-white hover:bg-white hover:text-[var(--primary-color)] px-4 py-2 transition-all mb-4"
                                    onClick={() => handleRequestClick(item)}
                                >
                                    Request For Quote
                                </Button>
                            </div>
                        </div>

                    ))}
                </Slider>
            </div>
            {popupOpen && (
                <RequestItemFormPopup
                    itemData={selectedItemData}
                    onClose={handleClosePopup}
                    forceOpen={popupOpen}
                />
            )}
        </div>
    );
};

export default GetItemCarousel;

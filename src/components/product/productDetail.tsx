import { ENV } from "@/core/config/env";
import { formatCurrency, formatDate } from "@/lib/format";
import Link from "next/link";
import { ProductDetails } from "@/core/models/products/productDetail";
import { Galleria } from "primereact/galleria";
import Image from "next/image";
import { faStar, faShoppingCart, faShare, faInfo, faMinus, faPlus, faHeart, faGavel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../ui/Button";
import { TabPanel, TabView } from "primereact/tabview";
import { useEffect, useMemo, useState } from "react";
import { formatTimeLeft } from "@/lib/formatTimeLeft";
import { tokenService } from "@/core/services/token.service";
import { useAppUI } from "@/contexts/AppUIContext";
import { cartService } from "@/core/services/cartService";
import { toast } from "react-toastify";
import ProductCard from "../widgets/ProductCard";


interface ProductDetailProps {
    product: ProductDetails;
    quantity?: number;
    onIncreaseQuantity?: () => void;
    onDecreaseQuantity?: () => void;
    hireFromDate?: string;
    hireEndDate?: string;
    onChangeHireFromDate?: (val: string) => void;
    onChangeHireEndDate?: (val: string) => void;
    onAddToCartClick?: () => void;
}

export default function ProductDetail({ product, quantity = 1, onIncreaseQuantity, onDecreaseQuantity, hireFromDate = "", hireEndDate = "", onChangeHireFromDate, onChangeHireEndDate, onAddToCartClick }: ProductDetailProps) {

    const images = product?.mapProductImages?.map(e => ({
        itemImageSrc: e?.imagePath ? `${ENV.IMAGE_URL}${e.imagePath}` : "/images/no-image.webp",
        thumbnailImageSrc: e?.imagePath ? `${ENV.IMAGE_URL}${e.imagePath}` : "/images/no-image.webp",
        alt: "Product Image",
    })) || [];

    const responsiveOptions = [
        { breakpoint: '991px', numVisible: 4 },
        { breakpoint: '767px', numVisible: 3 }
    ];

    const [timeLeft, setTimeLeft] = useState(0);
    const { openLoginModal } = useAppUI();
    const [diffDays, setDiffDays] = useState<number | null>(null);

    useEffect(() => {
        if (hireFromDate && hireEndDate) {
            const start = new Date(hireFromDate);
            const end = new Date(hireEndDate);
            if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
                const timeDiff = end.getTime() - start.getTime();
                const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
                setDiffDays(days > 0 ? days : null);
            } else {
                setDiffDays(null);
            }
        } else {
            setDiffDays(null);
        }
    }, [hireFromDate, hireEndDate]);

    const lastBid = useMemo(() => {
        return product?.prdBid?.slice().sort((a, b) => (b?.bidId ?? 0) - (a?.bidId ?? 0))[0] ?? null;
    }, [product.prdBid]);

    const baseAmount = lastBid?.bidAmount ?? product.unitCost ?? 0;
    const [bidAmount, setBidAmount] = useState<number>(baseAmount * 1.1);
    const [isWorking, setIsWorking] = useState(false);

    const handleIncreaseBid = () => {
        setBidAmount((prev) => parseFloat((prev * 1.1).toFixed(2)));
    };

    useEffect(() => {
        const end = new Date(product.endDate ?? "").getTime();

        const updateTime = () => {
            const now = Date.now();
            const diff = Math.max(0, Math.floor((end - now) / 1000));
            setTimeLeft(diff);
        };

        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, [product.endDate]);

    useEffect(() => {
        setBidAmount(baseAmount * 1.1);
    }, [baseAmount]);

    const handleHireNow = async () => {
        if (
            !hireFromDate ||
            !hireEndDate ||
            isNaN(Date.parse(hireFromDate)) ||
            isNaN(Date.parse(hireEndDate))
        ) {
            toast.error("Please select valid start and end dates");
            return;
        }
        try {
            setIsWorking(true);
            const formattedFromDate = new Date(hireFromDate).toISOString();
            const formattedToDate = new Date(hireEndDate).toISOString();
            const result = await cartService.hireProduct({
                hireId: 0,
                fromDate: formattedFromDate,
                toDate: formattedToDate,
                productId: product.productID
            });
            if (result?.hireId) {
                toast.success("Successfully Hired");
            } else {
                toast.error("Failed to Hire");
            }
        } catch {
            toast.error("Something went wrong");
        } finally {
            setIsWorking(false);
        }
    }
    const hireNow = async () => {
        if (!tokenService.getUserName()) {
            openLoginModal(async () => {
                await handleHireNow();
            });
            return;
        }
        await handleHireNow();
    }

    const handleBidNow = async (amount?: number) => {
        try {
            setIsWorking(true);
            const result = await cartService.bidOnProduct({
                bidId: 0,
                bidAmount: amount || baseAmount,
                productId: product.productID
            });
            if (result?.bidId) {
                toast.success("Successfully bid!");

                product.prdBid = [
                    {
                        bidId: result.bidId,
                        bidAmount: amount || baseAmount,
                    },
                    ...(product.prdBid || []),
                ];
            } else {
                toast.error("Failed to Bid")
            }
        } catch (err) {
            console.error("Bid failed:", err);
            toast.error("Something went wrong while bidding.");
        } finally {
            setIsWorking(false);
        }
    };

    const bidNow = async (amount?: number) => {
        if (!tokenService.getUserName()) {
            openLoginModal(async () => {
                await handleBidNow(amount);

            });
            return;
        }
        await handleBidNow(amount);

    }
    return (
        <div className="container mx-auto px-4 py-6">
            <div className="container">
                <div className='mt-10 mb-5'>
                    <Link href='/' className='text-primary'>Home</Link> / <Link href='/manufacturing/product'> Products</Link> / <span className='text-gray-500'>{product?.productName}</span>
                </div>
            </div>
            <div className="container">
                <div className="flex flex-wrap lg:flex-nowrap my-10 md:my-10 gap-5 lg:gap-15">
                    <div className="basis-12/12 lg:basis-5/12 2xl:basis-6/12 overflow-hidden">
                        <div className="card">
                            {images.length > 1 ? (
                                <Galleria
                                    value={images}
                                    showItemNavigators
                                    showThumbnails
                                    circular
                                    responsiveOptions={responsiveOptions}
                                    numVisible={4}
                                    item={(item) => (
                                        <Image src={item.itemImageSrc} height={466} width={495} className="w-full object-contain" alt={item.alt} />
                                    )}
                                    thumbnail={(item) => (
                                        <Image src={item.thumbnailImageSrc} height={466} width={495} className="w-full object-cover" alt={item.alt} />
                                    )}
                                />
                            ) : images.length === 1 ? (
                                <Image src={images[0].itemImageSrc} height={466} width={495} className="w-full" alt="Product" />
                            ) : (
                                <Image src="/images/no-image.webp" height={466} width={495} className="w-full" alt="No Image" />
                            )}
                        </div>
                    </div>

                    <div className="basis-12/12 lg:basis-7/12 2xl:basis-6/12">
                        <h1 className="text-2xl md:text-3xl font-semibold text-primary">{product?.productName}</h1>

                        <p className="text-xl md:text-2xl font-semibold">
                            {product?.salesTypeId === 2 && lastBid ? formatCurrency(lastBid.bidAmount) : formatCurrency(product?.unitCost || 0)}
                            <span className="font-light text-gray-500 ml-2">
                                {product?.salesTypeId === 3 && "Hire per day"}
                                {product?.salesTypeId === 2 && "Last bid"}
                            </span>
                        </p>

                        <p className="text-gray-500 mb-2">
                            Time Left:{" "}
                            <span className="font-semibold text-[var(--primary-color)]">
                                {formatTimeLeft(timeLeft)}
                            </span>
                        </p>

                        <div className="flex gap-0.5 mt-3">
                            <FontAwesomeIcon icon={faStar} className="text-[#e8770f] text-lg" />
                            <FontAwesomeIcon icon={faStar} className="text-[#e8770f] text-lg" />
                            <FontAwesomeIcon icon={faStar} className="text-[#e8770f] text-lg" />
                            <FontAwesomeIcon icon={faStar} className="text-[#e8770f] text-lg" />
                            <FontAwesomeIcon icon={faStar} className="text-[#e8770f] text-lg" />
                        </div>




                        {(product?.salesTypeId === 1 || product?.salesTypeId === 3) && (
                            <div className="quntity-input-box relative mb-3 w-[300px] mt-5">
                                <input type="number" value={quantity} readOnly className="form-control border border-gray-300 text-sm w-full h-[35px] px-3 font-semibold text-center" />
                                <button onClick={onDecreaseQuantity} className="bg-secondary absolute left-0 h-[35px] w-[35px] text-center text-white cursor-pointer justify-items-center">
                                    <FontAwesomeIcon icon={faMinus} className="w-5 h-5" />
                                </button>
                                <button onClick={onIncreaseQuantity} className="bg-secondary absolute right-0 h-[35px] w-[35px] text-center text-white justify-items-center cursor-pointer">
                                    <FontAwesomeIcon icon={faPlus} className="w-5 h-5" />
                                </button>
                            </div>
                        )}
                        {product?.salesTypeId === 2 && (
                            <div className="quntity-input-box relative mb-3 w-[300px] mt-5">
                                <div className="relative mb-3">
                                    <input
                                        value={formatCurrency(bidAmount)}
                                        readOnly
                                        disabled
                                        className="form-control border border-gray-300 text-sm w-full h-[35px] px-3 font-semibold"
                                    />
                                    <button
                                        onClick={handleIncreaseBid}
                                        className="absolute right-0 top-0 h-[35px] w-[35px] bg-secondary text-white flex justify-center items-center"
                                    >
                                        <FontAwesomeIcon icon={faGavel} />
                                    </button>
                                </div>
                            </div>)}

                        {product?.salesTypeId === 3 && (
                            <div className="quntity-input-box relative mb-3 w-[300px] mt-5">
                                <div className="flex gap-5 mb-4">
                                    <input type='date' value={hireFromDate} onChange={(e) => onChangeHireFromDate?.(e.target.value)} className="form-control border border-gray-300 text-sm w-full h-[35px] px-3 text-center" placeholder="Start Date" />
                                    <input type='date' value={hireEndDate} onChange={(e) => onChangeHireEndDate?.(e.target.value)} className="form-control border border-gray-300 text-sm w-full h-[35px] px-3 text-center" placeholder="End Date" />
                                {diffDays ? (
                                    <div className="">
                                        {`Days: ${diffDays}; Total:${formatCurrency(product.unitCost * diffDays)}`}
                                    </div>
                                ) : null}
                                </div>
                            </div>)}
                        <div className="flex gap-4 mt-5">
                            {(product?.salesTypeId === 1 || product?.salesTypeId === 3) && (
                                <button onClick={onAddToCartClick} className="px-5 py-2 font-medium rounded bg-[var(--primary-color)] text-white hover:bg-white hover:text-[var(--primary-color)] border border-[var(--primary-color)] flex items-center gap-2 transition-all duration-200">
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                    Add Cart
                                </button>
                            )}
                            {product?.salesTypeId === 3 && (
                                <button className="px-5 py-2 font-medium rounded border border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition-all duration-200" onClick={hireNow}>
                                    Hire Now
                                </button>
                            )}

                            {product?.salesTypeId === 2 && (
                                <button onClick={() => bidNow(bidAmount)} disabled={isWorking} className="px-5 py-2 font-medium rounded bg-[var(--primary-color)] text-white hover:bg-white hover:text-[var(--primary-color)] border border-[var(--primary-color)] flex items-center gap-2 transition-all duration-200">
                                    <FontAwesomeIcon icon={faGavel} />
                                    {isWorking ? 'Processing...' : 'Bid Now'}
                                </button>
                            )}
                        </div>
                        <div className="flex justify-between items-center mt-10">
                            <p>Ends {formatDate(product?.endDate || "")}</p>
                            <div className="flex gap-4">
                                <a className="flex items-center gap-1 hover:text-[var(--primary-color)] transition-all">
                                    <span className="text-sm font-light">Add to cart</span>
                                </a>
                                <a className="flex items-center gap-1 hover:text-[var(--primary-color)] transition-all">

                                    <button className=" h-[35px] w-[35px]text-white cursor-pointer ">
                                        <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
                                    </button>
                                    <span className="text-sm font-light">Favourite</span>
                                </a>
                                <a className="flex items-center gap-1 hover:text-[var(--primary-color)] transition-all">
                                    <FontAwesomeIcon icon={faShare} />
                                    Share
                                </a>
                            </div>
                        </div>
                        <div className="bg-white card-shadow border border-gray-300 p-5 mt-2">
                            <div className="flex flex-wrap xl:flex-nowrap justify-center xl:justify-normal gap-x-8 items-center">
                                <Image src="/images/company.png" height={47} width={49} alt="Company" />
                                <p className="relative before:absolute before:h-[20px] before:w-[20px] before:content-[url('/images/star-icon.webp')] before:-left-5 before:top-0">97.50%</p>
                                <p className="relative before:absolute before:h-[20px] before:w-[20px] before:content-[url('/images/veryfied-icon.webp')] before:-left-5 before:top-0">
                                    Verified By : <span className="uppercase font-semibold">EzyFind</span>
                                </p>
                                <div className="w-full xl:w-auto py-3 px-4 border border-gray-300 flex gap-2 justify-center items-center card-shadow ml-auto">
                                    <FontAwesomeIcon icon={faInfo} className="text-primary" />
                                    Ask the similar questions
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-2 mt-5 items-center'>
                            <p className="relative ml-5 before:absolute before:h-[20px] before:w-[20px] before:content-[url('/images/check-icon.webp')] before:-left-5 before:top-0">Delivery Amount</p>
                            <Button className='border !border-[var(--primary-color)] bg-white !text-[var(--primary-color)] transition-all duration-300 hover:bg-[var(--primary-color)] hover:!text-white text-sm'>View Options</Button>
                        </div>

                        <div className="flex justify-between mt-5">
                            <p className="relative ml-5 pl-3 before:absolute before:h-[20px] before:w-[20px] before:content-[url('/images/shipping-icon.webp')] before:-left-5 before:top-0 font-semibold">Shipping</p>
                            <p className="flex justify-center items-center gap-2">Powered By :
                                <Image src="/images/powered-image.webp" height={23} width={73} alt="Powered By" />
                            </p>
                        </div>

                        <div className='flex gap-4 mt-5 border-b border-gray-300 pb-5'>
                            <input type='text' name='suburb' placeholder='Suburb' className='form-control border border-gray-300 text-sm xl:text-[14px] 2xl:text-md w-full h-10 px-3 bg-white' />
                            <input type='text' name='postal' placeholder='Postal Code' className='form-control border border-gray-300 text-sm xl:text-[14px] 2xl:text-md w-full h-10 px-3 bg-white' />
                            <Button className="bg-[var(--primary-color)] text-sm hover:bg-white border !border-[var(--primary-color)] flex items-center gap-1 text-white hover:text-[var(--primary-color)] w-[200px]">Calculate</Button>
                        </div>


                        <p className="relative ml-5 mt-5 pl-2 before:absolute before:h-[20px] before:w-[20px] before:content-[url('/images/payment-icon.webp')] before:-left-5 before:top-0">Payments</p>

                        <div className='flex gap-5 mt-5'>
                            <Image src={'/images/payfast-icon.webp'} height={42} width={140} alt='' />
                            <Image src={'/images/paygate-icon.webp'} height={42} width={140} alt='' />
                            <Image src={'/images/paypal-iacon.webp'} height={42} width={140} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='mt-20 mb-20'>
                    <TabView>
                        <TabPanel header="Description">
                            <div className='card-shadow p-5'>
                                <p className='text-lg text-primary font-semibold mb-2'>{product?.productName}</p>
                                {product?.description ? (
                                    <div
                                        className="text-gray-600"
                                        dangerouslySetInnerHTML={{ __html: product.description }}
                                    />
                                ) : (
                                    <p className="text-gray-600">No description available</p>
                                )}

                            </div>
                        </TabPanel>
                        <TabPanel header="Item Information">
                            <div className='card-shadow p-5'>
                                <p className='text-lg text-primary font-semibold mb-2'>Information</p>
                                <ul className='list-disc text-primary pl-5 mt-3'>
                                    <li className="mb-1 text-sm">
                                        <span className="text-black">Unit Price: {formatCurrency(product?.unitCost || 0)}</span>
                                    </li>

                                    <li className='mb-1 text-sm'><span className='text-black'>Length: {product?.length}</span></li>
                                    <li className='mb-1 text-sm'><span className='text-black'>width: {product?.width}</span></li>
                                    <li className='mb-1 text-sm'><span className='text-black'>Volume: {product?.volume}</span></li>
                                    <li className='mb-1 text-sm'><span className='text-black'>Weight: {product?.weight}</span></li>

                                </ul>

                            </div>
                        </TabPanel>
                    </TabView>
                </div>
                <div className="mb-20">
                    <ProductCard title={`More Similar Products`} categoryId={product?.categoryID} />
                </div>
            </div>

        </div>
    );
}
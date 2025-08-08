import Loading from "@/components/shared/Loading";
import { Card } from "@/components/ui";
import Button from "@/components/ui/Button";
import { NoRecordsCard } from "@/components/ui/NoRecordsCard";
import PageBanner from "@/components/ui/PageBanner";
import { ENV } from "@/core/config/env";
import { GET_CART_LIST } from "@/core/graphql/queries/getCartList";
import { PrdShoppingCartDto } from "@/core/models/cart/shoppingCart";
import { formatCurrency } from "@/lib/format";
import { useQuery } from "@apollo/client";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
    const [loadingStates,] = useState<{ [key: number]: boolean }>({});
    const { data, loading } = useQuery(GET_CART_LIST, {
        variables: { page: 1, size: 10 }
    });

    if (loading) return <Loading />;

    const cartItems = data?.getPrdShoppingCart?.result?.prdShoppingCartDto || [];
    const totalAmount = data?.getPrdShoppingCart?.result?.totalAmount || 0;
    const vatAmount = data?.getPrdShoppingCart?.result?.vatAmount || 0;

    return (
        <>
            <PageBanner title="Cart" backgroundImage="/images/cart-banner.webp" />
            <div className="container">
                <div className="lg:flex my-10 md:my-15 gap-5">
                    <div className="w-full mb-10 lg:basis-9/12 card-shadow">
                        <div className="py-4 px-4 bg-[#252F39] text-white flex justify-between items-center">
                            <Link href="#" className="btn bg-white text-[var(--primary-color)] border border-[var(--primary-color)] transition-all hover:bg-[var(--primary-color)] hover:text-white">
                                Continue Shopping
                            </Link>
                            <p className="text-white">You have {cartItems.length} items in your cart</p>
                            <button className="btn bg-[var(--primary-color)] text-white border border-[var(--primary-color)] transition-all hover:bg-white hover:text-[var(--primary-color)]" >
                                Empty Cart
                            </button>
                        </div>
                        {cartItems.length === 0 && <NoRecordsCard />}
                        <div className="bg-white border border-gray-300">
                            {cartItems.map((item: PrdShoppingCartDto, index: number) => (
                                <div key={index} className="flex border-b border-gray-300 px-4 gap-5 mt-5 pb-5 relative">

                                    {loadingStates[item.recordID ?? 0] && (
                                        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-50 flex justify-center items-center">
                                            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                        </div>
                                    )}

                                    <div className="basis-3/12 bg-white card-shadow border border-gray-300 relative">
                                        <Image src={item.productImage ? `${ENV.IMAGE_URL}${item.productImage}` : '/images/no-image.webp'} height={466} width={595} className="w-full object-fit h-full" alt={item.productName || ""} />
                                    </div>
                                    <div className="basis-9/12 relative">
                                        <p className="text-lg mb-4 font-semibold">{item.productName}</p>
                                        <p className="text-sm mb-2">
                                            {item.description ? (item.description.length > 150 ? item.description.slice(0, 150) + '...' : item.description) : 'No description available'}
                                        </p>
                                        <p className="text-lg font-semibold mb-2">{formatCurrency(item.totalPrice ?? 0)}</p>
                                        <p className="uppercase mb-2">Quantity</p>
                                        <div className="flex gap-4">
                                            <div className="quntity-input-box relative">
                                                <input type="number" value={item.quantity ?? 0}
                                                    className="form-control border border-gray-300 text-sm w-full h-[35px] px-3 font-semibold text-center" />
                                                <button className="bg-secondary absolute left-0 h-[35px] w-[35px] text-center text-white cursor-pointer">
                                                    {loadingStates[item.recordID ?? 0] ? "..." : <FontAwesomeIcon icon={faMinus} />}
                                                </button>
                                                <button className="bg-secondary absolute right-0 h-[35px] w-[35px] text-center text-white cursor-pointer">
                                                    {loadingStates[item.recordID ?? 0] ? "..." : <FontAwesomeIcon icon={faPlus} />}
                                                </button>
                                            </div>
                                            <button className="flex justify-center items-center px-4 bg-[var(--primary-color)] text-sm text-white border border-[var(--primary-color)] transition-all hover:bg-white hover:text-[var(--primary-color)] cursor-pointer" disabled={loadingStates[item.recordID ?? 0]}>
                                                {loadingStates[item.recordID ?? 0] ? "Removing..." : "Remove"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <div className="w-full lg:basis-3/12">
                        <div className="bg-white py-10 px-5 border border-gray-300 card-shadow text-center">
                            <p className="mb-2 text-center">Your Cart Total</p>
                            <p className="mb-2 text-center text-3xl font-semibold">{formatCurrency(totalAmount)}</p>
                            <div className="flex justify-center mb-1 gap-2">
                                <span>Vat :</span>
                                <span>{formatCurrency(vatAmount)}</span>
                            </div>
                            <p className="text-center mb-3">Pay Today Only</p>
                            <button className="px-4 bg-[var(--primary-color)] text-white border border-[var(--primary-color)] transition-all hover:bg-white hover:text-[var(--primary-color)] cursor-pointer"
                            >
                                Pay Now
                            </button>
                        </div>
                    </div> */}
                    <div className='lg:basis-6/12 xl:basis-5/12 2xl:basis-4/10'>
                        <Card
                            title='Order Summary'
                            className='pt-20 2xl:mx-5 relative h-auto'
                            titleClassName='text-xl sm:text-xl lg:text-xl xl:text-2xl font-medium'
                        >
                            <div className='flex justify-between border-b border-gray-300 mb-2 pb-4'>
                                <p><span className='font-semibold'>Order Sub Total (A)</span> : </p>
                                <p className='text-primary font-semibold'>{formatCurrency(totalAmount)}</p>
                            </div>
                            <div className='flex justify-between border-b border-gray-300 pb-4'>
                                <p><span className='font-semibold'>VAT (15%)(B)</span> : </p>
                                <p className='text-primary font-semibold'>{formatCurrency(vatAmount)}</p>
                            </div>
                            <div className='flex justify-between border-b border-gray-300 pb-4 pt-4 max-[500]:-mx-5 -mx-10 max-[500]:px-5 px-10 -mb-10 bg-secondary text-white'>
                                <p><span className='font-semibold'>Total(A+B)</span> : </p>
                                <p className='font-semibold'>{formatCurrency(totalAmount)}</p>
                            </div>
                            <div className="flex justify-center mt-20">
                                <Button className="px-4 bg-[var(--primary-color)] text-white border border-[var(--primary-color)] transition-all hover:bg-white hover:text-[var(--primary-color)] cursor-pointer">
                                    Proceed to Checkout
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
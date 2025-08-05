import Slider, { LazyLoadTypes } from "react-slick";
import Link from "next/link";
import { useQuery } from '@apollo/client';
import { GET_PROVINCE } from "@/core/graphql/queries/getProvinces";
import { City } from "@/core/models/location/city";
import { Province } from "@/core/models/location/province";
import { GET_CITIES } from "@/core/graphql/queries/getCities";
import slugify from "slugify";


export default function ProvinceWithCities() {
    const { loading: provinceLoading, data: provinceData } = useQuery(GET_PROVINCE);
    const { loading: cityLoading, data: cityData } = useQuery(GET_CITIES);

    if (cityLoading || provinceLoading) return <div>Loading...</div>;

    const cities: City[] = cityData?.getCity?.result || [];
    const provinces: Province[] = provinceData?.getProvince?.result || [];
    const citiesByProvince = groupCitiesByProvince(cities, provinces);

    const sliderSettings = {
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        lazyLoad: 'progressive' as LazyLoadTypes,
        responsive: [
            {
                breakpoint: 1280,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <>
            <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-4 text-center">
                Manufacturing businesses in South Africa by province
            </h2>
            <div className="container">
                <Slider className="businessList" {...sliderSettings}>
                    {citiesByProvince.map((province, index) => (
                        <div className="px-0 md:px-5" key={index}>
                            <div className="bg-white p-5 text-center relative h-full border border-transparent hover:border-primary transition duration-150 ease-in-out shadow">
                                <div className="text-white w-1/2 absolute top-0 p-2 left-1/2 bg-primary -translate-x-1/2 rounded-bl-lg rounded-br-lg z-10 h-[50px] text-sm flex items-center justify-center">
                                    <Link
                                        href={`/manufacturing/businesses?province=${slugify(province.provinceName)}`}
                                        className="uppercase text-center"
                                    >
                                        {province.provinceName}
                                    </Link>
                                </div>
                                <ul className="mt-12 max-h-60 overflow-y-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300">
                                    {province.cities.map((city, idx) => (
                                        <li className="mb-1.5" key={idx}>
                                            <Link
                                                href={`/manufacturing/businesses?province=${slugify(province.provinceName)}&city=${slugify(city.cityName)}`}
                                                className="transition-all duration-300 hover:tracking-wide hover:text-primary"
                                            >
                                                {city.cityName}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

function groupCitiesByProvince(cities: City[], provinces: Province[]) {
    debugger;
    const cityMap = new Map<string, City[]>();

    cities
        .filter(city => city.isActive)
        .forEach(city => {
            const provinceId = String(city.provinceId);
            if (provinceId == null) return;
            if (!cityMap.has(provinceId)) cityMap.set(provinceId, []);
            cityMap.get(provinceId)?.push(city);
        });

    return provinces
        .filter(province => province.isActive)
        .map(province => {
            const provinceCities = cityMap.get(province.provinceId) || [];
            return {
                ...province,
                cities: provinceCities.sort((a, b) => a.cityName.localeCompare(b.cityName))
            };
        })
        .filter(p => p.cities.length > 0)
        .sort((a, b) => a.provinceName.localeCompare(b.provinceName));
}

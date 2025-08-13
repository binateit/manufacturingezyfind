"use client"
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation';
import Menu from './Header/Menu';
import TopBar from './Header/TopBar';
// import Search from './Search';
import { useAppUI } from '@/contexts/AppUIContext';
import { GlobalFilter } from '@/core/models/filters/globalfilter';
import { slugify } from '@/lib/slugify';
import Logo from './Header/Logo';
import Search from './Search';


export default function Header() {
  const router = useRouter();
  const { toggleMobileMenu, isGlobalSearchOpen, toggleGlobalSearch } = useAppUI();

  const [globalFilter, setGlobalFilter] = useState<GlobalFilter>({
    keyword: '',
  });

  const handleSearch = () => {
    const query: Record<string, string> = {};

    if (globalFilter.keyword) query.text = slugify(globalFilter.keyword.trim());
    if (globalFilter.provinceName) query.province = slugify(globalFilter.provinceName);
    if (globalFilter.cityName) query.city = slugify(globalFilter.cityName);
    if (globalFilter.suburbName) query.suburb = slugify(globalFilter.suburbName);
    if (globalFilter.categoryName) query.category = slugify(globalFilter.categoryName);

    const searchParams = new URLSearchParams(query).toString();
    router.push(`/manufacturing/businesses?${searchParams}`);
    toggleGlobalSearch();
  };

  return (
    <>
      <>
        <div className="top-header">
          <TopBar />
        </div>
        <div className="container">
          <div className="middle-header mb-2 flex justify-between lg:justify-end items-center h-auto xl:h-16 relative">
            <div className="logo w-[184px] h-[101px] xl:relative xl:bottom-5 2xl:absolute xl:left-0 2xl:bottom-0.5 basis-3/12 md:basis-2/12">
              <Logo />
            </div>
            <Menu />
            <div className='lg:hidden flex items-center'>
              <div className='md:hidden mr-3'>
                <FontAwesomeIcon icon={faSearch} className='text-lg' onClick={toggleGlobalSearch} />
              </div>
              <div className=''>
                <FontAwesomeIcon icon={faBars} className='text-lg' onClick={toggleMobileMenu} />
              </div>

            </div>
          </div>
        </div>
        <div className="bottom-header">
          <div className="container">
            <div className="header-search h-12 items-center justify-end w-auto md:before:w-full before:h-full before:bottom-0 before:bg-[var(--primary-color)] 2xl:before:-right-[52%] xl:before:-right-[40%] md:before:-right-[22%] before:right-[-80px] before:w-[800px] relative z-10 skew-left flex md:flex gap-3">
              <p className='text-white text-sm pr-2 hidden lg:block'>Search Company / Products : </p>
              <div className='relative max-[450px]:w-full'>
                <div className='bg-white flex justify-end max-md:w-full'>
                  <input type='text' placeholder='Enter Company / Product Name' className='text-xs px-4 py-1.5 max-[450px]:w-full w-[350px] lg:w-[300px]' onFocus={toggleGlobalSearch} value={globalFilter.keyword}
                    onChange={(e) =>
                      setGlobalFilter((prev) => ({ ...prev, keyword: e.target.value }))
                    }></input>
                  <button className='pl-3 pr-3 cursor-pointer border-l border-gray-300' title="Search" aria-label="Search" onClick={handleSearch}>
                    <FontAwesomeIcon icon={faSearch} className='text-sm text-primary' />
                  </button>
                </div>
                {isGlobalSearchOpen && <Search globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />}
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  )
}

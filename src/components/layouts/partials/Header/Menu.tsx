import { useAppUI } from "@/contexts/AppUIContext";
import { MENU_ITEMS, MenuItem } from "@/core/constants";
import Link from "next/link";
import { FC } from "react";


interface MenuProps {
    isMobileMenu?: boolean
}


const Menu: FC<MenuProps> = ({ isMobileMenu = false }) => {
    const { toggleMobileMenu } = useAppUI();

    const handleClick = () => {
        if (isMobileMenu) {
            toggleMobileMenu();
        }
    };

    return (
        <ul
            className={
                isMobileMenu
                    ? "flex flex-col h-full pt-10"
                    : "hidden lg:flex gap-x-5 lg:flex-wrap"
            }
        >
            {MENU_ITEMS.map((item: MenuItem) => (
                <li key={item.href}>
                    <Link href={item.href} className={
                        isMobileMenu
                            ? "py-[6px] block px-5 text-sm"
                            : "text-sm hover:text-[var(--primary-color)] whitespace-nowrap"
                    } onClick={handleClick}>
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default Menu
import { useState } from 'react';
import { Burger, NavModal } from '@/components/Header';
import SwitchThemeButton from '@/components/SwitchThemeButton';

function NavMobile() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Burger
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            {isOpen && <NavModal setIsOpen={setIsOpen} />}

            <SwitchThemeButton className="hidden w-[28px] lg:flex" />
        </>
    );
}

export default NavMobile;

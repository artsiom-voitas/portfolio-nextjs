import { useState } from 'react';
import { Burger, NavModal } from '@/components/Header';

function NavMobile() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Burger
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <NavModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </>
    );
}

export default NavMobile;

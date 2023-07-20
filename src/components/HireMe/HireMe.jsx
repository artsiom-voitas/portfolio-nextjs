import Link from 'next/link';
import { CircularText } from '../icons';

function HireMe() {
    return (
        <div className="fixed bottom-4 left-4 flex items-center justify-center overflow-hidden">
            <div className="relative flex h-auto w-48 items-center justify-center">
                <CircularText className={'animate-spin-slow fill-dark'} />
                <Link
                    href={'mailto:artsiom.voitas@gmail.com'}
                    className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-solid border-dark bg-dark font-semibold text-light shadow-md hover:bg-light hover:text-dark">
                    Hire me
                </Link>
            </div>
        </div>
    );
}

export default HireMe;

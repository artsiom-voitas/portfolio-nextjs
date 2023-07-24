import AnimatedNumber from '@/components/AnimatedNumber';
import Image from 'next/image';
import profilePic from '@/assets/images/profile-pic.jpeg';

function Biography() {
    return (
        <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Biography</h2>
                <p className="font-medium">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugiat
                    quidem rem doloribus dolorem, commodi iure voluptatem! Ad obcaecati labore
                    explicabo iusto magnam dolore facilis aliquid placeat inventore veniam.
                    Voluptas.
                </p>
                <p className="my-4 font-medium">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, nesciunt
                    cupiditate! Adipisci maiores hic alias repellendus nemo esse, quisquam eaque est
                    libero quae debitis laborum dolores mollitia, vel ipsam ipsum. Alias veritatis,
                    quisquam earum reprehenderit fugit itaque nostrum sapiente dolore molestias!
                    Nulla mollitia aliquam, quas explicabo provident magnam, earum reprehenderit
                    autem eos ut nemo, quia temporibus animi numquam fugiat voluptas?
                </p>
                <p className="font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mollitia
                    perferendis, quasi deleniti soluta quis distinctio maiores, neque cumque vel
                    explicabo sit harum excepturi ex. Quasi consequatur excepturi placeat expedita!
                    Laudantium, debitis iure consequuntur commodi sapiente autem voluptatum soluta
                    ad tempore velit veniam voluptate architecto magnam qui placeat earum. Odio,
                    dicta ipsa sunt non beatae repudiandae aliquam commodi illo culpa?
                </p>
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
                <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark"></div>
                <Image
                    src={profilePic}
                    alt="Artsiom Voitas picture"
                    className="h-auto w-full rounded-2xl"
                />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-around">
                <div className="flex flex-col items-end justify-center">
                    <span className="inline-block text-7xl font-bold">
                        <AnimatedNumber number={10} />+
                    </span>
                    <h2 className="text-xl font-medium capitalize text-dark/75">
                        projects completed
                    </h2>
                </div>
                <div className="flex flex-col items-end justify-center">
                    <span className="inline-block text-7xl font-bold">
                        <AnimatedNumber number={3} />
                    </span>
                    <h2 className="text-xl font-medium capitalize text-dark/75">
                        month of commercial experience
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Biography;


import banner from '../assets/banner-stack.png'; 

const Banner = () => {
    return (
        <section className="container mx-auto px-4 py-10 md:py-14">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-1/2 w-full text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-black">Build Your Ideal</h1>
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Development Stack</h1>
                    <p className="mt-4 text-lg text-gray-600">Explore frontend, backend, database, and tooling options,compare them side by side, and put together the stack that fits yournext project.</p>
                    <div className="flex justify-center md:justify-start gap-2 mt-6">
                        <button className="btn btn-secondary">Explore Technologies</button>
                        <button className="btn ">Learn More</button>
                    </div>
                </div>
                <div className="md:w-1/2 w-full flex justify-center">
                    <img src={banner} alt="Development Stack" className="max-w-md h-auto" />
                </div>
            </div>
        </section>
    );
};

export default Banner;
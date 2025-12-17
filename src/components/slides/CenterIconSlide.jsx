export const CenterIconSlide = ({ slide }) => {
    return (
        <div className="text-center max-w-5xl animate-fadeIn flex flex-col items-center gap-8 px-4">
            <div className="mb-8 p-6 bg-white/5 rounded-full backdrop-blur-md">
                {slide.icon}
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                {slide.title}
            </h2>

            <p className="text-2xl text-gray-400 max-w-3xl mt-4">
                {slide.desc}
            </p>
        </div>
    );
};

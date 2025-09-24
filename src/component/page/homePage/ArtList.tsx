import {Link} from "react-router-dom";


const data = [
    {
        href:'/graphics',
        imageSRC: '/image/tajasomi.png',
        alt: 'هنرستان دخترانه پیک آفتاب گرافیک',
        nameStudy: 'هنر تجسمی',
        customClassNameForParentDiv: 'bg-gray-400/50 shadow-gray-400/40 '

    },
    {
        href:'/graphics',
        imageSRC: '/image/pen.png',
        alt: 'هنرستان دخترانه پیک آفتاب گرافیک',
        nameStudy: 'هنر موسیقی',
        customClassNameForParentDiv: 'bg-gray-400/50 shadow-gray-400/40 '

    },
    {
        href:'/graphics',
        imageSRC: '/image/aks.png',
        alt: 'هنرستان دخترانه پیک آفتاب گرافیک',
        nameStudy: 'هنر رسانه',
        customClassNameForParentDiv: 'bg-gray-400/50 shadow-gray-400/40 '

    },
    {
        href:'/sewing-design',
        imageSRC: '/image/music.png',
        alt: 'هنرستان دخترانه پیک آفتاب طراحی دوخت',
        nameStudy: 'هنر نوشتاری',
        customClassNameForParentDiv: 'bg-amber-400/40 shadow-amber-400/40'
    },
    {
        href:'/photographic',
        imageSRC: '/image/dokht.png',
        alt: 'هنرستان دخترانه پیک ��فتاب عکاسی',
        nameStudy: 'هنر کاربری',
        customClassNameForParentDiv: ' bg-[#ff6d34]/60 shadow-[#ff6d34]/40'
    },
    {
        href:'/architecture',
        imageSRC: '/image/karbordi.png',
        alt: 'هنرستان دخترانه پیک آفتاب عکاسی',
        nameStudy: 'هنر سنتی',
        customClassNameForParentDiv: ' bg-[#ff6d34]/50 shadow-[#ff6d34]/40'
    }

];
const ArtList = () => {
    return (
        <div className="grid grid-cols-2 xl:grid-cols-6 gap-3 md:gap-6 mx-auto my-7">
            {data.map((item, index: number) => (
                <Link key={index} to={item.href}
                      className={`w-[170px] cursor-pointer h-36 md:w-72 md:h-52 rounded-3xl ${item.customClassNameForParentDiv} shadow-lg `}>
                    <div className=" relative ">
                        <img
                            src={item.imageSRC}
                            alt={item.alt}
                            className="absolute -right-3 h-[100px] w-[100px] md:-right-4 md:h-[170px] md:w-[170px] object-cover"
                        />
                        <strong
                            className={`text-white text-lg md:text-2xl absolute md:left-3 left-2  top-8 `}>{item.nameStudy}</strong>
                        <div className=" absolute bg-amber-50 rounded-2xl px-2 left-5 top-20 md:top-[110px] ">
                            <p className="text-customBlue text-[16px] md:text-xl font-bold">معرفی رشته</p>
                        </div>
                        <div
                            className=" absolute bg-customBlue rounded-2xl text-white p-[2px] px-2  text-[12px] md:text-[18px] font-bold  right-5 top-28 md:top-[165px] md:right-16">
                            <p>فرصت های شغلی رشته</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ArtList;

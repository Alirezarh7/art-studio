

const Honors = () => {

    const data = [

        {
            imageSRC: '/image/راه هنر.PNG',
            imageALT: 'راه هنر',
            text: 'بیش از ۲۰ سال تجربه در تربیت نسل آینده هنرمندان استان'
        },
        {
            imageSRC: '/image/راه هنر.PNG',
            imageALT: 'راه هنر',
            text: 'برگزارکننده موفق ترین نمایشگاه های دانش آموزی'
        },
        {
            imageSRC: '/image/راه هنر.PNG',
            imageALT: 'راه هنر',
            text: 'دارنده بیشترین جوایز هنری و علمی در میان هنرستان های استان'
        },

    ];

    return (
        <div className="bg-white/70 mt-5 flex py-2 rounded-lg justify-between items-center ">
            {data.map((item, index) => (
                <div key={index} className="flex flex-col justify-around mx-2">
                    <div className='w-full flex justify-center '>
                        <img  src={item.imageSRC} alt={item.imageALT} height={80}
                                width={80} />
                    </div>
                    <div className='w-full text-customBlue flex justify-center p-1'>
                        <strong className="text-[12px] text-center">
                            {item.text}
                        </strong>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Honors;
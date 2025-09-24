import { PiStudent } from 'react-icons/pi';

import Carousel from "../component/page/homePage/Carousel.tsx";
import ArtList from "../component/page/homePage/ArtList.tsx";
import Honors from "../component/page/homePage/Honor.tsx";
import ResumeSlider from "../component/page/homePage/ListSlider.tsx";

const MainHomePageComponent = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <Carousel />
            <div className="w-full px-0.5 flex flex-col mt-10 ">
                <div className=" w-fit bg-customBlue flex p-1 px-2 rounded-3xl">
                    <PiStudent className="w-7 h-7 ml-1" />
                    <strong className="">
                        رشته های هنرستان پیک آفتاب
                    </strong>
                </div>
                <ArtList />
                <Honors />
                <ResumeSlider />
            </div>
        </div>
    );
};

export default MainHomePageComponent;

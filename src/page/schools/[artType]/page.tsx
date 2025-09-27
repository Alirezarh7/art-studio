import type { FC } from "react";
import { useParams } from "react-router-dom";
import SchoolsCard from "../../../component/page/schoolsPage/SchoolsCard.tsx";

const fake_data = [
  {
    id: 1,
    name: "آموزشگاه نگاره",
    disciplines: ["نقاشی رنگ روغن", "آبرنگ", "طراحی خطی"],
    address: "خیابان ولیعصر، نبش کوچهٔ نغمه، پلاک 12",
    city: "تهران",
    phone: "+98-21-8844-1234",
    email: "info@negare-studio.fake",
    website: "https://example.com/negare",
    image: "/image/slider/4.jpg",
    description: "آموزشگاه نگاره دوره‌های تخصصی نقاشی و طراحی را برای مبتدی تا پیشرفته برگزار می‌کند. کلاس‌ها به‌صورت گروهی و خصوصی و با تمرکز روی بیان تصویری و تکنیک‌های رنگ اجرا می‌شود.",
    rating: 4.6,
    price_range: "متوسط",
    opening_hours: {
      shanbe: "10:00-20:00",
      yekShanbe: "10:00-20:00",
      doShanbe: "10:00-20:00",
      sehShanbe: "10:00-20:00",
      chaharShanbe: "10:00-20:00",
      panjShanbe: "10:00-20:00",
      jomea: "تعطیل",
    },
    social: {
      instagram: "@negare_studio",
      telegram: "t.me/negare_studio",
    },
  },
  {
    id: 2,
    name: "آتلیهٔ نور و لنز",
    disciplines: ["عکاسی پرتره", "عکاسی تبلیغاتی", "ادیت و ریتاچ"],
    address: "بلوار کشاورز، پلاک 45، طبقهٔ 2",
    city: "تهران",
    phone: "+98-21-6677-4455",
    email: "contact@noor-lens.fake",
    website: "https://example.com/noorlens",
    image: "/image/slider/4.jpg",
    description: "آتلیهٔ نور و لنز، مجهز به استودیو نورپردازی و دوربین‌های حرفه‌ای. دوره‌های عملی عکاسی و ورک‌شاپ‌های ادیت کاربردی برگزار می‌شود.",
    rating: 4.4,
    price_range: "متوسط-بالا",
    opening_hours: {
      shanbe: "09:30-18:30",
      yekShanbe: "09:30-18:30",
      doShanbe: "09:30-18:30",
      sehShanbe: "09:30-18:30",
      chaharShanbe: "09:30-18:30",
      panjShanbe: "09:30-18:30",
      jomea: "تعطیل",
    },
    social: {
      instagram: "@noor_and_lens",
    },
  },
  {
    id: 3,
    name: "کارگاه سفال آفتاب",
    disciplines: ["سفال‌گری", "چرخ‌کاری", "سرامیک هنری"],
    address: "خیابان کریم‌خان، کوچهٔ آب، پلاک 9",
    city: "اصفهان",
    phone: "+98-31-3222-7788",
    email: "info@aftab-ceramic.fake",
    website: "https://example.com/aftab",
    image: "/image/slider/4.jpg",
    description: "کارگاه آفتاب مجموعه‌ای‌ست مناسب برای آموزش سفال و سرامیک. دوره‌های فشرده و طولانی‌مدت با امکان اجارهٔ میز کار برای هنرجویان فعال ارائه می‌شود.",
    rating: 4.8,
    price_range: "اقتصادی",
    opening_hours: {
      shanbe: "11:00-19:00",
      yekShanbe: "11:00-19:00",
      doShanbe: "11:00-19:00",
      sehShanbe: "11:00-19:00",
      chaharShanbe: "11:00-19:00",
      panjShanbe: "11:00-19:00",
      jomea: "تعطیل",
    },
    social: {},
  },
  {
    id: 4,
    name: "استودیو حرکت",
    disciplines: ["رقص معاصر", "باله", "کلاس‌های حرکتی برای بازیگران"],
    address: "میدان هفت‌تیر، پلاک 3، واحد 5",
    city: "شیراز",
    phone: "+98-71-3620-9900",
    email: "studio@harekat.fake",
    website: "https://example.com/harekat",
    image: "/image/slider/4.jpg",
    description: "استودیو حرکت کلاس‌های رقص و حرکات بدنی را برای تمامی سنین ارائه می‌دهد. مناسب برای علاقه‌مندان به نمایش و تئاتر موزیکال.",
    rating: 4.3,
    price_range: "متوسط",
    opening_hours: {
      shanbe: "16:00-22:00",
      yekShanbe: "16:00-22:00",
      doShanbe: "16:00-22:00",
      sehShanbe: "16:00-22:00",
      chaharShanbe: "16:00-22:00",
      panjShanbe: "10:00-14:00",
      jomea: "تعطیل",
    },
    social: {
      instagram: "@studio_harekat",
    },
  },
  {
    id: 5,
    name: "آکادمی صدا",
    disciplines: ["آواز پاپ", "آواز کلاسیک", "تئوری موسیقی", "تولید موسیقی"],
    address: "خیابان انقلاب، پلاک 120، واحد 2",
    city: "تبریز",
    phone: "+98-41-3331-4455",
    email: "hello@akademiseda.fake",
    website: "https://example.com/akademiseda",
    image: "/image/slider/4.jpg",
    description: "آکادمی صدا دوره‌های خوانندگی، هارمونی و تولید موسیقی را با اساتید با تجربه ارائه می‌دهد. دارای اتاق‌های تمرین و استودیو ضبط مجهز.",
    rating: 4.7,
    price_range: "بالا",
    opening_hours: {
      shanbe: "12:00-21:00",
      yekShanbe: "12:00-21:00",
      doShanbe: "12:00-21:00",
      sehShanbe: "12:00-21:00",
      chaharShanbe: "12:00-21:00",
      panjShanbe: "12:00-21:00",
      jomea: "12:00-21:00",
    },
    social: {
      instagram: "@akademiseda",
      youtube: "youtube.com/akademiseda",
    },
  },
];

const data = [
  {
    href: "visualArts",
    nameStudy: "هنر تجسمی",
  },
  {
    href: "musics",
    nameStudy: "هنر موسیقی",
  },
  {
    href: "mediaArt",
    nameStudy: "هنر رسانه",
  },
  {
    href: "sewing-design",
    nameStudy: "هنر نوشتاری",
  },
  {
    href: "photographic",
    nameStudy: "هنر کاربری",
  },
  {
    href: "architecture",
    nameStudy: "هنر سنتی",
  },
];

const SchoolsList: FC = () => {
  const { artType } = useParams<{ artType: string }>();
  return (
    <div className="my-20">
      <div className="w-full px-5 max-w-6xl mx-auto">
        <div className="flex flex-col gap-5 items-center justify-center">
          <h4 className="font-bold text-2xl md:text-3xl my-10">لیست آموزشگاه های {data.find((item) => item.href === artType)?.nameStudy}</h4>
          {/* <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between md:px-3">
              
          </div> */}
          <ul className="flex flex-col items-center gap-10 w-full">
            {fake_data.map((item) => {
              return (
                <SchoolsCard
                  name={item.name}
                  address={item.address}
                  city={item.city}
                  description={item.description}
                  disciplines={item.disciplines}
                  email={item.email}
                  image={item.image}
                  id={item.id}
                  opening_hours={item.opening_hours}
                  phone={item.phone}
                  price_range={item.price_range}
                  rating={item.rating}
                  social={item.social}
                  website={item.website}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SchoolsList;

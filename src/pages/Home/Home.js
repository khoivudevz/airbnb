import React, { useEffect } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import image from "../../assets/images/933-1600x700.jpg";
import TypeAnimation from "react-type-animation";
import { Link } from "react-router-dom";
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <div className="bg-black">
        <SearchBar />
        <div className="h-[400px] sm:h-[500px] lg:h-[700px] xl:h-[1000px] ">
          <div className="flex items-center justify-center h-full">
            <div className="w-[300px] h-[300px] sm:w-[700px] sm:h-[400px] xl:w-[1600px] xl:h-[800px] lg:w-[900px] lg:h-[540px] relative">
              <img
                src={image}
                alt="photo"
                className="rounded-xl w-full h-full object-cover"
              />
              <p className="fontFace text-2xl font-bold text-white absolute bottom-5 left-[4%] sm:left-[25%] lg:left-[33%] xl:left-[40%]">
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    "Hãy để trí tò mò của bạn dẫn lối! ",
                    2000,
                    "Tận hưởng chuyến hành trình tuyệt vời! ",
                    2000,
                    "Thoải mái lựa chọn nơi ở theo ý muốn! ",
                    2000,
                  ]}
                  wrapper="h2"
                  repeat={Infinity}
                  className="text-white text-3xl"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fontFace container mx-auto my-20">
        <p className="text-4xl font-bold">
          Cảm hứng cho chuyến đi tiếp theo của bạn
        </p>
        <div className="flex flex-col space-y-10  items-center justify-center sm:grid sm:space-y-0 md:gap-y-10 lg:p-[107px] xl:p-0 sm:grid-cols-2 xl:grid-cols-4 gap-x-20 my-20">
          <Link to="/rooms">
            <div className="w-[350px] sm:w-[336px] lg:w-[350px] h-[504px] rounded-xl hover:-translate-y-5 cursor-pointer transition-all">
              <div className="w-full h-1/2">
                <img
                  src="https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_w=320"
                  alt="photo"
                  className="object-cover w-full h-full rounded-t-xl"
                />
              </div>
              <div className="w-full h-1/2 bg-purple rounded-b-xl">
                <p className="text-white text-3xl font-bold pl-4 pt-5">
                  Thành phố Đà Lạt
                </p>
              </div>
            </div>
          </Link>
          <Link to="/rooms">
            <div className="w-[350px] sm:w-[336px] lg:w-[350px] h-[504px] rounded-xl hover:-translate-y-5 cursor-pointer transition-all">
              <div className="w-full h-1/2">
                <img
                  src="https://a0.muscache.com/im/pictures/aff9e173-b551-44e4-80f3-bd9b9d632f8b.jpg?im_w=320"
                  alt="photo"
                  className="object-cover w-full h-full rounded-t-xl"
                />
              </div>
              <div className="w-full h-1/2 bg-orangelight rounded-b-xl">
                <p className="text-white text-3xl font-bold pl-4 pt-5">
                  Thành phố Vũng Tàu
                </p>
              </div>
            </div>
          </Link>
          <Link to="/rooms">
            <div className="w-[350px] sm:w-[336px] lg:w-[350px] h-[504px] rounded-xl hover:-translate-y-5 cursor-pointer transition-all">
              <div className="w-full h-1/2">
                <img
                  src="https://a0.muscache.com/im/pictures/2f5a15c7-2170-420a-9c48-9ac88a80a7fa.jpg?im_w=320"
                  alt="photo"
                  className="object-cover w-full h-full rounded-t-xl"
                />
              </div>
              <div className="w-full h-1/2 bg-orangeblood rounded-b-xl">
                <p className="text-white text-3xl font-bold pl-4 pt-5">
                  Thành phố Nha Trang
                </p>
              </div>
            </div>
          </Link>
          <Link to="/rooms">
            <div className="w-[350px] sm:w-[336px] lg:w-[350px] h-[504px] rounded-xl hover:-translate-y-5 cursor-pointer transition-all">
              <div className="w-full h-1/2">
                <img
                  src="https://a0.muscache.com/im/pictures/a1617dd0-7140-4c64-814f-384d174a78be.jpg?im_w=320"
                  alt="photo"
                  className="object-cover w-full h-full rounded-t-xl"
                />
              </div>
              <div className="w-full h-1/2 bg-purple rounded-b-xl">
                <p className="text-white text-3xl font-bold pl-4 pt-5">
                  Thành phố Huế
                </p>
              </div>
            </div>
          </Link>
        </div>
        <p className="text-4xl font-bold">Khám phá Trải nghiệm Airbnb</p>
        <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 gap-x-32 my-20">
          <div className="w-[311px] h-[464px] lg:w-[459px] lg:h-[566px] xl:w-[790px] xl:h-[800px] relative hover:-translate-y-5 cursor-pointer transition-all">
            <img
              src="https://a0.muscache.com/im/pictures/c2adcb16-6c3f-4041-86a1-afa9c303c500.jpg?im_w=720"
              alt="photo"
              className="object-cover rounded-xl"
            />
            <p className="fontFace text-4xl font-bold text-white absolute top-20 left-10 w-[16rem]">
              Những điều nên trải nghiệm trong chuyến đi của bạn
            </p>
          </div>
          <div className="w-[311px] h-[464px] lg:w-[459px] lg:h-[566px] xl:w-[790px] xl:h-[800px] relative hover:-translate-y-5 cursor-pointer transition-all">
            <img
              src="https://a0.muscache.com/im/pictures/c1bdf53f-2a19-4529-aa9b-1b0e6bd8d0ee.jpg?im_w=720"
              alt="photo"
              className="object-cover rounded-xl"
            />
            <p className="fontFace text-4xl font-bold text-white absolute top-20 left-10 w-[16rem]">
              Những điều nên trải nghiệm tại nhà
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[340px] h-[480px] md:w-[600px] md:h-[750px] lg:w-[1000px] lg:h-[500px] xl:w-[1600px] xl:h-[800px] relative hover:-translate-y-5 cursor-pointer transition-all">
            <img
              src="https://a0.muscache.com/im/pictures/0528b0f7-4c0c-47bc-9786-d91454f531ba.jpg?im_w=1200"
              alt="photo"
              className="object-cover h-full w-full rounded-xl"
            />
            <p className="text-4xl font-bold absolute bottom-20 left-20 text-white">
              Du lịch mọi nơi cùng Airbnb
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

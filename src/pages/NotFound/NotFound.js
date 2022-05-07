import React from "react";

export default function NotFound() {
  return (
    <div className="bg-white h-[700px]">
      <div className="container mx-auto my-10">
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center justify-center fontFace">
            <p className="text-6xl text-orangeblood">Rất tiếc!</p>
            <p className="text-xl text-orangeblood">
              Có vẻ chúng tôi không tìm thấy trang bạn đang tìm kiếm.
            </p>
          </div>
          <div>
            <img
              src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif"
              alt="gif"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

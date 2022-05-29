import React from "react";
import { BiWorld } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-grayBg py-20 mt-20 absolute relative">
      <div className="container mx-auto fontFace">
        <div className="ml-8 flex flex-col items-start justify-center md:grid md:ml-0 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          <div className="space-y-1">
            <p className="font-bold hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
              Hỗ trợ
            </p>
            <p className="hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
              Trung tâm trợ giúp
            </p>
            <p className="hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
              Thông tin an toàn
            </p>
            <p className="hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
              Hỗ trợ người khuyết tật
            </p>
            <p className="hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
              Các tùy chọn hủy
            </p>
            <p className="hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
              Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi
            </p>
            <p className="hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
              Báo cáo lo ngại của hàng xóm
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-bold hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
              Cộng đồng
            </p>
            <p className="hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
              Airbnb.org: nhà ở cứu trợ
            </p>
            <p className="hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
              Hỗ trợ dân tị nạn Afghanistan
            </p>
            <p className="hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
              Chống phân biệt đối xử
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-bold hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
              Đón tiếp khách
            </p>
            <p className="hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
              AirCover cho Chủ nhà
            </p>
            <p className="hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
              Xem tài nguyên đón tiếp khách
            </p>
            <p className="hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
              Truy cập diễn đàn cộng đồng
            </p>
            <p className="hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
              Đón tiếp khách có trách nhiệm
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-bold hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
              Giới thiệu
            </p>
            <p className="hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
              Trang tin tức
            </p>
            <p className="hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
              Tìm hiểu các tính năng mới
            </p>
            <p className="hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
              Thư ngỏ từ các nhà sáng lập
            </p>
            <p className="hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
              Cơ hội nghề nghiệp
            </p>
            <p className="hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
              Nhà đầu tư
            </p>
          </div>
        </div>
        <div className="border-t-2 border-t-gray py-5 my-5">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex items-center justify-center space-x-4">
              <p>© 2022 Airbnb, Inc.</p>
              <p className="hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
                Quyền riêng tư
              </p>
              <p className="hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
                Điều khoản
              </p>
              <p className="hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
                Sơ đồ trang web
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <p className="flex items-center justify-center ">
                <BiWorld /> Tiếng Việt(VN)
              </p>
              <p>$ USD</p>
              <BsFacebook />
              <BsInstagram />
              <BsTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

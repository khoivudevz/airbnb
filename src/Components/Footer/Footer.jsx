import React from "react";
import { BiWorld } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-grayBg py-20 mt-20 absolute relative">
      <div className="container mx-auto fontFace">
        <div className="flex flex-col items-start justify-center md:grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-1">
            <p className="font-bold">Hỗ trợ</p>
            <p>Trung tâm trợ giúp</p>
            <p>Thông tin an toàn</p>
            <p>Hỗ trợ người khuyết tật</p>
            <p>Các tùy chọn hủy</p>
            <p>Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</p>
            <p>Báo cáo lo ngại của hàng xóm</p>
          </div>
          <div className="space-y-1">
            <p className="font-bold">Cộng đồng</p>
            <p>Airbnb.org: nhà ở cứu trợ</p>
            <p>Hỗ trợ dân tị nạn Afghanistan</p>
            <p>Chống phân biệt đối xử</p>
          </div>
          <div className="space-y-1">
            <p className="font-bold">Đón tiếp khách</p>
            <p>AirCover cho Chủ nhà</p>
            <p>Xem tài nguyên đón tiếp khách</p>
            <p>Truy cập diễn đàn cộng đồng</p>
            <p>Đón tiếp khách có trách nhiệm</p>
          </div>
          <div className="space-y-1">
            <p className="font-bold">Giới thiệu</p>
            <p>Trang tin tức</p>
            <p>Tìm hiểu các tính năng mới</p>
            <p>Thư ngỏ từ các nhà sáng lập</p>
            <p>Cơ hội nghề nghiệp</p>
            <p>Nhà đầu tư</p>
          </div>
        </div>
        <div className="border-t-2 border-t-gray py-5 my-5">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex items-center justify-center space-x-4">
              <p>© 2022 Airbnb, Inc.</p>
              <p>Quyền riêng tư</p>
              <p>Điều khoản</p>
              <p>Sơ đồ trang web</p>
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

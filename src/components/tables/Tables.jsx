"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TableSwiper = () => {
  return (
    <>
      {/* Mobil - Swiper */}
      <div className="md:hidden">
        <p className="flex justify-center mb-10">Swipe for at booke bord!</p>
        <Swiper spaceBetween={20} slidesPerView={1.2} centeredSlides={true}>
          <SwiperSlide>
            <img src="/assets/table/table_1.png" alt="lille bord" className="w-40 mx-auto" />
            <p className="text-white text-center mt-4">Bord til 2-4 personer</p>
            <select className="mt-3 w-[170px] block mx-auto bg-black text-white border border-white rounded p-2">
              <option value="">Vælg bordnr</option>
              <option value="1">Bord 1</option>
              <option value="2">Bord 2</option>
              <option value="4">Bord 4</option>
              <option value="6">Bord 6</option>
              <option value="7">Bord 7</option>
              <option value="9">Bord 9</option>
              <option value="11">Bord 11</option>
              <option value="12">Bord 12</option>
              <option value="14">Bord 14</option>
            </select>
          </SwiperSlide>

          <SwiperSlide>
            <img src="/assets/table/table_2.png" alt="mellem bord" className="w-40 mx-auto" />
            <p className="text-white text-center mt-4">Bord til 3-6 personer</p>
            <select className="mt-3 w-[170px] mx-auto block bg-black text-white border border-white rounded p-2">
              <option value="">Vælg bordnr</option>
              <option value="3">Bord 3</option>
              <option value="8">Bord 8</option>
              <option value="13">Bord 13</option>
            </select>
          </SwiperSlide>

          <SwiperSlide>
            <img src="/assets/table/table_3.png" alt="stort bord" className="w-40 mx-auto" />
            <p className="text-white text-center mt-4">Bord til 5-8 personer</p>
            <select className="mt-3 w-[170px] mx-auto block bg-black text-white border border-white rounded p-2">
              <option value="">Vælg bordnr</option>
              <option value="5">Bord 5</option>
              <option value="10">Bord 10</option>
              <option value="15">Bord 15</option>
            </select>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Desktop - Grid */}
      <div className="hidden md:grid grid-cols-5 gap-4">
        <div className="relative">
          <img src="/assets/table/table_1.png" alt="table" className="w-full" />
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">1</span>
        </div>
        <div className="relative">
          <img src="/assets/table/table_1.png" alt="table" className="w-full" />
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">2</span>
        </div>
        <div className="relative">
          <img src="/assets/table/table_2.png" alt="table" className="w-full" />
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">3</span>
        </div>
        <div className="relative">
          <img src="/assets/table/table_1.png" alt="table" className="w-full" />
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">4</span>
        </div>
        <div className="relative">
          <img src="/assets/table/table_3.png" alt="table" className="w-full" />
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">5</span>
        </div>
        <div className="relative">
          <img src="/assets/table/table_1.png" alt="table" className="w-full" />
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">6</span>
        </div>
        <div className="relative">
          <img src="/assets/table/table_1.png" alt="table" className="w-full" />
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">7</span>
        </div>
        <div className="relative">
          <img src="/assets/table/table_2.png" alt="table" className="w-full" />
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">8</span>
        </div>
        <div className="relative">
          <img src="/assets/table/table_1.png" alt="table" className="w-full" />
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">9</span>
        </div>
        <div className="relative">
          <img src="/assets/table/table_3.png" alt="table" className="w-full" />
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">10</span>
        </div>
        <div className="relative">
          <img src="/assets/table/table_1.png" alt="table" className="w-full" />
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">11</span>
        </div>
        <div className="relative">
          <img src="/assets/table/table_1.png" alt="table" className="w-full" />
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">12</span>
        </div>
        <div className="relative">
          <img src="/assets/table/table_2.png" alt="table" className="w-full" />
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">13</span>
        </div>
        <div className="relative">
          <img src="/assets/table/table_1.png" alt="table" className="w-full" />
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">14</span>
        </div>
        <div className="relative">
          <img src="/assets/table/table_3.png" alt="table" className="w-full" />
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">15</span>
        </div>
      </div>
    </>
  );
};

export default TableSwiper;

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

import "./index.scss";

import logo from "@/images/logo.png";

function Carousel(props) {
    console.log(props);
    const { data } = props;
    const datePreProcess = (date) => {
        // 結構會類似 2022/05/04
        const [year, month, day] = date.split("/");
        return { year: year, month: month, day: day };
    };
    const pagination = {
        clickable: true,
        bulletActiveClass: "date-active",
        bulletClass: "date",

        renderBullet: function (index, className) {
            console.log("im classname ", className);
            const { year, month, day } = datePreProcess(data[index].date);
            // return '<span class="' + className + '">' + (index + 1) + "</span>";
            return `
            <div class="${className}">
            <div class="sub-date">${month}/${day}</div>
            </div>`;
        },
    };
    return (
        <Swiper
            pagination={pagination}
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={(e) => console.log("slide change", e)}
            onSwiper={(swiper) => console.log("swiper", swiper)}
        >
            {props.children}
        </Swiper>
    );
}

export default Carousel;

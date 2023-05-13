import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function RoomFeatures() {
  const sliderRef = useRef(null);
  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 3.3,
    slidesToScroll: 1,
    ref: sliderRef,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <div>
      <div className="h-[120vh] w-auto  lg:overflow-hidden mb-10 ">
        <div className="relative ">
          <div className="absolute ">
            <img
              className="lg:ml-20 ml-0 lg:w-72 w-60 "
              src="assets/Frame 1000004157.png"
              alt=""
            />
          </div>
          <div className="absolute  lg:top-20 lg:left-[320px] md:left-[220px] md:top-16 top-14 left-8">
            <div className="lg:text-5xl md:text-3xl text-2xl font-semibold ">Rooms</div>
            <div className="lg:text-xl md:text-lg text-sm text-gray-600 font-normal mt-4">
              Made for sophisticarted relaxation
            </div>
          </div>
          <div className="absolute lg:top-20 lg:right-36 md:top-20 top-16 right-8">
            <div className="flex justify-between gap-8">
              <button onClick={previous}>
                <img
                  className="lg:w-16 md:w-16 w-8"
                  src="assets/left.png"
                  alt=""
                />
              </button>
              <button onClick={next}>
                <img
                  className="lg:w-16  md:w-16 w-8"
                  src="assets/right.png"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div class="relative top-48 lg:left-14 left-4 md:left-2 overflow-hidden mb-10">
            <Slider {...settings} ref={sliderRef}>
              <div class="relative group overflow-hidden">
                <div class="max-w-[320px] rounded overflow-hidden shadow-lg bg-[#EDECE3] transform transition-transform duration-200 ease-out hover:scale-105">
                  <div class="flex justify-center items-center">
                    <img
                      class="w-[280px] pt-5 group-hover:blur-[10px]  transition-all duration-200 ease-out"
                      src="assets/Rectangle 274.png"
                      alt="Card image"
                    />
                    <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out absolute inset-x-0 bottom-0 h-40 left-10 flex  text-white">
                      <div class="font-normal text-lg mb-1">
                        Room Feature 1 <br />
                        <div class="font-light text-lg mb-1">
                          Lorem ipsum dolor sit amet coii adipiscing elit mus,
                          convallis morbi
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="px-4 py-4 opacity-100 group-hover:opacity-0 transition-opacity duration-200 ease-out">
                    <div class="font-normal text-lg mb-1">Room Feature 1</div>
                  </div>
                </div>
              </div>{" "}
              <div class="relative group overflow-hidden">
                <div class="max-w-[320px] rounded overflow-hidden shadow-lg bg-[#EDECE3] transform transition-transform duration-200 ease-out hover:scale-105">
                  <div class="flex justify-center items-center">
                    <img
                      class="w-[280px] pt-5 group-hover:blur-[10px]  transition-all duration-200 ease-out"
                      src="assets/Rectangle 274.png"
                      alt="Card image"
                    />
                    <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out absolute inset-x-0 bottom-0 h-40 left-10 flex  text-white">
                      <div class="font-normal text-lg mb-1">
                        Room Feature 2 <br />
                        <div class="font-light text-lg mb-1">
                          Lorem ipsum dolor sit amet coii adipiscing elit mus,
                          convallis morbi
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="px-4 py-4 opacity-100 group-hover:opacity-0 transition-opacity duration-200 ease-out">
                    <div class="font-normal text-lg mb-1">Room Feature 2</div>
                  </div>
                </div>
              </div>{" "}
              <div class="relative group overflow-hidden">
                <div class="max-w-[320px] rounded overflow-hidden shadow-lg bg-[#EDECE3] transform transition-transform duration-200 ease-out hover:scale-105">
                  <div class="flex justify-center items-center">
                    <img
                      class="w-[280px] pt-5 group-hover:blur-[10px]  transition-all duration-200 ease-out"
                      src="assets/Rectangle 274.png"
                      alt="Card image"
                    />
                    <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out absolute inset-x-0 bottom-0 h-40 left-10 flex  text-white">
                      <div class="font-normal text-lg mb-1">
                        Room Feature 3 <br />
                        <div class="font-light text-lg mb-1">
                          Lorem ipsum dolor sit amet coii adipiscing elit mus,
                          convallis morbi
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="px-4 py-4 opacity-100 group-hover:opacity-0 transition-opacity duration-200 ease-out">
                    <div class="font-normal text-lg mb-1">Room Feature 3</div>
                  </div>
                </div>
              </div>{" "}
              <div class="relative group overflow-hidden">
                <div class="max-w-[320px] rounded overflow-hidden shadow-lg bg-[#EDECE3] transform transition-transform duration-200 ease-out hover:scale-105">
                  <div class="flex justify-center items-center">
                    <img
                      class="w-[280px] pt-5 group-hover:blur-[10px]  transition-all duration-200 ease-out"
                      src="assets/Rectangle 274.png"
                      alt="Card image"
                    />
                    <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out absolute inset-x-0 bottom-0 h-40 left-10 flex  text-white">
                      <div class="font-normal text-lg mb-1">
                        Room Feature 4 <br />
                        <div class="font-light text-lg mb-1">
                          Lorem ipsum dolor sit amet coii adipiscing elit mus,
                          convallis morbi
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="px-4 py-4 opacity-100 group-hover:opacity-0 transition-opacity duration-200 ease-out">
                    <div class="font-normal text-lg mb-1">Room Feature 4</div>
                  </div>
                </div>
              </div>{" "}
              <div class="relative group overflow-hidden">
                <div class="max-w-[320px] rounded overflow-hidden shadow-lg bg-[#EDECE3] transform transition-transform duration-200 ease-out hover:scale-105">
                  <div class="flex justify-center items-center">
                    <img
                      class="w-[280px] pt-5 group-hover:blur-[10px]  transition-all duration-200 ease-out"
                      src="assets/Rectangle 274.png"
                      alt="Card image"
                    />
                    <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out absolute inset-x-0 bottom-0 h-40 left-10 flex  text-white">
                      <div class="font-normal text-lg mb-1">
                        Room Feature 5 <br />
                        <div class="font-light text-lg mb-1">
                          Lorem ipsum dolor sit amet coii adipiscing elit mus,
                          convallis morbi
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="px-4 py-4 opacity-100 group-hover:opacity-0 transition-opacity duration-200 ease-out">
                    <div class="font-normal text-lg mb-1">Room Feature 5</div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomFeatures;

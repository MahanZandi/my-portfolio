import { useKeenSlider, KeenSliderPlugin, KeenSliderInstance,} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import wallpaper1 from "@/public/images/wallpaper/macbook.jpg";
import wallpaper2 from "@/public/images/wallpaper/siliconValley.jpg";
import wallpaper3 from "@/public/images/wallpaper/siliconValley2.jpg";
import wallpaper4 from "@/public/images/wallpaper/microsoft.jpg";
import wallpaper5 from "@/public/images/wallpaper/reactWallpaper.webp";
import wallpaper6 from "@/public/images/wallpaper/nextjswallpaper.png";


function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

export default function Slider() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  })
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <div className="slider">
      <div className="slider-container">
        <div>
          <div className="slider-tags-container">
              <p className="tags">
                گالری
              </p>
          </div>
          <div>
            <p className="slider-text">
                عکس های زیبا و مرتبط را میتوانید ازاسلایدر زیر مشاهده کنید:
            </p>
          </div>
        </div>
        <div className="slider-outline">
          <div ref={sliderRef} className="keen-slider">
              <Image src={wallpaper1} alt="mac book wallpaper" className="keen-slider__slide number-slide1 slider-item"/>
              <Image src={wallpaper2} alt="siliconValley wallpaper" className="keen-slider__slide number-slide1 slider-item"/>
              <Image src={wallpaper3} alt="siliconValley wallpaper" className="keen-slider__slide number-slide1 slider-item"/>
              <Image src={wallpaper4} alt="microsoft wallpaper" className="keen-slider__slide number-slide1 slider-item"/>
              <Image src={wallpaper5} alt="react wallpaper" className="keen-slider__slide number-slide1 slider-item"/>
              <Image src={wallpaper6} alt="next js wallpaper" className="keen-slider__slide number-slide1 slyder-item"/>
          </div>

          <div ref={thumbnailRef} className="keen-slider thumbnail">
            <Image src={wallpaper1} alt="mac book wallpaper" className="keen-slider__slide number-slide1 slider-item-down"/>
              <Image src={wallpaper2} alt="siliconValley wallpaper" className="keen-slider__slide number-slide1 slider-item-down"/>
              <Image src={wallpaper3} alt="siliconValley wallpaper" className="keen-slider__slide number-slide1 slider-item-down"/>
              <Image src={wallpaper4} alt="microsoft wallpaper" className="keen-slider__slide number-slide1 slider-item-down"/>
              <Image src={wallpaper5} alt="react wallpaper" className="keen-slider__slide number-slide1 slider-item-down"/>
              <Image src={wallpaper6} alt="next js wallpaper" className="keen-slider__slide number-slide1 slider-item-down"/>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'
import Image from "next/image";
import { collections, hydroponics } from "./constant/data";
import HydroponicCard from "./ui/Home/HydroponicCard";
import CollectionCard from "./ui/Home/CollectionCard";
import { BiCheck, BiX } from "react-icons/bi";
import Loved from "./ui/Home/Loved";
import Testimonial from "./ui/Home/Testimonial";
import RelatedBlog from "./ui/RelatedBlog";
import Contact from "./ui/Home/Contact";
import Link from "next/link";
import React, {useState, useEffect} from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % hydroponics.length);
    }, 3000); 

    return () => clearInterval(intervalId);
  }, [hydroponics.length]);

  return (
    // import Image from 'next/image';

    <div className="w-full px-4 md:px-10 pb-[100px] bg-[#FFFCF8] flex flex-col justify-center items-center overflow-hidden">
      {/* Hero */}
      <div className="w-screen flex flex-col-reverse md:flex-row xl:flex-col justify-center items-center overflow-hidden hero-container" >
        <div className="max-w-[361px] xl:max-w-[622px] -mt-[57px] md:mt-[123px] xl:mt-[170px] z-10 justify-center items-start gap-6 content-container" style={{ paddingRight: "12px", marginLeft: "126px"}}>
          <p className="text-[50px] md:text-[64px] leading-[60px] md:leading-[76.8px] -tracking-[1.25px] md:-tracking-[1.6px] font-normal text-primaryGrayscale hero-title container">
            Exquisite & Sustainable <br /> Self-Watering Planters
          </p>
          <p className="mt-3 xl:mt-[20px] text-sm md:text-base leading-6 xl:text-center font-normal text-secondaryGrayscale hero-description" style={{color: "#3D3D3D",color: "color(display-p3 0.2375 0.2375 0.2375)",textAlign: "center",fontFamily: "Urbanist",fontSize: "16px",fontStyle: "normal",fontWeight: 425,lineHeight: "24px"}}>
            Relax & experience rich greenery year-round with Auto Verdure&apos;s
            live indoor & outdoor hydroponic kits. Let our planters nurture your
            plants, save your time, & enhance your lifestyle to make urban
            farming simple & joyous
          </p>

          {/* Buttons */}
          <div className="mt-3 md:mt-8 w-full text-base font-medium flex gap-7 justify-center xl:justify-center items-center hero-buttons">
            <button className="shop-now px-[42px] py-[18px] rounded-[100px] text-white bg-primaryMain">
              Shop now
            </button>
            <button className="learn-more px-[42px] py-[18px] text-primaryGrayscale border-[1px] border-primaryGrayscale rounded-[100px] bg-transparent" style={{ borderRadius: "100px", border: "1px solid var(--Greyscale-Black, #3D3D3D)" }}>
              Learn More
            </button>
          </div>
        </div>
        </div>
        {/* Image */}
        <div className="w-[267px] h-[447px] absolute top-0 right-[15px] md:right-[40px] image-container">
          <Image
            className="w-full h-full xl:hidden pot-image"
            src="/bgImage1.png"
            alt="bgImage"
            width={267}
            height={447}
          />
        </div>
        <div className="w-full h-[776px] absolute top-0 right-[20px] bg-transparent">
          <div className="h-full w-full relative">
            <Image
              className="w-full h-full hidden xl:flex top-0"
              style={{ width: "103%", maxWidth: "103%", transform: "scale(1.042)" }}
              src="/bgImage3.png"
              alt="bgImage"
              width={1550}
              height={776}
            />
            <div className="h-[100px] w-[20px] absolute z-15" style={{height: "579px", width: "20px", marginLeft: "27%", background: "#FFFCF8", top: "0px", animation: "shrinkHeight 2s forwards", animationDelay: "0.2s"}}></div>
            <div className="h-[100px] w-[20px] absolute z-15" style={{height: "100px", width: "20px", marginLeft: "27%", background: "#FFFCF8", top: "0px",}}></div>
            <div className="h-[100px] w-[20px] absolute z-15" style={{height: "574px", width: "10px", marginLeft: "82.65%", background: "#FFFCF8", top: "0px", animation: "shrinkHeightRight 2s forwards", animationDelay: "0.2s"}}></div>
            <div className="h-[100px] w-[20px] absolute z-15" style={{height: "100px", width: "10px", marginLeft: "82.65%", background: "#FFFCF8", top: "0px",}}></div>
            <div className="absolute" style={{background: "#FFFCF8", top: "395px", height: "10px", width: "57px", marginLeft: "23.4%", animation: "shrinkWidthLeft 1.5s forwards", animationDelay: "0.2s"}}></div>
            <div className="absolute" style={{background: "#FFFCF8", top: "394px", height: "10px", width: "57px", marginLeft: "82.9%", animation: "shrinkWidthRight 1.5s forwards", animationDelay: "0.2s"}}></div>
          </div>
        </div>


      {/* <div className="w-full px-4 md:px-10 pb-[100px] bg-[#FFFCF8] flex flex-col justify-center items-center overflow-hidden" style={{"paddingLeft":"2.5rem"}}> */}
      {/* Shop The New Collection */}
      <div className="mt-[78px] md:mt-[114px] xl:mt-[120px] max-w-[361px] md:max-w-[754px] xl:max-w-[1200px] w-full flex flex-col md:justify-center md:items-center" style={{"paddingLeft":"3%","marginTop":"20%"}}>
        <p className="text-[20.049px] md:text-4xl xl:text-[50px] leading-[24.059px] md:leading-[43.2px] xl:leading-[60px] -tracking-[0.501px] md:-tracking-[0.9px] xl:-tracking-[1.25px] text-primaryGrayscale font-normal capitalize">
          Shop The New Collection
        </p>

        <div className="mt-[33px] w-full grid grid-cols-2 justify-between items-center gap-x-[3px] md:gap-x-[17.17px] xl:gap-x-[30px] gap-y-[20.32px] md:gap-y-[19.46px] xl:gap-y-[34px]">
          {collections.map((collection, index) => (
            <div key={index}>
              <CollectionCard
                title={collection.title}
                description={collection.description}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Hydroponic Kits */}
      <div className="mt-[20.32px] md:mt-[112.85px] xl:mt-[120px] md:max-w-[754px] w-full xl:max-w-[1200px] flex flex-col justify-center items-center" style={{"paddingLeft":"3%"}}>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="max-w-[320px] md:max-w-[754px] xl:max-w-[1200px] w-full flex flex-col justify-center items-center text-[40px] md:text-4xl xl:text-[50px] leading-[48px] md:leading-[43.2px] xl:leading-[43.2px] -tracking-[1px] md:-tracking-[0.9px] font-normal capitalize text-primaryGrayscale">
            <p>Why are our hydroponic kits the best for you?</p>
          </div>

          <div className="mt-12 md:mt-[38px] xl:mt-12 w-full flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-y-[41px] md:gap-x-[22px] md:gap-y-[47px] xl:grid-x-[41px] xl:grid-y-12 justify-center items-center">
            {hydroponics.map((hydroponic, index) => (
              <HydroponicCard key={index} data={hydroponic} isActive={index === currentIndex}/>
            ))}
          </div>

          <div className="my-8 md:hidden w-full flex gap-x-[9px] justify-center items-center">
            <div className="w-[13px] h-[13px] rounded-full bg-primaryMain"></div>
            <div className="w-[13px] h-[13px] rounded-full bg-[#D9D9D9]"></div>
          </div>

          <div className="md:mt-[72.12px] w-full flex flex-col justify-center items-center">
            <button className="text-base px-[42px] py-[18px] rounded-[100px] border-[1px] font-normal border-primaryGrayscale text-primaryGrayscale">
              About Us
            </button>
          </div>
        </div>
      </div>

      {/* How Does it Work */}
      <div className="mt-[15px] md:mt-[72px] xl:mt-[149.5px] w-full h-fit md:max-w-[754px] xl:max-w-[1098px] flex xl:gap-[98px] flex-col md:flex-row justify-center items-center" style={{"paddingLeft":"4%"}}>
        <div className="w-full md:-mt-[210px] max-w-[361px] xl:max-w-[630px] flex flex-col">
          <p className="w-fit text-[40px] md:text-4xl xl:text-[50px] leading-[48px] md:leading-[48px] xl:leading-[60px] -tracking-[1px] xl:-tracking-[1.25px] font-normal capitalize text-primaryGrayscale">
            How does it work?
          </p>

          <div className="mt-[41.5px] max-w-[316px] xl:max-w-[630px] flex flex-col gap-y-6">
            <div className="w-full flex gap-x-4">
              <div>
                <div className="w-[35px] h-[35px] text-base leading-[19.2px] -tracking-[0.4px] font-normal flex justify-center items-center rounded-full text-[#FDFDFD] bg-[#809D79]">
                  1
                </div>
              </div>

              <div>
                <p className="text-2xl leading-[28.8px] -tracking-[0.6px] font-[600] text-primaryGrayscale">
                  Pour
                </p>
                <p className="text-sm leading-6 font-normal text-secondaryGrayscale">
                  Open the Lid of the Pot and carefully pour freshwater into the
                  reservoir.
                </p>
              </div>
            </div>
            <div className="w-full flex gap-x-4">
              <div>
                <div className="w-[35px] h-[35px] text-base leading-[19.2px] -tracking-[0.4px] font-normal flex justify-center items-center rounded-full text-[#FDFDFD] bg-[#809D79]">
                  2
                </div>
              </div>

              <div>
                <p className="text-2xl leading-[28.8px] -tracking-[0.6px] font-[600] text-primaryGrayscale">
                  Pest Free
                </p>
                <p className="text-sm leading-6 font-normal text-secondaryGrayscale">
                  Close the Lid to keep it Mosquito & Pest Free.
                </p>
              </div>
            </div>
            <div className="w-full flex gap-x-4">
              <div>
                <div className="w-[35px] h-[35px] text-base leading-[19.2px] -tracking-[0.4px] font-normal flex justify-center items-center rounded-full text-[#FDFDFD] bg-[#809D79]">
                  3
                </div>
              </div>

              <div>
                <p className="text-2xl leading-[28.8px] -tracking-[0.6px] font-[600] text-primaryGrayscale">
                  Optimal water
                </p>
                <p className="text-sm leading-6 font-normal text-secondaryGrayscale">
                  Via the capillary action, Your plant gets optimal water when
                  required.
                </p>
              </div>
            </div>
            <div className="w-full flex gap-x-4">
              <div>
                <div className="w-[35px] h-[35px] text-base leading-[19.2px] -tracking-[0.4px] font-normal flex justify-center items-center rounded-full text-[#FDFDFD] bg-[#809D79]">
                  4
                </div>
              </div>

              <div>
                <p className="text-2xl leading-[28.8px] -tracking-[0.6px] font-[600] text-primaryGrayscale">
                  Water check
                </p>
                <p className="text-sm leading-6 font-normal text-secondaryGrayscale">
                  Check if a water refill is needed. Not every week. Just once
                  on an average of 45-60 days.
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex mt-3 md:mt-8 w-full text-base font-medium gap-7 justify-center xl:justify-start items-center">
            <button className="px-[42px] py-[18px] rounded-[100px] text-white bg-primaryMain">
              Shop now
            </button>
            <button className="px-[42px] py-[18px] text-primaryGrayscale border-[1px] border-primaryGrayscale rounded-[100px] bg-transparent">
              Learn More
            </button>
          </div>
        </div>

        <div className="hidden md:flex flex-col xl:w-full justify-center items-center">
          <div className="w-[240px] h-[240px] flex flex-col justify-center items-center p-10 rounded-full bg-[#F3F0F1] border-[3px] border-primaryMain">
            <Image
              className="object-contain"
              src="/pour.png"
              alt="pour"
              width={160.741}
              height={160}
            />
          </div>
          <div className="w-[240px] h-[240px] flex flex-col justify-center items-center relative bottom-[90px] left-[160px] p-10 rounded-full bg-[#F3F0F1] border-[3px] border-primaryMain">
            <Image
              className="object-contain"
              src="/pest.png"
              alt="pestFree"
              width={160.741}
              height={160}
            />
          </div>
          <div className="w-[240px] h-[240px] flex flex-col justify-center items-center relative bottom-[170px] left-[20px] p-10 rounded-full bg-[#F3F0F1] border-[3px] border-primaryMain">
            <Image
              className="object-contain"
              src="/check.png"
              alt="check"
              width={160.741}
              height={160}
            />
          </div>
        </div>
      </div>

      {/* Join the Auto Verdure Movement */}
      <div className="mt-[107.5px] md:mt-[72px] max-w-[361px] md:max-w-[754px] xl:max-w-[1226px] w-full h-full">
        <div className="hidden w-full h-[432px] xl:h-[521px] md:flex gap-x-5 xl:gap-[54px] justify-center items-center xl:items-start " style={{"paddingLeft": "9%"}}>
          <div className="w-[366px] h-full xl:w-[604px] xl:h-[521px] xl:flex-1 rounded-[9.7px]">
            <Image
              className="w-[366px] h-full xl:w-[604px] xl:h-[521px]"
              src="/homeImage.png"
              alt="img"
              width={366}
              height={432}
            />
          </div>

          <div className="w-[366px] h-[432px] xl:h-full flex xl:flex-1 flex-col gap-y-5 xl:gap-y-8">
            <div className="w-full flex flex-col gap-5">
              <p className="text-4xl xl:text-[50px] leading-[43.2px] xl:leading-[60px] -tracking-[0.9px] xl:-tracking-[1.25px] font-normal text-primaryGrayscale">
                Join the Auto Verdure Movement to Transform Indoor & Outdoor
                Urban Plant Growing.
              </p>
              <p className="text-sm leading-6 font-normal text-secondaryGrayscale">
                No Contaminants. Only Nutrient-Packed Produce.
              </p>
            </div>

            <div className="w-full h-[432px] xl:h-full flex gap-[21.5px] justify-between xl:justify-normal xl:gap-6">
              <Image
                className="xl:w-[192px] xl:h-[205px]"
                src="/aboutImg3.png"
                alt="img"
                width={172.075}
                height={183.725}
              />
              <Image
                className="xl:w-[192px] xl:h-[205px]"
                src="/aboutImg3.png"
                alt="img"
                width={171.075}
                height={183.725}
              />
            </div>
          </div>
        </div>

        <div className="mt-[58px] hidden w-full md:flex flex-col justify-center items-center">
          <button className="text-base px-[42px] py-[18px] rounded-[100px] border-[1px] border-primaryGrayscale font-normal text-primaryGrayscale">
            About Us
          </button>
        </div>

        <div className="md:hidden w-full flex flex-col gap-5">
          <p className="text-[40px] leading-[48px] -tracking-[1px] font-normal text-primaryGrayscale">
            Join the Auto Verdure Movement to Transform Indoor & Outdoor Urban
            Plant Growing.
          </p>
          <p className="text-sm leading-6 font-normal text-secondaryGrayscale">
            No Contaminants. Only Nutrient-Packed Produce.
          </p>
        </div>

        {/* Video and Image */}
        <div className="md:hidden mt-8 w-full flex flex-col gap-8">
          <div className="max-w-[361px] h-[180.5px] rounded-[14.1px] bg-primaryMain"></div>

          <div className="w-full flex justify-between">
            <Image
              src="/aboutImg3.png"
              alt="img"
              width={171.765}
              height={183.395}
            />
            <Image
              src="/aboutImg3.png"
              alt="img"
              width={171.765}
              height={183.395}
            />
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <button className="text-base px-[42px] py-[18px] rounded-[100px] border-[1px] font-normal text-primaryGrayscale">
              About Us
            </button>
          </div>
        </div>

        <div className="mt-[59.11px] w-full flex flex-col md:gap-y-7 justify-center items-center">
          <div className="w-full flex flex-col md:flex-row-reverse md:gap-[56.67px] justify-center">
            <div className="w-full md:w-[405px] xl:w-[646.67px] flex flex-col justify-center items-center md:justify-start md:items-start">
              <Image
                className="md:w-[405px] md:h-[300px] xl:w-[646.67px]"
                src="/powerfullResearch.png"
                alt="image"
                width={361}
                height={300}
              />
              <div className="mt-[30px] w-full">
                <p className="text-2xl leading-[48px] -tracking-[0.6px] text-primaryMain font-bold">
                  Powerful design research
                </p>
                <p className="mt-[10px] text-xl leading-8 -tracking-[0.5px] font-normal text-secondryGrayscale">
                  We are the first in the Indian Market to combat the rising
                  concern of mosquito-induced diseases by integrating the
                  solution into our design research.
                </p>
              </div>
            </div>

            <div className="mt-[59px] md:mt-0 w-full md:w-[293.33px] flex flex-col justify-start items-start">
              <Image
                className="object-contain md:w-[293.33px] md:h-[300px]"
                src="/waterRetention.png"
                alt="image"
                width={361}
                height={300}
              />
              <div className="mt-[30px] w-[237px]">
                <p className="text-2xl leading-[48px] -tracking-[0.6px] text-primaryMain font-bold">
                  Water Retention
                </p>
                <p className="mt-[10px] text-xl leading-8 -tracking-[0.5px] font-normal text-secondryGrayscale">
                  We have successfully developed an unmatchable Water Retention
                  Technology amongst all the Hydroponic system competitors
                </p>
              </div>
            </div>
          </div>

          <div className="hidden w-full md:flex md:gap-[56.67px] justify-center">
            <div className="w-full md:w-[405px] xl:w-[646.67px] hidden md:flex flex-col justify-center items-center md:justify-start md:items-start">
              <Image
                className="md:w-[405px] md:h-[300px] xl:w-[646.67px]"
                src="/recyclable.png"
                alt="image"
                width={361}
                height={300}
              />
              <div className="mt-[30px] w-full">
                <p className="text-2xl leading-[48px] -tracking-[0.6px] text-primaryMain font-bold">
                  Recyclable
                </p>
                <p className="mt-[10px] text-xl leading-8 -tracking-[0.5px] font-normal text-secondryGrayscale">
                  100% Recyclable material for Transforming Urban Farming into a
                  Greener Future.
                </p>
              </div>
            </div>

            <div className="mt-[59px] md:mt-0 w-full md:w-[293.33px]  hidden md:flex flex-col justify-center items-center md:justify-start md:items-start">
              <Image
                className="object-contain md:w-[293.33px] md:h-[300px]"
                src="/expert.png"
                alt="image"
                width={361}
                height={300}
              />
              <div className="mt-[30px] w-[237px]">
                <p className="text-2xl leading-[48px] -tracking-[0.6px] text-primaryMain font-bold">
                  Expert Guidance
                </p>
                <p className="mt-[10px] text-xl leading-8 -tracking-[0.5px] font-normal text-secondryGrayscale">
                  And YES, Just Like you, we are Passionate about Plants- We
                  Bring you Expert Guidance to provide proper care to your
                  Plants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why should you switch from traditional pots to hydroponics? */}
      <div className="mt-[88px] md:mt-[122px] xl:mt-[74px] max-w-[361px] md:max-w-[754px] xl:max-w-[1200px] w-full flex flex-col justify-center items-center">
        <div className="md:w-[467px] xl:w-[649px]">
          <p className="text-[40px] md:text-4xl xl:text-[50px] leading-[48px] xl:leading-[60px] -tracking-[1px] xl:-tracking-[1.25px] md:text-center font-normal text-primaryGrayscale">
            Why should you switch from traditional pots to hydroponics?
          </p>
        </div>

        <div className="mt-[47.41px] md:mt-[73px] xl:mt-[82px] w-full md:flex flex-col justify-center items-center">
          <div className="w-1000px md:w-[523px] xl:w-fit flex md:gap-x-5 rounded-[16.4px]" style={{'height':'379px','justifyContent':'center','alignItems':'flex-start','gap':'20px','flexShrink':'0f'}}>
            <div className="w-full xl:w-[320px] flex flex-col md:flex-1 gap-5 text-[11.888px] md:text-xs xl:text-sm p-[24.62px] font-[600] leading-[17.232px] md:leading-[17.832px] rounded-tl-[16.4px] rounded-bl-[16.4px] md:rounded-[16.4px] shadow-[0_16.412px_49.235px_-2.051px_rgba(0,0,0,0.05)] bg-[#fff]">
              <p className="font-[600] leading-[17.832px] font-semibold">How we are different.</p>
              <div className="mt-[32.82px] w-full flex flex-col  gap-[10px] md:gap-[8.21px] xl:gap-[10px] text-[#666666]">
                <p>Plant Watering</p>
                <p>Minimal Water Wastage</p>
                <p>Rate of Produce Growth</p>
                <p>Labour Required</p>
                <p>No Pest-induced diseases</p>
                <p>Reduced Carbon Footprint</p>
                <p>Higher Crop Yield</p>
                <p>Higher Crop Yield</p>
              </div>
            </div>

            <div className="w-full xl:w-[320px] text-[11.888px] md:text-xs xl:text-sm px-[10.26px] py-[25.47px] gap-5 scale-105 border-[2.55px] rounded-[17px] border-primaryMain flex flex-col md:flex-1 bg-white shadow-[0_16.412px_49.235px_-2.051px_rgba(0,0,0,0.05)] items-center">
              <p className="font-[600] leading-[17.832px] text-[#666]">
                Our Hydroponic Pot
              </p>
              <div className="mt-[32.82px] w-full leading-[17.832px] gap-[10px] md:gap-[8.21px] xl:gap-[10px] flex flex-col justify-center items-center">
                <p className="font-semibold">Once 30-45 Days</p>
                <BiCheck className="text-[#00FF66]" />
                <p className="font-semibold">Faster</p>
                <p className="font-semibold">Less</p>
                <div className="md:mt-[2px] xl:mt-[8px] flex flex-col gap-[10px] md:gap-[15px] xl:gap-[15px] justify-center items-center">
                  <BiCheck className="text-[#00FF66] text-[11.888px] md:text-xs xl:text-sm" />
                  <BiCheck className="text-[#00FF66] text-[11.888px] md:text-xs xl:text-sm" />
                  <span className="invisible md:hidden">auto verdure</span>
                  <BiCheck className="text-[#00FF66] text-[11.888px] md:text-xs xl:text-sm" />
                  <BiCheck className="text-[#00FF66] text-[11.888px] md:text-xs xl:text-sm" />
                </div>
              </div>
            </div>

            <div className="hidden w-full xl:w-[320px] text-[11.888px] md:text-xs xl:text-sm px-[10.26px] py-[25.47px] rounded-[17px] xl:flex flex-col md:flex-1 bg-white shadow-[0_16.412px_49.235px_-2.051px_rgba(0,0,0,0.05)] items-center">
              <p className="font-[600] leading-[17.832px] text-[#666]">
                Traditional Pots
              </p>
              <div className="mt-[52px] leading-[17.832px] gap-[10px] md:gap-[8.21px] xl:gap-[10px] font-[600] flex flex-col justify-center items-center">
                <p>Almost Everyday</p>
                <p>Overwatering & Underwatering</p>
                <p>Slower</p>
                <p>More</p>
                <div className="md:mt-[2px] xl:mt-[8px] flex flex-col gap-[10px] md:gap-[15px] xl:gap-[15px]">
                  <BiX className="text-[#FF0000]" />
                  <BiX className="text-[#FF0000]" />
                  <BiX className="text-[#FF0000]" />
                  <BiX className="text-[#FF0000]" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[50.59px] w-full md:w-fit text-sm leading-[21px] px-[40px] md:px-0 py-[10px] md:py-0 rounded-[37px] flex xl:hidden justify-between font-[600] bg-[#9A5CF51A] text-[#666]">
            <p className="px-5 py-2 rounded-[46px] text-white bg-primaryMain">
              Our Hydroponics Pot
            </p>
            <p className="px-5 py-2 rounded-[46px]">Traditional Pots</p>
          </div>
        </div>
      </div>

      {/* Loved By Buyers */}
      <div className="mt-[65px] md:mt-[144px] xl:mt-[226px] max-w-[361px] md:max-w-[754px] xl:max-w-[1312px] w-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-between items-center">
          <p className="text-2xl md:text-4xl xl:text-[38px] leading-[49.4px] xl:leading-[49.4px] font-normal text-[#0E0E0E]">
            Loved by buyers
          </p>
          <div className="flex gap-[9.14px] xl:pb-3 xl:border-b-[1px] xl:border-[#BBBBBB]">
            <p className="hidden xl:flex">Browse all products</p>
            <Image src="/rightArr.svg" alt="img" width={18} height={19} />
          </div>
        </div>

        <div className="xl:hidden w-full grid grid-cols-1 md:grid-cols-2 md:gap-x-[36.45px]">
          <Loved />
          <Loved />
          <Loved />
          <Loved />
          <Loved />
          <Loved />
        </div>

        <div className="mt-[26.94px] hidden xl:flex w-full h-fit gap-[39px]">
          <div className="rounded-[44px] flex-1 h-fit">
            <div className="relative h-fit">
              <div className="h-fit">
                <Image
                  className="object-contain rounded-[44px]"
                  src="/loved0.png"
                  alt="img"
                  width={636}
                  height={796}
                />
                <div className="mt-10">
                  <p className="text-[21px] leading-[25.2px] text-[000]">
                    Plant 2
                  </p>
                  <p className="mt-[13.96px] text-[17px] leading-5 text-[#0E0E0E]">
                    $349.99 USD
                  </p>
                </div>
              </div>
              <div className="text-[13px] leading-4 tracking-[0.56px] uppercase text-[#333] rounded-[40px] px-[14px] py-[13px] absolute top-[24.05px] left-[24.5px] font-normal bg-white">
                <p>In Stock</p>
              </div>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-x-[39.58px] gap-y-16">
            <div className="w-[298px] h-fit rounded-[44px]">
              <div className="relative">
                <Image
                  className="object-contain"
                  src="/loved2.png"
                  alt="img"
                  width={298}
                  height={315}
                />
                <div className="text-[13px] leading-4 tracking-[0.56px] uppercase text-[#333] rounded-[40px] px-[14px] py-[13px] absolute top-[24.05px] left-[24.5px] font-normal bg-white">
                  <p>In Stock</p>
                </div>
              </div>

              <div className="mt-10">
                <p className="text-[21px] leading-[25.2px] text-[000]">
                  Plant 2
                </p>
                <p className="mt-[13.96px] text-[17px] leading-5 text-[#0E0E0E]">
                  $349.99 USD
                </p>
              </div>
            </div>
            <div className="w-[298px] h-fit rounded-[44px]">
              <div className="relative">
                <Image
                  className="object-contain"
                  src="/loved3.png"
                  alt="img"
                  width={298}
                  height={315}
                />
                <div className="text-[13px] leading-4 tracking-[0.56px] uppercase text-[#333] rounded-[40px] px-[14px] py-[13px] absolute top-[24.05px] left-[24.5px] font-normal bg-white">
                  <p>In Stock</p>
                </div>
              </div>

              <div className="mt-10">
                <p className="text-[21px] leading-[25.2px] text-[000]">
                  Plant 2
                </p>
                <p className="mt-[13.96px] text-[17px] leading-5 text-[#0E0E0E]">
                  $349.99 USD
                </p>
              </div>
            </div>
            <div className="w-[298px] h-fit rounded-[44px]">
              <div className="relative">
                <Image
                  className="object-contain"
                  src="/loved4.png"
                  alt="img"
                  width={298}
                  height={315}
                />
                <div className="text-[13px] leading-4 tracking-[0.56px] uppercase text-[#333] rounded-[40px] px-[14px] py-[13px] absolute top-[24.05px] left-[24.5px] font-normal bg-white">
                  <p>In Stock</p>
                </div>
              </div>

              <div className="mt-10">
                <p className="text-[21px] leading-[25.2px] text-[000]">
                  Plant 2
                </p>
                <p className="mt-[13.96px] text-[17px] leading-5 text-[#0E0E0E]">
                  $349.99 USD
                </p>
              </div>
            </div>
            <div className="w-[298px] h-fit rounded-[44px]">
              <div className="relative">
                <Image
                  className="object-contain"
                  src="/loved5.png"
                  alt="img"
                  width={298}
                  height={315}
                />
                <div className="text-[13px] leading-4 tracking-[0.56px] uppercase text-[#333] rounded-[40px] px-[14px] py-[13px] absolute top-[24.05px] left-[24.5px] font-normal bg-white">
                  <p>In Stock</p>
                </div>
              </div>

              <div className="mt-10">
                <p className="text-[21px] leading-[25.2px] text-[000]">
                  Plant 2
                </p>
                <p className="mt-[13.96px] text-[17px] leading-5 text-[#0E0E0E]">
                  $349.99 USD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join THE AV Family  World's first customizable hydroponic pots. */}
      <div className="mt-[67px] md:mt-[103px] xl:mt-[160px] w-screen flex flex-col justify-center items-center overflow-hidden">
        <div className=" max-w-[361px] md:max-w-[754px] xl:max-w-[1065px] w-full flex flex-col gap-5">
          <p className="text-[40px] md:text-4xl leading-[48px] -tracking-[1px] md:text-center font-normal capitalize text-primaryGrayscale">
            Join THE AV Family <br className="hidden md:block" /> World&apos;s
            first customizable hydroponic pots.
          </p>
          <p className="w-[272px] md:w-full text-sm leading-6 text-center font-normal text-secondaryGrayscale">
            &quot;Unlock The Biophile Inside You: Embrace Your Connection With
            Nature !&quot;
          </p>
        </div>

        <div className="mt-[90px] flex flex-col xl:flex-row xl:gap-[29px] justify-center items-center">
          <Image
            className="hidden xl:flex cursor-pointer"
            src="/leftArrow1.svg"
            alt="leftArrow1"
            width={13}
            height={26}
          />
          <Testimonial />
          <Image
            className="hidden xl:flex cursor-pointer"
            src="/rightArrow1.svg"
            alt="rightArrow1"
            width={13}
            height={26}
          />
        </div>

        <div className="hidden mt-[109.5px] w-full md:flex flex-col justify-center items-center">
          <div className="w-[1595px] flex justify-center items-center gap-10 overflow-hidden">
            <Image
              className="object-contain w-[505px] h-[413px]"
              src="/testimonial1.png"
              alt="img"
              width={505}
              height={413}
            />
            <Image
              className="object-contain w-[505px] h-[413px]"
              src="/testimonial1.png"
              alt="img"
              width={505}
              height={413}
            />
            <Image
              className="object-contain w-[505px] h-[413px]"
              src="/testimonial1.png"
              alt="img"
              width={505}
              height={413}
            />
          </div>

          <div className="mt-[43px] w-full flex gap-10 justify-center items-center">
            <Image
              src="/leftArrow1.svg"
              alt="leftArrow1"
              width={13}
              height={26}
            />
            <Image
              src="/rightArrow1.svg"
              alt="rightArrow1"
              width={13}
              height={26}
            />
          </div>
        </div>

        <div className="md:mt-[72.12px] w-full flex flex-col justify-center items-center">
          <Link
            href="/community"
            className="text-base px-[42px] py-[18px] rounded-[100px] border-[1px] font-normal border-primaryGrayscale hover:bg-[#000000] text-primaryGrayscale hover:text-[#ffffff] ease-in-out duration-500"
          >
            Community
          </Link>
        </div>
      </div>

      {/* What we offer ? */}
      <div className="mt-[80px] md:mt-[160px] max-w-[361px] md:max-w-[754px] xl:max-w-[991px] w-full flex flex-col justify-center items-center">
        <p className="text-[50px] md:text-4xl xl:text-[50px] leading-[60px] md:leading-[43.2px] xl:leading-[60px] -tracking-[1.25px] md:-tracking-[0.9px] xl:-tracking-[1.25px] font-normal text-primaryGrayscale">
          What we offer ?
        </p>

        {/* Content */}
        <div className="mt-[64px] w-full flex flex-col md:flex-row gap-[60px]">
          <div className="w-full flex flex-col gap-4 justify-center items-center md:justify-start">
            <Image
              className="md:w-[48px] md:h-[48px]"
              src="/drugs.png"
              alt="img"
              width={80}
              height={80}
            />

            <p className="text-2xl leading-[28.8px] -tracking-[0.6px] font-[600] text-primaryGrayscale">
              Fertiliser Tablets
            </p>
            <p className="text-sm leading-6 text-center font-normal text-secondaryGrayscale">
              They Provide all the essential Nutrients for Plant Growth to
              ensure balanced healthy foliage & we provide you these at Zero
              Cost.
            </p>
          </div>
          <div className="w-full flex flex-col gap-4 justify-center items-center md:justify-start">
            <Image
              className="md:w-[48px] md:h-[48px]"
              src="/warranty.png"
              alt="img"
              width={80}
              height={80}
            />

            <p className="text-2xl leading-[28.8px] -tracking-[0.6px] font-[600] text-primaryGrayscale">
              2 Years Warranty
            </p>
            <p className="text-sm leading-6 text-center font-normal text-secondaryGrayscale">
              Auto Verdure Hydroponic & Semi-Hydroponic kits guarantee _ Year
              Guarantee. If your kit arrives damaged or in a defected state, we
              will accordingly provide a replacement for it.
            </p>
          </div>
          <div className="w-full flex flex-col gap-4 justify-center items-center md:justify-start">
            <Image
              className="md:w-[48px] md:h-[48px]"
              src="/agriculture.png"
              alt="img"
              width={80}
              height={80}
            />

            <p className="text-2xl leading-[28.8px] -tracking-[0.6px] font-[600] text-primaryGrayscale">
              Local Farm Visit
            </p>
            <p className="text-sm leading-6 text-center font-normal text-secondaryGrayscale">
              Want a hands-on experience of our Process? Come along and venture
              into the Auto verdure all the way to your home, and learn how we
              care for your plant at every stage.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-[52px] md:mt-8 w-full text-base font-medium flex gap-7 justify-center items-center">
          <button className="px-[42px] py-[18px] rounded-[100px] text-white bg-primaryMain">
            Shop now
          </button>
          <button className="px-[42px] py-[18px] text-primaryGrayscale border-[1px] border-primaryGrayscale rounded-[100px] bg-transparent">
            Learn More
          </button>
        </div>
      </div>

      {/* Blogs */}
      <RelatedBlog
        title="Explore Our Blog for Green Inspiration"
        description="Our blog is filled with informative and inspiring content on all things green. From plant care tips and advice to the latest trends in gardening and design, our experts share their knowledge to help you bring your indoor and outdoor spaces to life."
      />

      {/* Contact */}
      <Contact />
      {/* </div> */}
    </div>
  );
}

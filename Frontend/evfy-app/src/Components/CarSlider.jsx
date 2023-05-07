import React, { useEffect, useRef, useState } from 'react'
import '../styles/CarSlider.css';
import { GrNext, GrPrevious } from "react-icons/gr";

let carsData =[
    {
    image_url:
     "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Fmaruti-suzuki%2Falto-800%2Fmaruti-suzuki-alto-800.jpg%3Fv%3D44&w=1920&q=75" ,
    name:"Hyundai i10",
    fuel_type:"petrol",
    brand:"Hyundai",
    city:"Mumbai",
    cartype:"Hatchback",
    price_per_month:11400,
    strikedoffprice:13500,
    avail: "Available for all Variants",
    work: "manual",
    },
    {
    image_url:
      "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Fbajaj%2Fqute%2Fbajaj-qute.jpg%3Fv%3D12&w=1920&q=75",
    name:"Hyundai kona",
    fuel_type:"diesel",
    brand:"Honda",
    city:"Hyderabad",
    cartype:"SUV/MUV",
    price_per_month:10400,
    strikedoffprice:12500,
    avail:"Available for all Variants",
    work: "manual",
    },
    {
    image_url:
      "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Fmaruti-suzuki%2Fs-presso%2Fmaruti-suzuki-s-presso.jpg%3Fv%3D31&w=1920&q=75",
    name:"Hyundai i20",
    brand:"Hyundai",
    city:"Chennai",
    fuel_type:"diesel",
    cartype:"Hatchback",
    price_per_month:12400,
    strikedoffprice:15500,
    avail:"Available for all Variants",
    work: "manual",
    },
    {
    image_url:"https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Fmaruti-suzuki%2Falto-k10%2Fmaruti-suzuki-alto-k10.jpg%3Fv%3D38&w=1920&q=75",
    name:"Hyundai verna",
    brand:"Maruti",
    city:"Delhi",
    fuel_type:"petrol",
    cartype:"Sedan",
    price_per_month:12400,
    strikedoffprice:13500,
    avail: "Available for all Variants",
    work: "automatic",
    },
    {
    image_url:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_grand_i10.jpg",
    name:"Hyundai i10",
    brand:"Honda",
    city:"Bangalore",
    fuel_type:"petrol",
    cartype:"Hatchback",
    price_per_month:13500,
    strikedoffprice:14500,
    avail:"Available for all Variants",
    work: "automatic",
    },
    {
    image_url: 
     "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/SUV_new/Mahindra_XUV_300.jpg",
    name:"Hyundai i10",
    brand:"Hyundai",
    city:"Bangalore",
    fuel_type:"petrol",
    cartype:"Hatchback",
    price_per_month:10800,
    strikedoffprice:12900,
    avail: "Available for all Variants",
    work: "manual",
    },
    {
    image_url: 
     "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/Sedan_new/Hyundai_verna.jpg",
    name:"Hyundai i10",
    brand:"Hyundai",
    city:"Hyderabad",
    fuel_type:"petrol",
    cartype:"Hatchback",
    price_per_month:11800,
    strikedoffprice:13400,
    avail:"Available for all Variants",
    work: "automatic",
    },
    {
    image_url:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Maruti_suzuki_alto_k10.jpg",
    name:"hyundai grand",
    brand:"Hyundai",
    city:"Delhi",
    fuel_type:"diesel",
    cartype:"SUV/MUV",
    price_per_month:11900,
    strikedoffprice:13700,
    avail:"Available for all Variants",
    work: "manual",
    },
    {
    image_url:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/hyundai_santro.jpg",
    name:"Hyundai creta",
    brand:"Honda",
    city:"Mumbai",
    fuel_type:"diesel",
    cartype:"Sedan",
    price_per_month:11500,
    strikedoffprice:12500,
    avail:"Available for all Variants",
    work: "automatic",
    },
    {
    image_url:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Maruti_suzuki_swift.jpg",
    name:"Hyundai creta",
    brand:"Hyundai",
    city:"Chennai",
    fuel_type:"petrol",
    cartype:"Sedan",
    price_per_month:11500,
    strikedoffprice:13500,
    avail:"Available for all Variants",
    work: "manual",
    }
  ];  

const CarSlider = () => {
    let box = document.querySelector('.products-container');
    const ref = useRef(null);

    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(ref.current.offsetWidth);
    }, []);


    const btnpressprev = () => {
        box.scrollLeft = box.scrollLeft - width;
        // console.log(width)
    }

    const btnpressnext = () => {
        box.scrollLeft = box.scrollLeft + width;
        // console.log(width)
    }
    return (
        <>
        <div className="slider_div">
        <div style={{color:"rgb(166, 165, 165)"}}>Tata Nexon EV Prime Colors</div>
        <div className={"bootom_border"}></div>
            <div className="product-carousel" ref={ref}>
                <button className="pre-btn" onClick={btnpressprev}><p><GrPrevious/></p></button>
                <button className="nxt-btn" onClick={btnpressnext}><p><GrNext/></p></button>

               
                <div className="products-container">
                    {
                        carsData.map((el,index) => (
                            <div className='mycard' key={index+1}>
                                <img src={el.image_url} alt={index+1}/>
                                <div>
                                    <div className={"circle"}></div>
                                    <div>
                                      <div>Tata Nexon EV Prime : {el.name}</div>
                                      <div style={{color:"rgb(106, 105, 105)"}}>{el.avail}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            </div>
        </>
    )
}

export default CarSlider

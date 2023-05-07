import { GrNext, GrPrevious } from "react-icons/gr";
import "../styles/SummerCars.css";
import { useEffect, useRef, useState } from "react";

const summerCars = [
    {
        id: 1,
        img: "https://images.carandbike.com/car-images/medium/hyundai/creta/hyundai-creta.jpg?v=1_1",
        title: "Used Maruti Suzuki Baleno",
        price: 5.90,
    },
    {
        id: 2,
        img: "https://images.carandbike.com/cms/articles/2023/4/3206719/articles/2023/4/3206714/articles/2023/4/3206727/articles/2023/4/3206727/articles/2023/4/3206727/articles/2023/4/3206761/articles/2023/4/3206817/articles/2023/4/3206874/articles/2023/4/3206874/articles/2023/4/3206902/articles/2023/4/3206902/articles/2023/4/3206934/articles/2023/5/3206982/articles/2023/5/3207031/articles/2023/5/3207031/articles/2023/5/3207031/articles/2023/5/3207044/lamborghini_urus_2_4f52b1980a.jpg",
        title: "Used Honda City",
        price: 5.90,
    },
    {
        id: 3,
        img: "https://images.carandbike.com/cms/articles/2023/4/3206719/articles/2023/4/3206714/articles/2023/4/3206727/articles/2023/4/3206727/articles/2023/4/3206727/articles/2023/4/3206761/articles/2023/4/3206817/articles/2023/4/3206874/articles/2023/4/3206874/articles/2023/4/3206902/articles/2023/4/3206902/articles/2023/4/3206934/articles/2023/5/3206982/articles/2023/5/3207031/articles/2023/5/3207031/articles/2023/5/3207031/articles/2023/5/3207043/large_SKODA_KODIAQ_IMAGE_01_c7c0d8c98e.jpg",
        title: "Used Hyundai Creta",
        price: 8.35,
    },
    {
        id: 4,
        img: "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/Sedan_new/Hyundai_verna.jpg",
        title: "Used Mahindra XUV500",
        price: 1.00,
    },
    {
        id: 5,
        img: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Fmaruti-suzuki%2Falto-800%2Fmaruti-suzuki-alto-800.jpg%3Fv%3D44&w=1920&q=75",
        title: "Used Ford EcoSport",
        price: 4.75,
    },
    {
        id: 6,
        img: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Fbajaj%2Fqute%2Fbajaj-qute.jpg%3Fv%3D12&w=1920&q=75",
        title: "Used Toyota Fortuner",
        price: 13.25,
    },
    {
        id: 7,
        img: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Fmaruti-suzuki%2Fs-presso%2Fmaruti-suzuki-s-presso.jpg%3Fv%3D31&w=1920&q=75",
        title: "Used Renault Duster",
        price: 5.95,
    },
    {
        id: 8,
        img: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Fmaruti-suzuki%2Falto-k10%2Fmaruti-suzuki-alto-k10.jpg%3Fv%3D38&w=1920&q=75",
        title: "Used Skoda Octavia",
        price: 18.25,
    },
    {
        id: 9,
        img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_grand_i10.jpg",
        title: "Used Ford Endeavour XLT",
        price: 30.25,
    },
    {
        id: 10,
        img: "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/SUV_new/Mahindra_XUV_300.jpg",
        title: "Used Honda WR-V VX",
        price: 8.25,
    }
]

export const SummerCars = () => {

    //-----slider js------------
    // const productContainer = [...document.querySelectorAll('.product-container')];

    // const nxtBtn = [...document.querySelectorAll('.next-btn')];
    // const preBtn = [...document.querySelectorAll('.prev-btn')];

    // productContainer.forEach((item, i) =>{
    //   let containerDimensions = item.getBoundingClientRect();
    //   let containerWidth = containerDimensions.width;

    //   nxtBtn[i].addEventListener('click', ()=>{
    //      item.scrollLeft += containerWidth;
    //   })
    //   preBtn[i].addEventListener('click', ()=>{
    //     item.scrollLeft -= containerWidth;
    //  })

    // });
    let box = document.querySelector('.product-container');
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
        <section className="productsecond" ref={ref}>
            <div style={{width:"85%", margin:"auto"}}>
                <div style={{ color: "rgb(166, 165, 165)" }}>Tata Nexon EV Prime Upcoming Launches</div>
                <div className={"bootom_border"}></div>
            </div>
            {/* <div id="subscription"> */}
            <div id="btns">
                <button className="prev-btn" onClick={btnpressprev}><p><GrPrevious /></p></button>
                <button className="next-btn" onClick={btnpressnext}><p><GrNext /></p></button>
            </div>
            {/* </div> */}
            <div className="product-container">
                {
                    summerCars?.map((el) => (
                        <div className="product-card" key={el.id} >
                            <img src={el.img} alt={el.title + " " + el.id} />
                            <div>
                                <h3 style={{fontSize:"16px"}}>{el.title}</h3>
                                <p style={{ marginTop: "-10px",color:"rgb(166, 165, 165)" }}>₹ {el.price} Lakh</p>
                            </div>
                        </div>
                    ))

                }
            </div>
        </section>
    )
}
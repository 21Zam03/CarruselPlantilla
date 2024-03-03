import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/sliderComponent.css';
import aries from '../images/aries.jpg';
import tauro from '../images/tauro.jpg';
import geminis from '../images/geminis.jpg';
import cancer from '../images/cancer.jpg';
import leo from '../images/leo.jpg';
import virgo from '../images/virgo.jpg';
import libra from '../images/libra.jpg';
import escorpio from '../images/escorpio.jpg';
import sagitario from '../images/sagitario.jpg';
import capricornio from '../images/capricornio.jpg';
import acuario from '../images/acuario.jpg';
import piscis from '../images/piscis.jpg';

function SliderComponent() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="slider-componente">
            <Slider {...settings} className="contenedor-slider">
                <div className="contenedor-imagen">
                    <img src={aries} alt="aries"/>
                </div>
                <div className="contenedor-imagen">
                    <img src={tauro} alt="tauro"/>
                </div>
                <div className="contenedor-imagen">
                    <img src={geminis} alt="geminis"/>
                </div>
                <div className="contenedor-imagen">
                    <img src={cancer} alt="cancer"/>
                </div>
                <div className="contenedor-imagen">
                    <img src={leo} alt="leo"/>
                </div>
                <div className="contenedor-imagen">
                    <img src={virgo} alt="virgo"/>
                </div>
                <div className="contenedor-imagen">
                    <img src={libra} alt="libra"/>
                </div>
                <div className="contenedor-imagen">
                    <img src={escorpio} alt="escorpio"/>
                </div>
                <div className="contenedor-imagen">
                    <img src={sagitario} alt="sagitario"/>
                </div>
                <div className="contenedor-imagen">
                    <img src={capricornio} alt="capricornio"/>
                </div>
                <div className="contenedor-imagen">
                    <img src={acuario} alt="acuario"/>
                </div>
                <div className="contenedor-imagen">
                    <img src={piscis} alt="piscis"/>
                </div>
            </Slider>
        </div>
    );
}

export default SliderComponent;
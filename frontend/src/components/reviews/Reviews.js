import Footer from "../footer/Footer";
import "./Reviews.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";

function Reviews() {



    const [cards, setCards] = useState([
        {
            image: "/images/Ellipse4.png",
            name: "Ірина Литвиненко",
            city: "м. Запоріжжя",
            title: "\"Замовим ще\"",
            comment: "Неперевершений смак, ніколи не їли таких гарних та смачних тортів, від тепер тілько у вас й замовляємо"
        },
        {
            image: "/images/Ellipse4.png",
            name: "Ірина Литвиненко",
            city: "м. Запоріжжя",
            title: "\"Всі у захваті\"",
            comment: "Дякую, тортики виявилися дуже смачними, особливо шоколадний з лимонним суфле. Чекатимемо нових шедеврів"
        },
        {
            image: "/images/Ellipse4.png",
            name: "Ірина Литвиненко",
            city: "м. Запоріжжя",
            title: "\"Найкращі!\"",
            comment: "Замовляла нареченому на корпоротив, велика компанія впорполася дуже швидко, усі були дуже задоволені, дякую"
        }
    ]);

    function handleClick() {
        let tmp = [...cards];
        tmp.unshift(tmp.pop());
        console.info(tmp);
        setCards(tmp);
    }

    let isValid = /^(\+\d{10,13}|\d{10,13})$/;



    const numberSchema = yup.object().shape({
        number: yup.string().required("Ви не ввели номер!").matches(isValid, "Неправильний формат номеру!"),
    });
    const [numberActive, setNumberActive] = useState(false);
    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        handleReset
    } = useFormik({
        initialValues: {
            number: "",
        },
        validationSchema: numberSchema,
        onSubmit: async () => {
            await order(values);
            handleReset(values);
        },
    });

    const order = async ({ number }) => {
        try {
            const response = await axios.post("https://capstone-project-backend-kappa.vercel.app/", {
                number,
            });
            setNumberActive(true);
            return response.data;
        } catch (e) {
            setNumberActive(false);
            console.log(e);
        }
    };

    return (
        <div className="reviews-comp" id="reviews">
            <div className="rev-title-wrap">
                <h1 className="rev-title">Відгуки наших клієнтів</h1>
            </div>
            <div className="rev-container">
                <div>
                    <div className="rev-card-secondary rev-card-secondary-left">
                        <div>
                            <p>{cards[0].title}</p>
                            <p>{cards[0].comment}</p>
                        </div>
                        <div>
                            <img src={cards[0].image} alt="" />
                            <p>{cards[0].name}</p>
                            <p>{cards[0].city}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="rev-card-icon">“</span>
                    <div className="rev-card-main">
                        <div>
                            <p className="rev-card-title">{cards[1].title}</p>
                            <p className="rev-card-comment">{cards[1].comment}</p>
                        </div>
                        <div>
                            <img src={cards[1].image} alt="" />
                            <p className="rev-card-name">{cards[1].name}</p>
                            <p className="rev-card-city">{cards[1].city}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="rev-card-icon-secondary">“</span>
                    <div className="rev-card-secondary rev-card-secondary-right">
                        <div>
                            <p className="rev-card-title">{cards[2].title}</p>
                            <p className="rev-card-comment">{cards[2].comment}</p>
                        </div>
                        <div>
                            <img src={cards[2].image} alt="" />
                            <p>{cards[2].name}</p>
                            <p>{cards[2].city}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-cont">
                <button onClick={handleClick} className="button-slide">
                    <img src="/images/arrowSlider.svg" alt="" className="arrow-slide" />
                </button>
            </div>
            <div className="make-an-order" id="order">
                <img className="rasberry-rev" src="/images/rasberry4.png" alt="" />
                <div className="order-card">
                    <h2 className="card-title">Щоб зробити замовлення, вкажіть номер</h2>
                    <p className="card-text">Ми передзвонимо вам протягом години</p>
                    <div className="get-number">
                        <form onSubmit={handleSubmit}>
                            <div className="input-number">
                                <div>
                                    <div className="circle"></div>
                                    <img src="/images/call.png" alt="" className="call-icon" />
                                    <input type="text" id="number" name="number" placeholder="+380508882588"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.number}
                                        touched={touched.number}
                                        errors={errors.number}
                                    />
                                </div>
                                <div className="button-rev-main">
                                    <button type="submit" className="button-rev-order">Зробити
                                        замовлення
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div>
                            {touched.number && errors.number ?
                                <div className="formlabel">{errors.number}</div> : null}
                            <p className={numberActive ? "submit-number active" : "submit-number"}>
                                Номер успішно надіслано!
                            </p>
                        </div>
                    </div>
                </div>
                <img className="blackberry-rev" src="/images/blackberry4.png" alt="" />
            </div>
            <Footer />
        </div>

    );
}

export default Reviews;
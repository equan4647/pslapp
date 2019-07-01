import React from 'react'
import Slick from 'react-slick'
import style from './slider.css'
import { Link } from 'react-router-dom'

const sliderTemplates = (props) => {

    let template = null;

    const setting = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...props.settings
    }

    switch (props.type) {
        case ('featured'):
            template = props.data.map((item, i) => {
                return (
                    <div key={i}>
                        <div className={style.featured_item}>
                            <div className={style.featured_image}
                                style={{
                                    background: `url(../images/articles/${item.image})`
                                }}>
                                <Link to={`/articles/${item.id}`}>
                                    <div className={style.featured_title}>
                                        {item.title}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                )

            });
            break;
        default:
            template = null;


    }

    return (
        <Slick {...setting}  >
            {template}
        </Slick>
    )
}
export default sliderTemplates;

import "./Header.css"
import Nav from "../nav/Nav";

function Header() {
  return (
    <div className="header">
      <Nav />
      <div className="header-title-wrapper">
        <h1 className="header-title">Відкрийте нові горізонти солодкості</h1>
      </div>

      <div className="header-section">

        <div>
          <h2 className="header-discription">Авторські кондитерські вироби від Алли Губіної</h2>
          <div className="header-order">
            <div className="header-order-button">
              <a className="button header-button" href="#order"> Залишити заявку</a>
            </div>
            <div className="header-order-button button-share">
              <a className="button play-button" href="https://www.youtube.com/watch?v=sRe1iV8oC4k&ab_channel=%D0%9D%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B6%D0%B6%D1%8F" target="_blank" rel=""></a>
              <div>
                <span className="play-button-text">Подивіться,<br /> що ми вмієм</span>
              </div>
            </div>
          </div>
          <div className="social-medias">
            <h3 className="social-medias-text">Підписуйтесь на нас у соцмережах:</h3>
            <div>
              <a className="button button-youtube" href="https://www.youtube.com/@zieit_forever8303" target="_blank" rel=""></a>
              <a className="button button-zieit" href="https://www.zieit.edu.ua/" target="_blank"></a>
            </div>
          </div>
        </div>

        <div className="button-container">
          <div className="button button-img">
            <img src="/images/image2.png" alt="" />
            <img className="header-card-blackberry" src="/images/blackberry_PNG32 1.png" alt="" />
            <a className="button-title" href="https://filizhankakavu.com/zhuravlynnyy-tort-z-maskarpone/" target="blank" rel="">
              <p className="button-text">Журавлинний торт з маскарпоне</p>
              <img className="arrow-image" src="/images/Arrow1.svg" alt="" />
            </a>
          </div>
          <div className="button button-img">
            <img className="header-card-img-2" src="/images/image4.png" alt="" />
            <img className="header-card-strawberry" src="/images/strawberry_PNG89 1.png" alt="" />
            <img className="header-card-malina" src="/images/0_5acea_7d7d9a0_orig 1.png" alt="" />
            <a className="button-title" href="https://bezglutex.com.ua/uk/blog/retsepti/polunichnij-tort-z-vershkovim-kremom/" target="blank">
              <p className="button-text">Полуничний торт з вершками</p>
              <img className="arrow-image" src="/images/Arrow2.svg" alt="" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Header;
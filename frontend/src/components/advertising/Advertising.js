import "./Advertising.css"

function Advertising() {
    return (
        <div className="advertising" id="advertising">
            <div className="wrapper">   
                <div className="ad-wrapper">
                    <h1 className="advertising-title">Чому ми?</h1>
                    <div className="ad-info">
                        <span className="ad-number">1</span>
                        <p className="ad-text ad-text-1">За 2 роки спекли понад 2300 тортів</p>
                    </div>
                    <div className="ad-info">
                        <span className="ad-number">2</span>
                        <p className="ad-text">Виготовимо торти будь-якої складності</p>
                    </div>
                    <div className="ad-info">
                        <span className="ad-number">3</span>
                        <p className="ad-text ad-text-3">Робимо кожен тортик із любов'ю, навіть цей</p>
                    </div>
                </div>
                <div className="ad-images">
                    <div className="blackberry">
                        <img src="/images/blackberry.png" alt="" />
                    </div>
                    <div className="rasberry">
                        <img src="/images/rasberry.png" alt="" />
                    </div>
                    <div className="tort-image">
                        <img className="tort-icon" src="/images/tort.png" alt="" />
                    </div>
                </div>
                <div className="arrow-right">
                        <img src="/images/right-arrow1.png" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Advertising;

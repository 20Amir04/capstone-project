import "./Selection.css"

function Selection() {
  return (
    <div className="selection" id="selection">
      <div className="selection-title">
        <h1>Будь-які торти<br />на ваш вибір</h1>
      </div>
      <div className="cards">
        <div className="card">       
            <img className="strawberry-sel" src="/images/strawberry3.png" alt=""/>
           <img className="picture" src="/images/Rectangle7.png" alt="" />
          <div>
            <h2 className="title">Наполеон</h2>
            <p className="description">Багато хто, віддаючи перевагу класиці, зробить вибір на користь «Наполеона».
              Випекти його може кожен, оскільки склад гранично простий.</p>
          </div>
        </div>
        <div className="card">
          <img className="picture" src="/images/Rectangle8.png" alt="" />
          <div>
            <h2 className="title">Прага</h2>
            <p className="description">Класична «Прага» з глибоким смаком вразить у серце любителів шоколаду!</p>
          </div>
        </div>
        <div className="card">
          <img className="picture" src="/images/Rectangle9.png" alt="" />
          <div>
            <h2 className="title">Млинний торт</h2>
            <p className="description">Простий млинець можна спокійно подати без приводу.
              Виріб дуже просто готується, якщо вже відпрацьовано навичку приготування тонких млинців.</p>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <img className="picture" src="/images/Rectangle10.png" alt="" />
          <div>
            <h2 className="title">Морквяний торт</h2>
            <p className="description">Морква, горіхи та ніжний сир – головні складові цього торта.
              Зазвичай на нього звертають увагу справжні гурмани, здатні розглянути у простому овочі величезний потенціал!</p>
          </div>
        </div>
        <div className="card">
          <img className="picture" src="/images/Rectangle11.png" alt="" />
          <div>
            <h2 className="title">Молочна дівчинка</h2>
            <p className="description">Якщо на приготування торта у вас є лише 1 година, вибирайте "Молочну дівчинку"!
              Доступні продукти, простий рецепт, а результат перевершує всі очікування.
              Прикрашайте десерт на смак: фрукти, ягоди, мастика - підійде все.</p>
          </div>
        </div>
        <div className="card">       
           <img className="picture" src="/images/Rectangle12.png" alt="" />
           <img className="blackberry-sel" src="/images/blackberry3.png" alt=""/>
          <div>
            <h2 className="title">Трюфельний торт</h2>
            <p className="description">Ось ще один варіант мегашоколадних ласощів.
              Терпкий трюфельний смак начинки та ніжний бісквіт – так двома словами можна описати торт.</p>
          </div>
        </div>
      </div>
      <a className="button order-button" href="#order"> Залишити заявку</a>
    </div>
  );
}

export default Selection;
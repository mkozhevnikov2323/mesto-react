
function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src="#" alt="Фото профиля" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button type="button" className="profile__edit-bth"></button>
          <p className="profile__profession">Исследователь океана</p>
        </div>
        <button type="button" className="profile__add-btn"></button>
      </section>
      <section>
        <ul className="elements">

        </ul>
      </section>
    </main>
  )
}

export default Main;

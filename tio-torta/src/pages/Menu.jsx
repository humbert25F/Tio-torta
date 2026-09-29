const menuSemana = [
  {
    dia: "Lunes",
    platos: [
      { nombre: "Milanesa con pure", precio: 22000, img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=80", desc: "Milanesa de carne, pure cremoso y ensalada fresca." },
      { nombre: "Pollo al horno", precio: 20000, img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=80", desc: "Muslo de pollo dorado, arroz primavera y verduras." }
    ]
  },
  {
    dia: "Martes",
    platos: [
      { nombre: "Tallarines con tuco", precio: 18000, img: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=900&q=80", desc: "Pasta casera con salsa de tomate, carne y queso rallado." },
      { nombre: "Menu vegetariano", precio: 17000, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80", desc: "Tarta de verduras, ensalada completa y sopa del dia." }
    ]
  },
  {
    dia: "Miercoles",
    platos: [
      { nombre: "Guiso de arroz", precio: 19000, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80", desc: "Guiso casero con carne, verduras y pan fresco." },
      { nombre: "Bife con ensalada", precio: 23000, img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80", desc: "Bife a la plancha con ensalada mixta y mandioca." }
    ]
  },
  {
    dia: "Jueves",
    platos: [
      { nombre: "Lasagna casera", precio: 24000, img: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=900&q=80", desc: "Lasagna de carne con salsa roja y queso gratinado." },
      { nombre: "Pescado con arroz", precio: 25000, img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80", desc: "Filet de pescado, arroz blanco y ensalada fresca." }
    ]
  },
  {
    dia: "Viernes",
    platos: [
      { nombre: "Vori vori de pollo", precio: 21000, img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80", desc: "Caldo de pollo con bolitas de maiz y verduras." },
      { nombre: "Hamburguesa completa", precio: 20000, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80", desc: "Hamburguesa con queso, vegetales y papas rusticas." }
    ]
  }
];

function Menu() {
  return (
    <section className="section menu-section">
      <div className="section__header">
        <p className="eyebrow">Menu actualizado</p>
        <h2>Opciones de lunes a viernes</h2>
        <p>Todos los dias contamos con opciones deliciosas.</p>
      </div>

      <div className="week-menu">
        {menuSemana.map((bloque) => (
          <section className="day-menu" key={bloque.dia}>
            <h3>{bloque.dia}</h3>
            <div className="dish-grid">
              {bloque.platos.map((plato) => (
                <article className="dish-card" key={plato.nombre}>
                  <img src={plato.img} alt={plato.nombre} />
                  <div className="dish-card__body">
                    <div>
                      <h4>{plato.nombre}</h4>
                      <p>{plato.desc}</p>
                    </div>
                    <div className="dish-card__footer">
                      <span>Gs. {plato.precio.toLocaleString('es-PY')}</span>
                      <button className="button button--small" type="button">Agregar</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Menu;
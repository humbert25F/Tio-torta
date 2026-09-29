function Pedido() {
  return (
    <aside className="order-panel" aria-label="Resumen del pedido">
      <p className="eyebrow">Tu seleccion</p>
      <h2>Carrito de pedidos</h2>

      <div className="order-list">
        <p className="empty-message">Todavia no agregaste platos.</p>
      </div>

      <div className="order-total">
        <span>Total</span>
        <strong>Gs. 0</strong>
      </div>

      <form className="order-form">
        <label htmlFor="customerName">Nombre</label>
        <input id="customerName" type="text" placeholder="Ej: Maria Lopez" />

        <label htmlFor="notes">Observaciones</label>
        <textarea id="notes" rows="3" placeholder="Sin cebolla, con extra ensalada, etc."></textarea>

        <button className="button button--primary" type="button">
          Confirmar pedido
        </button>
      </form>
    </aside>
  );
}

export default Pedido;
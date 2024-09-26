import DetalleMovie from "../components/DetalleMovie/DetalleMovie";

const Detalle = ({match}) => {

  const id = match.params.id;

  return (
    <section>
      <h2>Página de detalle:</h2>
      <DetalleMovie id={id} />
    </section>
  )
}

export default Detalle;
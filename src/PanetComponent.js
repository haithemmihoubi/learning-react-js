export const PlanetComponent = (props) => {
  return (
    <div>
        <p>{props.name}: {props.isGasPlanet?"yes":"false"}</p>

    </div>
    );
}
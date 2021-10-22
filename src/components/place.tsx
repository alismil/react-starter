import { parentPort } from "worker_threads";

interface PlaceProps {
  title: string;
  place: string;
  country: string;
  imageURL: string;
  googleMapsURL: string;
  description: string;
}

function Place(props: PlaceProps): JSX.Element {
  return (
    <>
      <img src={props.imageURL} alt={props.place} />
      <h2>{props.title}</h2>
      <h3>
        {props.place}, {props.country} (
        <a href={props.googleMapsURL}>map link</a>)
      </h3>
      <p>{props.description}</p>
    </>
  );
}

export default Place;

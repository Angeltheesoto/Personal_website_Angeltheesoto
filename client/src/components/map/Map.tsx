import "./map.css";

interface Props {
  envData?: string;
}

export default function Map({ envData }: Props) {
  return (
    <div className="map-container">
      <iframe
        title="myMap"
        width="100%"
        height="100%"
        src={`https://api.maptiler.com/maps/c409819f-850d-4d69-b2ad-5c95fdc642d8/?key=q4hzPQ0k9bKIF1srWkmD#9.6/40.73123/-73.93673`}
      ></iframe>
    </div>
  );
}

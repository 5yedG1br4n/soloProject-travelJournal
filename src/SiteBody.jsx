import LocationCard from "./LocationCard.jsx";
import data from "./data.js";

export default function SiteBody() {
  const travelData = data.map((place) => {
    return <LocationCard key={place.id} {...place} />;
  });

  return <main className="flex flex-col py-12 px-16 gap-12">{travelData}</main>;
}

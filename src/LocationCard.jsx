import locationPin from "./assets/location_pin.svg";

export default function LocationCard(props) {
  return (
    <section className="flex mx-auto gap-6 text-red-900 items-center w-2/3">
      <img
        src={props.imageUrl}
        alt={`Image of ${props.title}`}
        className="w-32 h-44 object-cover rounded-md"
      />
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <img src={locationPin} alt="A red Location Pin" className="h-3" />
          <h3 className="uppercase tracking-[.25rem]">{props.location}</h3>
          <a
            href={props.googleMapsUrl}
            className="text-xs text-red-500 underline"
          >
            <p>View on Google Maps</p>
          </a>
        </div>
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <h3 className="text-sm font-bold">
          {props.startDate} - {props.endDate}
        </h3>
        <p className="text-sm">{props.description}</p>
      </div>
    </section>
  );
}

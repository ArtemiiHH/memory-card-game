import { useEffect, useState } from "react";
import { getCountries } from "../data/fetchApi";
import Card from "./Card";

export default function CardGrid() {
  const [listCountries, setListCountries] = useState([]);

  // Run effect once, when component appears
  useEffect(() => {
    const countries = getCountries();
    setListCountries(countries);
  }, []);

  return (
    <div className="card-grid">
      {listCountries.map((country) => {
        <Card
          name={country.name}
          flag={country.flag}
        ></Card>
      })}
    </div>
  );
}

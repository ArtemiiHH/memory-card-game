import { useEffect, useState } from "react";
import { getCountries } from "../data/fetchApi";
import Card from "./Card";

export default function CardGrid() {
  // Store final list of countries
  const [listCountries, setListCountries] = useState([]);

  // Run effect once, when component appears
  useEffect(() => {
    async function fetchCountries() {
      // Wait for API to finish
      const countries = await getCountries();
      // Store resolved data
      setListCountries(countries);
    }

    fetchCountries();
  }, []); // Run once on mount

  return (
    <div className="card-grid">
      {listCountries.map((country) => (
        <Card key={country.name} name={country.name} flag={country.flag}></Card>
      ))}
    </div>
  );
}

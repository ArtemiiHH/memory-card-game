// Flags API
export async function getCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();

  return data.map((country) => ({
    name: country.name.common,
    flag: country.flags.png,
  }));
}

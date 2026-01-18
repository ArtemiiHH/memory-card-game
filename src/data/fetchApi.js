// Flags API
export async function getCountries() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags",
  );

  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }

  const data = await response.json();

  return data.map((country) => ({
    name: country.name.common,
    flag: country.flags.png,
  }));
}

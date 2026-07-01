import countries from "./countries.json";

// Local country data (name + flag), bundled with the app.
// restcountries.com deprecated its old free/unauthenticated API and now
// requires an account + API key, which isn't viable for a static client-side
// app, so flags are served from flagcdn.com instead.
export async function getCountries() {
  return countries;
}

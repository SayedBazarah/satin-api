import maxmind, { CountryResponse } from "maxmind";
import path from "path";
import { cwd } from "process";

export const getCountry = async (ip: string) => {
  const lookup = await maxmind.open<CountryResponse>(
    path.join(cwd(), "/public/GeoLite2-Country.mmdb")
  );

  const data = lookup.get(ip);
  return data?.country?.iso_code;
};

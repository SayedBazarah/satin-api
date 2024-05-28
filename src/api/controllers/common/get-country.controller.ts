import { getCountry } from "../../utils/get-geo";

import { NotFoundError } from "../../errors/notfound-error";
import { BadRequestError } from "../../errors/bad-request-error";

import { GetCountryHandler } from "../../types/enpoints/config.endpoints";

export const GetCountry: GetCountryHandler = async (req, res, next) => {
  try {
    const ip = req.headers["x-forwarded-for"] as string;
    if (ip) {
      const countryCode = await getCountry(ip);

      if (!countryCode) return new NotFoundError("not fount");

      return res.status(200).json({ code: countryCode.toLowerCase() });
    } else {
      return new NotFoundError("no ip found");
    }
  } catch (error) {
    return next(new BadRequestError(`${error}`));
  }
};

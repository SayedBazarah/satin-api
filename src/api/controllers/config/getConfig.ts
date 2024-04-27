import { BadRequestError } from "../../errors/bad-request-error";
import { Config } from "../../modals/config.model";
import { Product } from "../../modals/product.model";
import { GetCongif } from "../../types/enpoints/config.endpoints";

export const GetConfigHandler: GetCongif = async (req, res, next) => {
  try {
    // Config id
    // -> 1 is for client
    const config = await Config.findOne({ id: 1 });

    return res.status(200).json({ config });
  } catch (error) {
    return next(new BadRequestError(`${error}`));
  }
};

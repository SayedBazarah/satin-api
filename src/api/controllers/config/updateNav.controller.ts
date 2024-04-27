import { BadRequestError } from "../../errors/bad-request-error";
import { Config } from "../../modals/config.model";
import { Product } from "../../modals/product.model";
import { UpdateNavItem } from "../../types/enpoints/config.endpoints";

export const UpdateNavItemHandler: UpdateNavItem = async (req, res, next) => {
  try {
    console.log("UpdateNavItemHandler");
    console.log("req.body");
    const { nav } = req.body;
    console.log(nav);
    const config = await Config.findOneAndUpdate(
      { id: 1, "nav.subheader": nav.subheader },
      {
        $push: {
          nav: {
            subheader: nav.subheader,
            items: nav.items,
          },
        },
      },
      {
        runValidators: true,
        upsert: true,
        new: true,
      }
    );
    console.log("config ------");
    console.log(config);

    return res.status(200).json({ message: "success" });
  } catch (error) {
    return next(new BadRequestError(`${error}`));
  }
};

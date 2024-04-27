import { env } from "../../config/env";
import { BadRequestError } from "../../errors/bad-request-error";
import { Product } from "../../modals/product.model";
import { UpdateProductHandler } from "../../types/enpoints/product.endpoints";
import { removeFiles, saveFiles } from "../../utils/file";

export const UpdateProduct: UpdateProductHandler = async (req, res, next) => {
  try {
    const _id = req.params.id;

    const files = (req.files as unknown as Express.Multer.File[]) || [];

    // ----------------------------------------------------------------

    const product = await Product.findOne({ _id }).select({
      slug: 1,
      images: 1,
      _id: 0,
    });

    if (!product) return next(new BadRequestError("no product found"));

    // -----------------------------------------------------------------
    // Get All images from client
    // remove http://{api}
    const oldImages =
      (typeof req.body.images !== "string" &&
        req.body.images.map(
          (item: string) => item.split(`${env.apiUrl}/`)[1]
        )) ||
      [];

    // filter to get all un needed resourses to delete it.

    const unNeededResourses = product.images.filter(
      (item) => !oldImages.includes(item)
    );

    const neededResourses = product.images.filter((item) =>
      oldImages.includes(item)
    );

    // -----------------------------------------------------------------

    await Product.findOneAndUpdate(
      { _id },
      {
        ...req.body,
        images: [
          ...files.map(
            (file) => `media/images/products/${product.slug}/${file.filename}`
          ),
          ...neededResourses,
        ],
      },
      {
        runValidators: true,
      }
    );

    // -----------------------------------------------------------------

    if (files) {
      saveFiles(`images/products/${product.slug}`, ...files);

      removeFiles(...unNeededResourses);
    }

    return res.status(200).json({ message: "success" });
  } catch (error) {
    return next(new BadRequestError(`${error}`));
  }
};

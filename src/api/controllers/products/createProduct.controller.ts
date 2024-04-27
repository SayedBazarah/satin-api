import { Product } from "../../modals/product.model";

import { BadRequestError } from "../../errors/bad-request-error";
import { CreateProductHandler } from "../../types/enpoints/product.endpoints";
import { createProductFolder, saveFiles } from "../../utils/file";

export const CreateProduct: CreateProductHandler = async (req, res, next) => {
  try {
    const files = req.files as unknown as Express.Multer.File[];

    const slug = req.body.slug as string;

    await Product.create({
      ...req.body,
      slug: slug.toLowerCase().replace(/\ /g, "-"),
      totalSold: 0,
      images: files.map(
        (file) => `media/images/products/${slug}/${file.filename}`
      ),
    });

    createProductFolder(slug);

    files.forEach((file) => saveFiles(`images/products/${slug}`, file));

    return res.status(201).json({ message: "success" });
  } catch (error) {
    return next(new BadRequestError(`${error}`));
  }
};

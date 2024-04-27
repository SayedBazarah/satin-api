import { BadRequestError } from "../../errors/bad-request-error";
import { Product } from "../../modals/product.model";
import { DeleteProductsHandler } from "../../types/enpoints/product.endpoints";
import { removeFiles, removeFolders } from "../../utils/file";

export const DeleteProducts: DeleteProductsHandler = async (req, res, next) => {
  try {
    console.log(req.body.products);
    const products = await Product.find({
      _id: { $in: req.body.products },
    });

    await Product.deleteMany(
      {
        _id: { $in: req.body.products },
      },
      {}
    ).exec();

    // remove product resourses
    products.forEach((product) => {
      removeFiles(...product.images);
      removeFolders(`media/images/products/${product.slug}`);
    });

    return res.status(200).json({ message: "success" });
  } catch (error) {
    return next(new BadRequestError(`${error}`));
  }
};

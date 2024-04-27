import { BadRequestError } from "../../errors/bad-request-error";
import { Product } from "../../modals/product.model";
import { DeleteProductHandler } from "../../types/enpoints/product.endpoints";
import { removeFiles, removeFolders } from "../../utils/file";

export const DeleteProduct: DeleteProductHandler = async (req, res, next) => {
  try {
    const product = await Product.findOneAndDelete({ _id: req.params.id });

    if (product) {
      removeFiles(...product.images);
      removeFolders(`media/images/products/${product.slug}`);
    }

    return res.status(200).json({ message: "success" });
  } catch (error) {
    return next(new BadRequestError(`${error}`));
  }
};

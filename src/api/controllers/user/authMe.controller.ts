import { Employee } from "../../modals/employee.model";
import { User } from "../../modals/user.model";
import { GetUserHandler } from "../../types/enpoints/user.endpoints";

export const AuthMe: GetUserHandler = async (req, res, next) => {
  const user = await User.findOne({
    token: req.headers["authorization"]?.split(" ")[1],
  }).populate("favorite");

  if (!user) {
    res.status(401);
    return next(new Error("token expired"));
  }

  res.json({
    user: {
      _id: user._id,
      email: user.email,
      name: user.name,
      profileImage: user.profileImage,
      phone: user.phone,
      cart: user.cart,
      favorite: user.favorite,
    },
  });
};

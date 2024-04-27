import { BadRequestError } from "../../errors/bad-request-error";
import { User } from "../../modals/user.model";
import { SinginHandler } from "../../types/enpoints/user.endpoints";
import { comparePwd } from "../../utils/bcrypt";
import { generateToken } from "../../utils/token";

export const SigninHandler: SinginHandler = async (req, res, next) => {
  const user = await User.findOne({
    $or: [{ email: req.body.email }, { phone: req.body.phone }],
  });
  console.log("req.body");
  console.log(req.body);
  console.log(user);

  const isMatch = await comparePwd(req.body.password, user?.password || "");

  if (!user || !isMatch)
    return next(new BadRequestError("email/phone or password is wrong"));

  const token = generateToken({
    email: user.email,
    id: user._id.toString(),
    name: user.name,
    profileImage: user?.profileImage || "",
  });

  // Store token and iP
  user.token = token;
  user.ipAddress = req.ip || user.ipAddress;

  await user.save();

  res.json({
    accessToken: token,
    user: {
      _id: user._id,
      name: user.name,
      phone: user.phone,
      email: user.email,
      profileImage: user.profileImage,
      favorite: user.favorite,
      cart: user.cart,
    },
  });
};

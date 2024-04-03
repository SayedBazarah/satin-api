import { sign } from "jsonwebtoken";

import { env } from "../config/env";
import { IJwtPayload } from "../types/JwtPayload";

export const generateToken = (payload: IJwtPayload, expire = "12h") =>
  sign(payload, env.jwt.secret, { expiresIn: expire });

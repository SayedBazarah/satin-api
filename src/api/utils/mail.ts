import { createTransport } from "nodemailer";

import { env } from "../config/env";

export const sendMail = async (options: {
  to: string;
  subject: string;
  html: string;
}) => {
  if (env.environment === "test") return;
  try {
    const transport = createTransport({
      service: env.mail.service,
      host: env.mail.host,
      port: env.mail.port,
      auth: { user: env.mail.user, pass: env.mail.pass },
    });

    await transport.sendMail({
      from: env.mail.user,
      to: options.to,
      subject: options.subject,
      html: options.html,
    });
  } catch (error) {
    console.error(error);
  }
};

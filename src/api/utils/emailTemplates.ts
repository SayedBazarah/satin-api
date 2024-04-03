export const emailVerificationTemplate = (code: string) => {
  return `
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Please verify your email</title>
  </head>

  <body
    style="
      font-family: public-sans;
      margin: 0px;
      padding: 0px;
      background-color: #ffffff;
    "
  >
    <table
      role="presentation"
      style="
        height: 100%;
        width: 100%;
        border-collapse: collapse;
        border: 0px;
        border-spacing: 0px;
        font-family: Arial, Helvetica, sans-serif;
        background-color: rgb(239, 239, 239);
      "
    >
      <tbody>
        <tr>
          <td
            align="center"
            style="padding: 1rem 2rem; vertical-align: top; width: 100%"
          >
            <table
              role="presentation"
              style="
                max-width: 600px;
                border-collapse: collapse;
                border: 0px;
                border-spacing: 0px;
                text-align: center;
              "
            >
              <tbody>
                <tr>
                  <td style="padding: 40px 0px 0px">
                    <div
                      style="
                        padding: 25px;
                        border-radius: 1.5rem;
                        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
                        background-color: rgb(255, 255, 255);
                      "
                    >
                      <div style="text-align: center">
                        <div style="padding-bottom: 20px">
                          <img
                            src="https://i.ibb.co/8nk4750/spacematch-new-logo.png"
                            alt="Company"
                            style="width: 56px"
                          />
                        </div>
                      </div>
                      <div style="color: #212b36; text-align: center">
                        <h1
                          style="
                            margin-top: 1rem;
                            font-style: normal;
                            font-weight: 700;
                            line-height: 3rem;
                          "
                        >
                          Verify Your Email Address
                        </h1>
                        <p
                          style="
                            color: #637381;
                            margin-top: -1rem;
                            padding-bottom: 16px;
                            font-size: 0.875rem;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 1.375rem;
                          "
                        >
                          To start using SpaceMatch, click the verify
                          email button below.
                        </p>
                        <p style="padding-bottom: 16px">
                          <a
                            href=${code}
                            target="_blank"
                            style="
                              text-decoration: none;
                              padding: 1rem;
                              width: 13.8125rem;
                              border-radius: 0.5rem;
                              color: #ffffff;
                              background: linear-gradient(
                                135deg,
                                #0232af 0%,
                                #30f 100%
                              );
                              display: inline-block;
                              margin: 0.5rem 0;
                            "
                          >Verify Email</a>
                        </p>

                        <div>
                          <p>
                            If the above link is not working, copy and paste the
                            link below into your browser to verify your email:
                          </p>
                          <a href=${code} target="_blank">${code}</a>
                        </div>

                        <hr
                          style="
                            margin: 2rem;
                            border: 0;
                            border-top: 1px solid #e0e4e9;
                          "
                        />

                        <p style="padding: 0 26px; color: #637381">
                          SpaceMatch is an online platform for creating and
                          managing your space all in the browser.
                        </p>
                      </div>
                    </div>
                    <div
                      style="
                        padding-top: 20px;
                        color: rgb(153, 153, 153);
                        text-align: center;
                      "
                    ></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
  `;
};

export const forgetPasswordTemplate = (code: string) => {
  return `
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Please verify your email</title>
  </head>

  <body
    style="
      font-family: public-sans;
      margin: 0px;
      padding: 0px;
      background-color: #ffffff;
    "
  >
    <table
      role="presentation"
      style="
        height: 100%;
        width: 100%;
        border-collapse: collapse;
        border: 0px;
        border-spacing: 0px;
        font-family: Arial, Helvetica, sans-serif;
        background-color: rgb(239, 239, 239);
      "
    >
      <tbody>
        <tr>
          <td
            align="center"
            style="padding: 1rem 2rem; vertical-align: top; width: 100%"
          >
            <table
              role="presentation"
              style="
                max-width: 600px;
                border-collapse: collapse;
                border: 0px;
                border-spacing: 0px;
                text-align: center;
              "
            >
              <tbody>
                <tr>
                  <td style="padding: 40px 0px 0px">
                    <div
                      style="
                        padding: 25px;
                        border-radius: 1.5rem;
                        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
                        background-color: rgb(255, 255, 255);
                      "
                    >
                      <div style="text-align: center">
                        <div style="padding-bottom: 20px">
                          <img
                            src="https://i.ibb.co/8nk4750/spacematch-new-logo.png"
                            alt="Company"
                            style="width: 56px"
                          />
                        </div>
                      </div>
                      <div style="color: #212b36; text-align: center">
                        <h1
                          style="
                            margin-top: 1rem;
                            font-style: normal;
                            font-weight: 700;
                            line-height: 3rem;
                          "
                        >
                          Reset Your Password
                        </h1>
                        <p
                          style="
                            color: #637381;
                            margin-top: -1rem;
                            padding-bottom: 16px;
                            font-size: 0.875rem;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 1.375rem;
                          "
                        >
                          To reset your password, click the reset password
                          button below.
                        </p>
                        <p style="padding-bottom: 16px">
                          <a
                            href=${code}
                            target="_blank"
                            style="
                              text-decoration: none;
                              padding: 1rem;
                              width: 13.8125rem;
                              border-radius: 0.5rem;
                              color: #ffffff;
                              background: linear-gradient(
                                135deg,
                                #0232af 0%,
                                #30f 100%
                              );
                              display: inline-block;
                              margin: 0.5rem 0;
                            "
                          >Reset Password</a>
                        </p>

                        <div>
                          <p>
                            If the above link is not working, copy and paste the
                            link below into your browser to reset your password:
                          </p>
                          <a href=${code} target="_blank">${code}</a>
                        </div>

                        <hr
                          style="
                            margin: 2rem;
                            border: 0;
                            border-top: 1px solid #e0e4e9;
                          "
                        />

                        <p style="padding: 0 26px; color: #637381">
                          SpaceMatch is an online platform for creating and
                          managing your space all in the browser.
                        </p>
                      </div>
                    </div>
                    <div
                      style="
                        padding-top: 20px;
                        color: rgb(153, 153, 153);
                        text-align: center;
                      "
                    ></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
  `;
};

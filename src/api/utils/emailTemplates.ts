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
                          To start using ScaleUp, click the verify
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
                        ScaleUp is an online platform for shoping
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
                        ScaleUp is an online platform for Shoping.
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

export const wholesaleRequestTemplate = (user: {
  email: string;
  name: string;
  phone: string;
  address: string;
  message: string;
  business?: string;
}) => `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
 <head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title>Empty template</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <style type="text/css">
.rollover:hover .rollover-first {
  max-height:0px!important;
  display:none!important;
  }
  .rollover:hover .rollover-second {
  max-height:none!important;
  display:block!important;
  }
  .rollover span {
  font-size:0px;
  }
  u + .body img ~ div div {
  display:none;
  }
  #outlook a {
  padding:0;
  }
  span.MsoHyperlink,
span.MsoHyperlinkFollowed {
  color:inherit;
  mso-style-priority:99;
  }
  a.es-button {
  mso-style-priority:100!important;
  text-decoration:none!important;
  }
  a[x-apple-data-detectors] {
  color:inherit!important;
  text-decoration:none!important;
  font-size:inherit!important;
  font-family:inherit!important;
  font-weight:inherit!important;
  line-height:inherit!important;
  }
  .es-desk-hidden {
  display:none;
  float:left;
  overflow:hidden;
  width:0;
  max-height:0;
  line-height:0;
  mso-hide:all;
  }
  .es-button-border:hover > a.es-button {
  color:#ffffff!important;
  }
@media only screen and (max-width:600px) {.es-m-p20b { padding-bottom:20px!important } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } h1 { font-size:30px!important; text-align:left } h2 { font-size:24px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover span, .es-m-txt-c .rollover span, .es-m-txt-l .rollover span { line-height:0!important; font-size:0!important } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:18px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:inline-block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .es-social td { padding-bottom:10px } .h-auto { height:auto!important } }
@media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
</style>
 </head>
 <body class="body" style="width:100%;height:100%;padding:0;Margin:0">
  <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#F6F6F6"><!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#f6f6f6"></v:fill>
			</v:background>
		<![endif]-->
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#F6F6F6">
     <tr>
      <td valign="top" style="padding:0;Margin:0">
       <table class="es-header" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="es-header-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr>
              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-right:20px;padding-left:20px"><!--[if mso]><table style="width:560px" cellpadding="0"
                            cellspacing="0"><tr><td style="width:180px" valign="top"><![endif]-->
               <table class="es-left" cellspacing="0" cellpadding="0" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr>
                  <td class="es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:180px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0;font-size:0"><img src="https://fhjchto.stripocdn.email/content/guids/CABINET_040777800e2e453cd759392abc0caaf90a54991b34d714eaddef260647038388/images/satin_store_log.png" alt="" width="180" class="adapt-img" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:360px" valign="top"><![endif]-->
               <table class="es-right" cellspacing="0" cellpadding="0" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:360px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-top:65px"><h1 style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:30px;font-style:normal;font-weight:normal;line-height:60px !important;color:#a34975" align="center">Wholesale Request</h1></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td></tr></table><![endif]--></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr>
              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-right:20px;padding-left:20px">
               <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">New wholesale request</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><strong>Name:&nbsp;${user.name}</strong></p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><strong>Email:&nbsp;${user.email}</strong></p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><strong>Phone:${user.phone}</strong></p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><strong>Business Name: ${user.business}</strong></p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><strong>Address:</strong>${user.address}</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><strong>Message:&nbsp;</strong>${user.message}</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
     </tr>
   </table>
  </div>
 </body>
</html>
`;

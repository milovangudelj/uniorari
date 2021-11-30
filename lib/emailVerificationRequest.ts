// Email HTML body
export const html = ({
	url,
	host,
	email,
}: Record<"url" | "host" | "email", string>) => {
	// Insert invisible space into domains and email address to prevent both the
	// email address and the domain from being turned into a hyperlink by email
	// clients like Outlook and Apple mail, as this is confusing because it seems
	// like they are supposed to click on their email address to sign in.
	const escapedEmail = `${email.replace(/\./g, "&#8203;.")}`;
	const escapedHost = `${host.replace(/\./g, "&#8203;.")}`;

	// Some simple styling options

	return `
  <html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml"><head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <!--<![endif]-->
  <!--[if (gte mso 9)|(IE)]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  <!--[if (gte mso 9)|(IE)]>
<style type="text/css">
body {width: 580px;margin: 0 auto;}
table {border-collapse: collapse;}
table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
  <style type="text/css">
body, p, div {
  font-family: inherit;
  font-size: 14px;
}
body {
  color: #000000;
}
body a {
  color: #6366F1;
  text-decoration: none;
}
p { margin: 0; padding: 0; }
table.wrapper {
  width:100% !important;
  table-layout: fixed;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
img.max-width {
  max-width: 100% !important;
}
.column.of-2 {
  width: 50%;
}
.column.of-3 {
  width: 33.333%;
}
.column.of-4 {
  width: 25%;
}
ul ul ul ul  {
  list-style-type: disc !important;
}
ol ol {
  list-style-type: lower-roman !important;
}
ol ol ol {
  list-style-type: lower-latin !important;
}
ol ol ol ol {
  list-style-type: decimal !important;
}
@media screen and (max-width:480px) {
  .preheader .rightColumnContent,
  .footer .rightColumnContent {
    text-align: left !important;
  }
  .preheader .rightColumnContent div,
  .preheader .rightColumnContent span,
  .footer .rightColumnContent div,
  .footer .rightColumnContent span {
    text-align: left !important;
  }
  .preheader .rightColumnContent,
  .preheader .leftColumnContent {
    font-size: 80% !important;
    padding: 5px 0;
  }
  table.wrapper-mobile {
    width: 100% !important;
    table-layout: fixed;
  }
  img.max-width {
    height: auto !important;
    max-width: 100% !important;
  }
  a.bulletproof-button {
    display: block !important;
    width: auto !important;
    font-size: 80%;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .columns {
    width: 100% !important;
  }
  .column {
    display: block !important;
    width: 100% !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .social-icon-column {
    display: inline-block !important;
  }
}
</style>
  <!--user entered Head Start--><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&amp;display=swap" rel="stylesheet"><style>
body {
font-family: 'Inter', sans-serif;
}
</style><!--End Head user entered-->
</head>
<body>
  <center class="wrapper" data-link-color="#6366F1" data-body-style="font-size:14px; font-family:inherit; color:#000000; background-color:#F8FAFC;">
    <div class="webkit">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#F8FAFC">
        <tbody><tr>
          <td valign="top" bgcolor="#F8FAFC" width="100%">
            <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
              <tbody><tr>
                <td width="100%">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tbody><tr>
                      <td>
                        <!--[if mso]>
<center>
<table><tr><td width="580">
<![endif]-->
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:580px;" align="center">
                                  <tbody><tr>
                                    <td role="modules-container" style="padding:24px 24px 24px 24px; color:#000000; text-align:left;" bgcolor="#F8FAFC" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
<tbody><tr>
  <td role="module-content">
    <p>Usa il link qua sotto per accedere a UniOrari</p>
  </td>
</tr>
</tbody></table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="b025555e-c5a3-4bed-93fa-1b92c0cc313a">
<tbody>
  <tr>
    <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
      <img class="max-width" border="0" style="display:block;color:#000000;height: 32px !important;width: auto !important;" width="106" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/66a7cf78de5407c9/1d30a34c-b36f-4369-b8ac-ab2e2bc35470/142x32.png">
    </td>
  </tr>
</tbody>
</table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="01d1f3cd-b74a-4c92-b661-c6798885b473">
<tbody>
  <tr>
    <td style="padding:0px 0px 32px 0px;" role="module-content" bgcolor="">
    </td>
  </tr>
</tbody>
</table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:32px 32px 32px 32px;border-radius: 8px;border: 1px solid #E2E8F0;" bgcolor="#FFFFFF" data-distribution="1">
<tbody>
  <tr role="module-content">
    <td height="100%" valign="top"><table width="468" style="width:468px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
  <tbody>
    <tr>
      <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="50a052bf-8ce5-4fec-9853-b7ad4e138c44">
<tbody>
  <tr>
    <td style="padding:0px 0px 8px 0px; line-height:36px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: 'Inter', sans-serif;"><span style="font-size: 28px;line-height: 36px;color: rgba(0, 0, 0, 0.87);">Hey ${escapedEmail}!<br/>Ci siamo quasi.</span></div><div></div></div></td>
  </tr>
</tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="cc67a927-80ea-4b42-ac0f-89dc69a063fd">
<tbody>
  <tr>
    <td style="text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: 'Inter', sans-serif;"><span style="font-size: 14px;line-height: 20px;white-space: pre-wrap;color: rgba(0, 0, 0, 0.60);">Usa il link qua sotto per accedere a UniOrari e vedere i tuoi corsi.</span></div><div></div></div></td>
  </tr>
</tbody>
</table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="4ec4d1c1-9f5c-4105-ade1-73318cb05e20">
<tbody>
  <tr>
    <td style="padding:0px 0px 32px 0px;" role="module-content" bgcolor="">
    </td>
  </tr>
</tbody>
</table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="c3ea581c-4f21-4718-bb2b-bee5a3c1d8a7">
  <tbody>
    <tr>
      <td align="left" bgcolor="" class="outer-td" style="padding:0px 0px 0px 0px;">
        <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
          <tbody>
            <tr>
            <td align="center" bgcolor="#6366F1" class="inner-td" style="border-radius:6px;/* font-size:16px; *//* line-height: 20px; */text-align:left;background-color:inherit;">
              <a href="${url}" style="background-color:#6366F1;border-radius:8px;color:#ffffff;display:inline-block;font-size: 16px;line-height: 20px;font-weight: bold;padding:8px 16px 8px 16px;text-align:center;text-decoration: none;font-family: 'Inter', sans-serif;" target="_blank">Accedi</a>
            </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table></td>
    </tr>
  </tbody>
</table></td>
  </tr>
</tbody>
</table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="44d62726-8116-49a1-b2c9-ef83960e3ee1">
<tbody>
  <tr>
    <td style="padding:0px 0px 32px 0px;" role="module-content" bgcolor="">
    </td>
  </tr>
</tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="ca09f239-7dc2-40ab-a796-d6b46fec325e">
<tbody>
  <tr>
    <td style="text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style=""><span style="white-space: pre-wrap;font-family: 'Inter', sans-serif;font-size: 14px;line-height: 20px;color: rgba(0, 0, 0, 0.60);">Se non hai richiesto questa mail puoi ignorarla.</span></div><div></div></div></td>
  </tr>
</tbody>
</table></td>
                                  </tr>
                                </tbody></table>
                                <!--[if mso]>
                              </td>
                            </tr>
                          </table>
                        </center>
                        <![endif]-->
                      </td>
                    </tr>
                  </tbody></table>
                </td>
              </tr>
            </tbody></table>
          </td>
        </tr>
      </tbody></table>
    </div>
  </center>

</body></html>
`;
};

// Email Text body (fallback for email clients that don't render HTML, e.g. feature phones)
export const text = ({ url, host }: Record<"url" | "host", string>) => {
	return `Accedi a UniOrari\n\nClicca il link qua sotto per accedere ai tuoi corsi.\n\n${url}\n\n`;
};

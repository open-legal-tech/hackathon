const handlebars = require("handlebars")
const sgMail = require("@sendgrid/mail")
const { isEmpty } = require("ramda")
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const emailTemplateSource = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:v="urn:schemas-microsoft-com:vml"
>
  <head>
    <!--[if gte mso 9
      ]><xml
        ><o:OfficeDocumentSettings
          ><o:AllowPNG /><o:PixelsPerInch
            >96</o:PixelsPerInch
          ></o:OfficeDocumentSettings
        ></xml
      ><!
    [endif]-->
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width" name="viewport" />
    <!--[if !mso]><!-->
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <!--<![endif]-->
    <title></title>
    <!--[if !mso]><!-->
    <!--<![endif]-->
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
      }

      table,
      td,
      tr {
        vertical-align: top;
        border-collapse: collapse;
      }

      * {
        line-height: inherit;
      }

      a[x-apple-data-detectors="true"] {
        color: inherit !important;
        text-decoration: none !important;
      }
    </style>
    <style id="media-query" type="text/css">
      @media (max-width: 620px) {
        .block-grid,
        .col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }

        .block-grid {
          width: 100% !important;
        }

        .col {
          width: 100% !important;
        }

        .col_cont {
          margin: 0 auto;
        }

        img.fullwidth,
        img.fullwidthOnMobile {
          max-width: 100% !important;
        }

        .no-stack .col {
          min-width: 0 !important;
          display: table-cell !important;
        }

        .no-stack.two-up .col {
          width: 50% !important;
        }

        .no-stack .col.num2 {
          width: 16.6% !important;
        }

        .no-stack .col.num3 {
          width: 25% !important;
        }

        .no-stack .col.num4 {
          width: 33% !important;
        }

        .no-stack .col.num5 {
          width: 41.6% !important;
        }

        .no-stack .col.num6 {
          width: 50% !important;
        }

        .no-stack .col.num7 {
          width: 58.3% !important;
        }

        .no-stack .col.num8 {
          width: 66.6% !important;
        }

        .no-stack .col.num9 {
          width: 75% !important;
        }

        .no-stack .col.num10 {
          width: 83.3% !important;
        }

        .video-block {
          max-width: none !important;
        }

        .mobile_hide {
          min-height: 0px;
          max-height: 0px;
          max-width: 0px;
          display: none;
          overflow: hidden;
          font-size: 0px;
        }

        .desktop_hide {
          display: block !important;
          max-height: none !important;
        }
      }
    </style>
    <style id="icon-media-query" type="text/css">
      @media (max-width: 620px) {
        .icons-inner {
          text-align: center;
        }

        .icons-inner td {
          margin: 0 auto;
        }
      }
    </style>
  </head>
  <body
    class="clean-body"
    style="
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      background-color: #283c4b;
    "
  >
    <!--[if IE]><div class="ie-browser"><![endif]-->
    <table
      bgcolor="#283C4B"
      cellpadding="0"
      cellspacing="0"
      class="nl-container"
      role="presentation"
      style="
        table-layout: fixed;
        vertical-align: top;
        min-width: 320px;
        border-spacing: 0;
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        background-color: #283c4b;
        width: 100%;
      "
      valign="top"
      width="100%"
    >
      <tbody>
        <tr style="vertical-align: top" valign="top">
          <td style="word-break: break-word; vertical-align: top" valign="top">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#283C4B"><![endif]-->
            <div style="background-color: #283c4b">
              <div
                class="block-grid"
                style="
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  margin: 0 auto;
                  background-color: #283c4b;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: #283c4b;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#283C4B;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:#283C4B"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color:#283C4B;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                      width: 600px;
                    "
                  >
                    <div class="col_cont" style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 0px;
                          padding-bottom: 0px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <div
                          align="center"
                          class="img-container center autowidth"
                          style="padding-right: 25px; padding-left: 25px"
                        >
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 25px;padding-left: 25px;" align="center"><![endif]-->
                          <div style="font-size: 1px; line-height: 25px"> </div>
                          <div style="font-size: 1px; line-height: 25px"> </div>
                          <!--[if mso]></td></tr></table><![endif]-->
                        </div>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color: #283c4b">
              <div
                class="block-grid"
                style="
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  margin: 0 auto;
                  background-color: #3aaee0;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: #3aaee0;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#283C4B;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:#3AAEE0"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color:#3AAEE0;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                      width: 600px;
                    "
                  >
                    <div class="col_cont" style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 0px;
                          padding-bottom: 0px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top: 30px; padding-bottom: 20px; font-family: Arial, sans-serif"><![endif]-->
                        <div
                          style="
                            color: #ffffff;
                            font-family: Arial, Helvetica Neue, Helvetica,
                              sans-serif;
                            line-height: 1.2;
                            padding-top: 30px;
                            padding-right: 20px;
                            padding-bottom: 20px;
                            padding-left: 20px;
                          "
                        >
                          <div
                            style="
                              line-height: 1.2;
                              font-size: 12px;
                              font-family: Arial, Helvetica Neue, Helvetica,
                                sans-serif;
                              color: #ffffff;
                              mso-line-height-alt: 14px;
                            "
                          >
                            <p
                              style="
                                font-size: 24px;
                                line-height: 1.2;
                                text-align: center;
                                word-break: break-word;
                                font-family: lucida sans unicode, lucida grande,
                                  sans-serif;
                                mso-line-height-alt: 29px;
                                margin: 0;
                              "
                            >
                              <span style="font-size: 24px"
                                >Eine neue Mandantenanfrage</span
                              >
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color: #283c4b">
              <div
                class="block-grid"
                style="
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  margin: 0 auto;
                  background-color: #ffffff;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: #ffffff;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#283C4B;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:#FFFFFF"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color:#FFFFFF;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:10px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                      width: 600px;
                    "
                  >
                    <div class="col_cont" style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 0px;
                          padding-bottom: 10px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 30px; padding-left: 30px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                        <div
                          style="
                            color: #283c4b;
                            font-family: Arial, Helvetica Neue, Helvetica,
                              sans-serif;
                            line-height: 1.5;
                            padding-top: 10px;
                            padding-right: 30px;
                            padding-bottom: 10px;
                            padding-left: 30px;
                          "
                        >
                          <div
                            style="
                              line-height: 1.5;
                              font-size: 12px;
                              font-family: Arial, Helvetica Neue, Helvetica,
                                sans-serif;
                              color: #283c4b;
                              mso-line-height-alt: 18px;
                            "
                          >
                            <p
                              style="
                                font-size: 16px;
                                line-height: 1.5;
                                word-break: break-word;
                                font-family: lucida sans unicode, lucida grande,
                                  sans-serif;
                                mso-line-height-alt: 24px;
                                margin: 0;
                              "
                            >
                              <span style="font-size: 16px"
                                ><strong
                                  >Sehr geehrter Herr Rechtsanwalt,</strong
                                ></span
                              >
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 30px; padding-left: 30px; padding-top: 10px; padding-bottom: 30px; font-family: Arial, sans-serif"><![endif]-->
                        <div
                          style="
                            color: #283c4b;
                            font-family: Arial, Helvetica Neue, Helvetica,
                              sans-serif;
                            line-height: 1.5;
                            padding-top: 10px;
                            padding-right: 30px;
                            padding-bottom: 30px;
                            padding-left: 30px;
                          "
                        >
                          <div
                            style="
                              line-height: 1.5;
                              font-size: 12px;
                              font-family: Arial, Helvetica Neue, Helvetica,
                                sans-serif;
                              color: #283c4b;
                              mso-line-height-alt: 18px;
                            "
                          >
                            <p
                              style="
                                font-size: 12px;
                                line-height: 1.5;
                                word-break: break-word;
                                font-family: lucida sans unicode, lucida grande,
                                  sans-serif;
                                mso-line-height-alt: 18px;
                                margin: 0;
                              "
                            >
                               
                            </p>
                            <p
                              style="
                                font-size: 12px;
                                line-height: 1.5;
                                text-align: left;
                                word-break: break-word;
                                font-family: lucida sans unicode, lucida grande,
                                  sans-serif;
                                mso-line-height-alt: 18px;
                                margin: 0;
                              "
                            >
                              ein möglicher neuer Mandant hat sich über ihr
                              Aufnahmeformular gemeldet. Basierend auf seinen
                              Eingaben käme er für Sie als Mandant in Frage. 
                            </p>
                            <p
                              style="
                                font-size: 12px;
                                line-height: 1.5;
                                text-align: left;
                                word-break: break-word;
                                font-family: lucida sans unicode, lucida grande,
                                  sans-serif;
                                mso-line-height-alt: 18px;
                                margin: 0;
                              "
                            >
                               
                            </p>
                            <p
                              style="
                                font-size: 12px;
                                line-height: 1.5;
                                text-align: left;
                                word-break: break-word;
                                font-family: lucida sans unicode, lucida grande,
                                  sans-serif;
                                mso-line-height-alt: 18px;
                                margin: 0;
                              "
                            >
                              Er hat folgende Angaben gemacht.
                            </p>
                            <p
                              style="
                                font-size: 12px;
                                line-height: 1.5;
                                text-align: left;
                                word-break: break-word;
                                font-family: lucida sans unicode, lucida grande,
                                  sans-serif;
                                mso-line-height-alt: 18px;
                                margin: 0;
                              "
                            >
                               
                            </p>
                            {{{Angaben}}}
                            <p
                              style="
                                font-size: 14px;
                                line-height: 1.5;
                                text-align: left;
                                word-break: break-word;
                                font-family: lucida sans unicode, lucida grande,
                                  sans-serif;
                                mso-line-height-alt: 21px;
                                margin: 0;
                              "
                            >
                              <span style="font-size: 14px"> </span>
                            </p>
                            <p
                              style="
                                font-size: 14px;
                                line-height: 1.5;
                                text-align: left;
                                word-break: break-word;
                                font-family: lucida sans unicode, lucida grande,
                                  sans-serif;
                                mso-line-height-alt: 21px;
                                margin: 0;
                              "
                            >
                              <span style="font-size: 14px"
                                >Mit freundlichen Grüßen</span
                              >
                            </p>
                            <p
                              style="
                                font-size: 14px;
                                line-height: 1.5;
                                text-align: left;
                                word-break: break-word;
                                font-family: lucida sans unicode, lucida grande,
                                  sans-serif;
                                mso-line-height-alt: 21px;
                                margin: 0;
                              "
                            >
                              <span style="font-size: 14px"
                                >Ihr Open-Decision Team</span
                              >
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color: transparent">
              <div
                class="block-grid"
                style="
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  margin: 0 auto;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color:transparent;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                      width: 600px;
                    "
                  >
                    <div class="col_cont" style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 0px;
                          padding-bottom: 0px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="divider"
                          role="presentation"
                          style="
                            table-layout: fixed;
                            vertical-align: top;
                            border-spacing: 0;
                            border-collapse: collapse;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            min-width: 100%;
                            -ms-text-size-adjust: 100%;
                            -webkit-text-size-adjust: 100%;
                          "
                          valign="top"
                          width="100%"
                        >
                          <tbody>
                            <tr style="vertical-align: top" valign="top">
                              <td
                                class="divider_inner"
                                style="
                                  word-break: break-word;
                                  vertical-align: top;
                                  min-width: 100%;
                                  -ms-text-size-adjust: 100%;
                                  -webkit-text-size-adjust: 100%;
                                  padding-top: 15px;
                                  padding-right: 15px;
                                  padding-bottom: 15px;
                                  padding-left: 15px;
                                "
                                valign="top"
                              >
                                <table
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="divider_content"
                                  role="presentation"
                                  style="
                                    table-layout: fixed;
                                    vertical-align: top;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-top: 0px solid transparent;
                                    width: 100%;
                                  "
                                  valign="top"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr
                                      style="vertical-align: top"
                                      valign="top"
                                    >
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                        valign="top"
                                      >
                                        <span></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color: transparent">
              <div
                class="block-grid"
                style="
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  margin: 0 auto;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color:transparent;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                      width: 600px;
                    "
                  >
                    <div class="col_cont" style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 5px;
                          padding-bottom: 5px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="
                            table-layout: fixed;
                            vertical-align: top;
                            border-spacing: 0;
                            border-collapse: collapse;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                          "
                          valign="top"
                          width="100%"
                        >
                          <tr style="vertical-align: top" valign="top">
                            <td
                              align="center"
                              style="
                                word-break: break-word;
                                vertical-align: top;
                                padding-top: 5px;
                                padding-right: 0px;
                                padding-bottom: 5px;
                                padding-left: 0px;
                                text-align: center;
                              "
                              valign="top"
                            >
                              <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                              <!--[if !vml]><!-->
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                class="icons-inner"
                                role="presentation"
                                style="
                                  table-layout: fixed;
                                  vertical-align: top;
                                  border-spacing: 0;
                                  border-collapse: collapse;
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  display: inline-block;
                                  margin-right: -4px;
                                  padding-left: 0px;
                                  padding-right: 0px;
                                "
                                valign="top"
                              >
                                <!--<![endif]-->
                                <tr style="vertical-align: top" valign="top">
                                  <td
                                    align="center"
                                    style="
                                      word-break: break-word;
                                      vertical-align: top;
                                      text-align: center;
                                      padding-top: 5px;
                                      padding-bottom: 5px;
                                      padding-left: 5px;
                                      padding-right: 6px;
                                    "
                                    valign="top"
                                  >
                                  </td>
                                  <td
                                    style="
                                      word-break: break-word;
                                      font-family: Arial, Helvetica Neue,
                                        Helvetica, sans-serif;
                                      font-size: 15px;
                                      color: #9d9d9d;
                                      vertical-align: middle;
                                    "
                                    valign="middle"
                                  >
                                    <a
                                      href="https://www.designedwithbee.com/"
                                      style="
                                        color: #9d9d9d;
                                        text-decoration: none;
                                      "
                                      >Designed with BEE</a
                                    >
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    <!--[if (IE)]></div><![endif]-->
  </body>
</html>
`

const template = handlebars.compile(emailTemplateSource)

exports.handler = async event => {
  const data = JSON.parse(event.body)

  const dataHTML = () => {
    return Object.entries(data.values).reduce((acc, value) => {
      if (!isEmpty(Object.values(value[1]))) {
        acc += `<br/><span>${value[0]}: ${Object.values(value[1])}</span>`
      }
      return acc
    }, `<p>Die Angaben:</p>`)
  }

  const htmlToSend = template({
    Angaben: dataHTML(),
  })

  const msg = {
    to: "phil.garbowsky@gmail.com",
    from: "noreply@open-decision.org",
    subject: "Eine neue Mandantenanfrage",
    html: htmlToSend,
  }

  try {
    await sgMail.send(msg)
  } catch (error) {
    console.error(error)

    if (error.response) {
      console.error(error.response.body)
      return {
        statusCode: 500,
        body: JSON.stringify("Failed to sent mail"),
      }
    }
  }

  // try {
  //   await nodemailerMailgun.sendMail(mailOptions)
  // } catch (error) {
  //   console.log(error)
  //   return {
  //     statusCode: 500,
  //     body: JSON.stringify("Failed to sent mail"),
  //   }
  // }

  return {
    statusCode: 200,
    body: JSON.stringify("Successfully sent mail"),
  }
}

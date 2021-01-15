import { node } from "./Interpreter"

export const tree: { header: any; questions: Record<string, node> } = {
  header: {
    version: 0.1,
    build_date: "2020-04-30",
    tree_name: "Beschwerde R\u00fccklastschrift",
    tree_slug: "beschwerde-rucklastschrift",
    start_node: "gebuhrenhohe",
    vars: {},
  },
  questions: {
    gebuhrenhohe: {
      name: "Geb\u00fchrenh\u00f6he",
      text:
        "<p>Wie hoch sind die von Ihnen geforderten Geb&uuml;hren?</p>\n\n<p>Bitte geben Sie eine Zahl in Euro, gegebenfalls durch ein Komma getrennt,&nbsp;ein.</p>",
      inputs: [
        {
          type: "number",
          label: "Gebührenhöhe",
        },
      ],
      rules: {
        if: [
          {
            "<=": [
              {
                var: "a",
              },
              4.0,
            ],
          },
          "0",
          {
            ">": [
              {
                var: "a",
              },
              4.0,
            ],
          },
          "1",
        ],
      },
      destination: {
        "0": "angemessen",
        "1": "ankundigung",
      },
      action: {},
    },
    ankundigung: {
      name: "Ank\u00fcndigung",
      text:
        "<p>Wurde die Lastschrift vorher durch eine Rechnung angek&uuml;ndigt oder zieht die Firma regelm&auml;&szlig;ig Geld ein?</p>",
      inputs: [
        {
          type: "button",
          display_as: "button",
          label: "",
          options: ["Ja", "Nein"],
        },
      ],
      rules: {},
      destination: {
        "0": "ankundigungsart",
        "1": "musterschreibenankundig",
      },
      action: {},
    },
    "nur-309-euro": {
      name: "Nur 3,09 Euro",
      text:
        "<p>In diesem Fall sind nur Geb&uuml;hren in H&ouml;he von <strong>3,09 Euro</strong> zul&auml;ssig.&nbsp;</p>\n\n<p>M&ouml;chten Sie ein Musterschreiben erhalten?</p>",
      inputs: [
        {
          type: "button",
          display_as: "button",
          label: "Antwort",
          options: ["Ja", "Nein"],
        },
      ],
      rules: {},
      destination: {
        "0": "musterschreiben",
        "1": "vielen-dank",
      },
      action: {},
    },
    ankundigungsart: {
      name: "Ank\u00fcndigungsart",
      text:
        "<p>Wie wurden Sie&nbsp;nach der fehlgeschlagenen Lastschrift benachrichtigt?</p>",
      inputs: [
        {
          type: "list",
          label: "Ankündigungsart",
          options: [
            "Brief",
            "SMS",
            "E-Mail",
            "Ich habe keine Benachrichtigung erhalten",
          ],
        },
      ],
      rules: {
        if: [
          {
            in: [
              {
                var: "a",
              },
              ["Brief"],
            ],
          },
          "0",
          {
            in: [
              {
                var: "a",
              },
              ["SMS"],
            ],
          },
          "1",
          {
            in: [
              {
                var: "a",
              },
              ["E-Mail", "Ich habe keine Benachrichtigung erhalten"],
            ],
          },
          "2",
        ],
      },
      destination: {
        "0": "nur-4-euro",
        "1": "nur-309-euro",
        "2": "nur-3-euro",
      },
      action: {},
    },
    angemessen: {
      name: "Angemessen",
      text:
        "<p>Eine Geb&uuml;hr von bis zu vier Euro ist leider angemessen.</p>",
      inputs: [],
      rules: {},
      destination: {},
      action: {},
    },
    "nur-4-euro": {
      name: "Nur 4 Euro",
      text:
        "<p>In diesem Fall sind nur Geb&uuml;hren in H&ouml;he von <strong>4,00&nbsp;Euro </strong>zul&auml;ssig.&nbsp;</p>\n\n<p>M&ouml;chten Sie ein Musterschreiben erhalten?</p>",
      inputs: [
        {
          type: "button",
          display_as: "button",
          label: "Antwort",
          options: ["Ja", "Nein"],
        },
      ],
      rules: {},
      destination: {
        "0": "musterschreiben",
        "1": "vielen-dank",
      },
      action: {},
    },
    "nur-3-euro": {
      name: "Nur 3 Euro",
      text:
        "<p>In diesem Fall sind nur Geb&uuml;hren in H&ouml;he von <strong>3,00&nbsp;Euro</strong> zul&auml;ssig.&nbsp;</p>\n\n<p>M&ouml;chten Sie ein Musterschreiben erhalten?</p>",
      inputs: [
        {
          type: "button",
          display_as: "button",
          label: "Antwort",
          options: ["Ja", "Nein"],
        },
      ],
      rules: {},
      destination: {
        "0": "musterschreiben",
        "1": "vielen-dank",
      },
      action: {},
    },
    "vielen-dank": {
      name: "Vielen Dank",
      text:
        "<p>Vielen Dank, wir hoffen, dass wir Ihnen weiterhelfen konnten.</p>",
      inputs: [],
      rules: {},
      destination: {},
      action: {},
    },
    musterschreiben: {
      name: "Musterschreiben",
      text:
        "<p>Sehr geehrte Damen und Herren,</p>\n\n<p>die pauschale Absetzung von R&uuml;cklastschriftgeb&uuml;hren i. H. v. [[gebuhrenhohe]]&nbsp;Euro ist nach st&auml;ndiger Rspr. nicht zul&auml;ssig, lediglich die tats&auml;chlich angefallenen Geb&uuml;hren sind erstattungsf&auml;hig, auch d&uuml;rfen diese das Interbankengeld von drei Euro nicht erheblich &uuml;bersteigen (LG K&ouml;ln, 21.12.2016&nbsp;- 26 O 331/15; &nbsp;LG Hamburg, 06.05.2014, 312 O 373/13; OLG S-H, 26.03.2014, 2 U 7/12).</p>\n\n<p>Daher widerspreche ich der Zahlung der pauschalen R&uuml;cklastschriftgeb&uuml;hr i.H.v. [[gebuhrenhohe]]&nbsp;Euro und bitte um Aufstellung der tats&auml;chlich angefallen Kosten. Gerne &uuml;berweise ich auch direkt die fehlende Rate&nbsp;und &uuml;berweise die angemessenen R&uuml;cklastschriftgeb&uuml;hren in einer seperaten &Uuml;berweisung. Bitte geben Sie mir Bescheid, wenn Sie dies w&uuml;nschen.&nbsp;Des Weiteren bitte ich darum, auch die folgenden Raten weiterhin per Lastschrift einzuziehen. Sollte aufgrund der fehlgeschlagenen Lastschrift die Neuerteilung eines Mandats n&ouml;tig sein, bitte ich um Benachrichtigung.</p>\n\n<p><br>\n&nbsp;Mit freundlichen Gr&uuml;&szlig;en</p>\n\n<p>&nbsp;</p>",
      inputs: [],
      rules: {},
      destination: {},
      action: {},
    },
    musterschreibenankundig: {
      name: "MusterschreibenAnk\u00fcndig",
      text:
        "<p>Sehr geehrte Damen und Herren,</p>\n\n<p>sie haben es unterlassen, die von Ihnen eingezogenen Lastschrift anzuk&uuml;ndigen. Aufgrund der fehlenden&nbsp;SEPA Pre-Notification haben Sie keinen Anpspruch auf Erstattung der R&uuml;cklastschriftgeb&uuml;hren.</p>\n\n<p>Mit freundlichen Gr&uuml;&szlig;en</p>\n\n<p>&nbsp;</p>",
      inputs: [],
      rules: {},
      destination: {},
      action: {},
    },
  },
}

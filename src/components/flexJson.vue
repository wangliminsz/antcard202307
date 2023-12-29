<script>
//

// daisy ----------------------------------------------
let the_text = "เดซ Daisy"
let the_tel = "tel:0909820001"
let the_label = "Tel: 0909820001"
let the_img_2013 = "https://i.imgur.com/NwnxohC.jpg"
let the_line_id = "https://line.me/ti/p/kyOuQl8A2V"
let the_share_url = "https://liff.line.me/1661140554-dMVOaeqY/?userid=daisy"

// Daisy JSON
const json_daisy = {
  type: "bubble",
  size: "kilo",
  hero: {
    type: "image",
    size: "full",
    aspectRatio: "20:13",
    aspectMode: "cover",
    url: the_img_2013,
  },
  body: {
    type: "box",
    layout: "vertical",
    spacing: "sm",
    contents: [
      {
        type: "text",
        text: the_text,
        wrap: true,
        weight: "bold",
        size: "lg",
        style: "normal",
      },
      {
        type: "text",
        text: "Ant Global Property",
        size: "sm",
      },

      {
        type: "text",
        text: "Thai Real Estate - Buy / Sale / Rent",
        wrap: true,
        size: "sm",
      },

      {
        type: "button",
        style: "link",
        height: "sm",
        action: {
          type: "uri",
          label: the_label,
          uri: the_tel,
        },
      },
    ],
  },
  footer: {
    type: "box",
    layout: "vertical",
    spacing: "sm",
    contents: [
      {
        type: "button",
        style: "primary",
        action: {
          type: "uri",
          label: "Line ID",
          uri: the_line_id,
        },
        height: "sm",
      },

      {
        type: "button",
        style: "primary",
        action: {
          type: "uri",
          label: "Share",
          uri: the_share_url,
        },
        color: "#1B74E4",
        height: "sm",
        margin: "lg",
      },

    ],
  },
};

// daisy ----------------------------------------------

// tangmo ----------------------------------------------
the_text = "Tangmo"
the_tel = "tel:0947492246"
the_label = "Tel: 0947492246"
the_img_2013 = "https://i.imgur.com/3xjFoWh.jpg"
the_line_id = "https://line.me/ti/p/4hQkJj26_A"
the_share_url = "https://liff.line.me/1661140554-dMVOaeqY/?userid=tangmo"

// Tangmo JSON
const json_tangmo = {
  type: "bubble",
  size: "kilo",
  hero: {
    type: "image",
    size: "full",
    aspectRatio: "20:13",
    aspectMode: "cover",
    url: the_img_2013,
  },
  body: {
    type: "box",
    layout: "vertical",
    spacing: "sm",
    contents: [
      {
        type: "text",
        text: the_text,
        wrap: true,
        weight: "bold",
        size: "lg",
        style: "normal",
      },
      {
        type: "text",
        text: "Ant Global Property",
        size: "sm",
      },

      {
        type: "text",
        text: "Thai Real Estate - Buy / Sale / Rent",
        wrap: true,
        size: "sm",
      },

      {
        type: "button",
        style: "link",
        height: "sm",
        action: {
          type: "uri",
          label: the_label,
          uri: the_tel,
        },
      },
    ],
  },
  footer: {
    type: "box",
    layout: "vertical",
    spacing: "sm",
    contents: [
      {
        type: "button",
        style: "primary",
        action: {
          type: "uri",
          label: "Line ID",
          uri: the_line_id,
        },
        height: "sm",
      },

      {
        type: "button",
        style: "primary",
        action: {
          type: "uri",
          label: "Share",
          uri: the_share_url,
        },
        color: "#1B74E4",
        height: "sm",
        margin: "lg",
      },

    ],
  },
};

// tangmo ----------------------------------------------

// william ----------------------------------------------
the_text = "William"
the_tel = "tel:0800252616"
the_label = "Tel: 0800252616"
the_img_2013 = "https://i.imgur.com/0pKifqK.jpg"
the_line_id = "https://line.me/ti/p/o89JUfMP6n"
the_share_url = "https://liff.line.me/1661140554-dMVOaeqY/?userid=william"

// william JSON
const json_william = {
  type: "bubble",
  size: "kilo",
  hero: {
    type: "image",
    size: "full",
    aspectRatio: "20:13",
    aspectMode: "cover",
    url: the_img_2013,
  },
  body: {
    type: "box",
    layout: "vertical",
    spacing: "sm",
    contents: [
      {
        type: "text",
        text: the_text,
        wrap: true,
        weight: "bold",
        size: "lg",
        style: "normal",
      },
      {
        type: "text",
        text: "Ant Global Property",
        size: "sm",
      },

      {
        type: "text",
        text: "Thai Real Estate - Buy / Sale / Rent",
        wrap: true,
        size: "sm",
      },

      {
        type: "button",
        style: "link",
        height: "sm",
        action: {
          type: "uri",
          label: the_label,
          uri: the_tel,
        },
      },
    ],
  },
  footer: {
    type: "box",
    layout: "vertical",
    spacing: "sm",
    contents: [
      {
        type: "button",
        style: "primary",
        action: {
          type: "uri",
          label: "Line ID",
          uri: the_line_id,
        },
        height: "sm",
      },

      {
        type: "button",
        style: "primary",
        action: {
          type: "uri",
          label: "Share",
          uri: the_share_url,
        },
        color: "#1B74E4",
        height: "sm",
        margin: "lg",
      },

    ],
  },
};

// william ----------------------------------------------

export default {

  json_daisy,
  json_tangmo,
  json_william,

};
</script>
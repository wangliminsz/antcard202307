<template>
    <div class="graybg">
      <!-- <div>Hello Page 02</div> -->

      <div class="pg11">
        <van-row gutter="20" justify="center">
          <van-col span="12">
            <van-button
              type="primary"
              class="pg2"
              size="normal"
              >Daisy</van-button>
          </van-col>

        </van-row>

      </div>
    </div>
  </template>

  <script>
    import liff from "@line/liff";
    // import { Notify } from "vant";
    import { Dialog } from "vant";

    export default {
        data() {
        return {
            // 版本号
            version: "1.1.1",
            message: "",
        };
        },

        mounted() {
        liff
            .init({ liffId: "1656934826-9NYzqYjx" })
            .then(() => {
            if (!liff.isLoggedIn()) {
                // alert("用戶未登入");
                liff.login();
            } else {
                // alert("用戶已登入");
                // liff.permanentLink.setExtraQueryParam("page02"); // 新增ExtraQueryParam
                // // liff.permanentLink.setExtraQueryParam('user_tracking_id=9999') // 新增ExtraQueryParam
                // // liff.permanentLink.setExtraQueryParam("") // 刪除ExtraQueryParam
                const myLink = liff.permanentLink.createUrl();
                console.log("02 - liff.permanentLink.createUrl", myLink);
                // // 用户 Profile - userId / displayName / pictureUrl
                // //{userId: 'Ud37e77c4d18cfb2a12ffd046577498e4',
                // // displayName: 'Wang 0002',
                // // pictureUrl: 'https://profile.line-scdn.net/-----'}
                // // 用户 Profile - userId / displayName / pictureUrl
                // liff
                //   .getProfile()
                //   .then((profile) => {
                //     const name = profile.displayName;
                //     console.log(name);
                //     console.log(profile);
                //   })
                //   .catch((err) => {
                //     console.log("error", err);
                //   });
            }
            })
            .catch((err) => {
            console.log("Init Failed", err);
            });
        },

        methods: {
        isJSON(str) {
            if (typeof str == "string") {
            try {
                var obj = JSON.parse(str);
                if (typeof obj == "object" && obj) {
                return true;
                } else {
                return false;
                }
            } catch (e) {
                console.log("error: " + str + "!!!" + e);
                return false;
            }
            }
            console.log("It is not a string!");
        },

        closePage() {
            liff.closeWindow();
        },

        clearText() {
            this.message = "";
        },

        sendD(args) {
            // if(args == 'd'){
            //   console.log('daisy')
            // }

            let myContentJSON = {};
            let theName = "";

            if (args == "daisy") {
            theName = "เดซ Daisy's Card";
            myContentJSON = {
                type: "bubble",
                size: "kilo",
                hero: {
                type: "image",
                size: "full",
                aspectRatio: "20:13",
                aspectMode: "cover",
                url: "https://i.imgur.com/NwnxohC.jpg",
                },
                body: {
                type: "box",
                layout: "vertical",
                spacing: "sm",
                contents: [
                    {
                    type: "text",
                    text: "เดซ Daisy",
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
                        label: "Tel: 0909820001",
                        uri: "tel:0909820001",
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
                        uri: "https://line.me/ti/p/kyOuQl8A2V",
                    },
                    height: "sm",
                    },
                ],
                },
            };
            } else if (args == "tangmo") {
            theName = "Tangmo's Card";
            myContentJSON = {
                type: "bubble",
                size: "kilo",
                hero: {
                type: "image",
                size: "full",
                aspectRatio: "20:13",
                aspectMode: "cover",
                url: "https://i.imgur.com/3xjFoWh.jpg",
                },
                body: {
                type: "box",
                layout: "vertical",
                spacing: "sm",
                contents: [
                    {
                    type: "text",
                    text: "Tangmo",
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
                        label: "Tel: 0947492246",
                        uri: "tel:0947492246",
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
                        uri: "https://line.me/ti/p/4hQkJj26_A",
                    },
                    height: "sm",
                    },
                ],
                },
            };
            } else if (args == "numking") {
            theName = "Numking's Card";
            myContentJSON = {
                type: "bubble",
                size: "kilo",
                hero: {
                type: "image",
                size: "full",
                aspectRatio: "20:13",
                aspectMode: "cover",
                url: "https://i.imgur.com/FYdFAy0.jpg",
                },
                body: {
                type: "box",
                layout: "vertical",
                spacing: "sm",
                contents: [
                    {
                    type: "text",
                    text: "Numking",
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
                        label: "Tel: 0956469691",
                        uri: "tel:0956469691",
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
                        uri: "https://line.me/ti/p/BxCVkpcpJ0",
                    },
                    height: "sm",
                    },
                ],
                },
            };
            } else if (args == "daisy-ant") {
            theName = "Ant Global Property";
            myContentJSON = {
                type: "bubble",
                size: "kilo",
                hero: {
                type: "image",
                size: "full",
                aspectRatio: "20:13",
                aspectMode: "cover",
                url: "https://i.imgur.com/h831w99.jpg",
                },
                body: {
                type: "box",
                layout: "vertical",
                spacing: "lg",
                contents: [
                    {
                    type: "text",
                    text: "Ant Global Property",
                    wrap: true,
                    weight: "bold",
                    size: "lg",
                    style: "normal",
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
                        label: "Tel: 0909820001",
                        uri: "tel:0909820001",
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
                        uri: "https://line.me/ti/p/kyOuQl8A2V",
                    },
                    height: "sm",
                    },
                ],
                },
            };
            } else if (args == "tangmo-ant") {
            theName = "Ant Global Property";
            myContentJSON = {
                type: "bubble",
                size: "kilo",
                hero: {
                type: "image",
                size: "full",
                aspectRatio: "20:13",
                aspectMode: "cover",
                url: "https://i.imgur.com/h831w99.jpg",
                },
                body: {
                type: "box",
                layout: "vertical",
                spacing: "lg",
                contents: [
                    {
                    type: "text",
                    text: "Ant Global Property",
                    wrap: true,
                    weight: "bold",
                    size: "lg",
                    style: "normal",
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
                        label: "Tel: 0947492246",
                        uri: "tel:0947492246",
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
                        uri: "https://line.me/ti/p/4hQkJj26_A",
                    },
                    height: "sm",
                    },
                ],
                },
            };
            } else if (args == "numking-ant") {
            theName = "Ant Global Property";
            myContentJSON = {
                type: "bubble",
                size: "kilo",
                hero: {
                type: "image",
                size: "full",
                aspectRatio: "20:13",
                aspectMode: "cover",
                url: "https://i.imgur.com/h831w99.jpg",
                },
                body: {
                type: "box",
                layout: "vertical",
                spacing: "lg",
                contents: [
                    {
                    type: "text",
                    text: "Ant Global Property",
                    wrap: true,
                    weight: "bold",
                    size: "lg",
                    style: "normal",
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
                        label: "Tel: 0956469691",
                        uri: "tel:0956469691",
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
                        uri: "https://line.me/ti/p/BxCVkpcpJ0",
                    },
                    height: "sm",
                    },
                ],
                },
            };
            }


            if (!liff.isLoggedIn()) {
            liff.login({ redirectUri: window.location.href });
            }
            //
            if (liff.isApiAvailable("shareTargetPicker")) {
            liff
                .shareTargetPicker([
                // {
                //   type: "text",
                //   text: "Hello, VUE World!",
                // },
                {
                    type: "flex",
                    // altText: "เดซ Daisy's Card",
                    altText: theName,
                    contents: myContentJSON,
                },
                ])
                .then(function (res) {
                if (res) {
                    // succeeded in sending a message through TargetPicker
                    console.log(`[${res.status}] Message sent!`);

                    Dialog.alert({
                    message: "Send successfuly",
                    theme: "round-button",
                    confirmButtonColor: "#07c160",
                    }).then(() => {
                    // on close
                    liff.closeWindow();
                    });
                } else {
                    const [majorVer, minorVer] = (liff.getLineVersion() || "").split(
                    "."
                    );
                    if (parseInt(majorVer) == 10 && parseInt(minorVer) < 11) {
                    // LINE 10.3.0 - 10.10.0
                    // Old LINE will access here regardless of user's action
                    console.log(
                        "TargetPicker was opened at least. Whether succeeded to send message is unclear"
                    );
                    } else {
                    // LINE 10.11.0 -
                    // sending message canceled
                    console.log("TargetPicker was closed!");
                    }
                }
                })
                .catch(function (error) {
                // something went wrong before sending a message
                console.log("something wrong happen", error);
                Dialog.alert({
                    message: "Failed. Please check your data format",
                    theme: "round-button",
                    // confirmButtonColor: "#07c160",
                }).then(() => {
                    // on close
                });
                });
            }
        },
        },
    };
  </script>


  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }

  .pg {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .pg1 {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: #cccccc;
  }

  .pg11 {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-bottom: 18px;
    width: 95%;
  }

  .pg2 {
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 15px;
    width: 100%;
  }

  .pg3 {
    border: 1;
  }

  /* .graybg {
    background: #c0c0c0
  } */
  </style>

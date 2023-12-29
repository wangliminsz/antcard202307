<template>
    <div>
      <div class="pg11">

        <router-link to="/page01"><van-button type="success" class="pg2" size="large"
          >&nbsp;&nbsp;&nbsp;Share Flex Message by JSON&nbsp;&nbsp;</van-button
        ></router-link>
        <br />
        <br />
        <br />

        <router-link to="/page02"><van-button
          type="primary"
          class="pg2"
          plain
          size="large"
          >&nbsp;&nbsp; About &nbsp;&nbsp;</van-button
        ></router-link>
      </div>

    </div>
  </template>

  <script>

    import liff from "@line/liff";
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
            .init({ liffId: "1661140554-dMVOaeqY" })
            .then(() => {
            if (!liff.isLoggedIn()) {
                // alert("用戶未登入");
                liff.login();
            } else {
                // alert("用戶已登入");

                const myLink = liff.permanentLink.createUrl();
                console.log("Home - liff.permanentLink.createUrl", myLink);

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
                console.log("error：" + str + "!!!" + e);
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

        sendCard() {
            // let myContent = {
            //   type: "bubble",
            //   body: {
            //     type: "box",
            //     layout: "vertical",
            //     contents: [
            //       {
            //         type: "text",
            //         text: "Brown Cafe",
            //         weight: "bold",
            //         size: "xl",
            //       },
            //     ],
            //   },
            // };

            let myContent = this.message;

            let ifJSON = this.isJSON(myContent);
            console.log(ifJSON);

            if (ifJSON) {
            let myContentJSON = eval("(" + myContent + ")");
            // .then((res) => {
            //   if (res) {
            //     console.log("JSON converted OK");
            //   }
            // })
            // .catch(function (error) {
            //   console.log("JSON sth wrong happen", error);
            // });

            // let myContentJSON = JSON.parse(myContent)
            // console.log(myContentJSON)

            // if (
            //   typeof myContentJSON == "object" &&
            //   Object.prototype.toString.call(myContentJSON).toLowerCase() ==
            //     "[object object]" &&
            //   !myContentJSON.length
            // ) {
            // -----------------------------------
            // if (True) {
            // alert("myContent is JSON 0bject");
            //
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
                    altText: "Flex Message",
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
                    });
                    } else {
                    const [majorVer, minorVer] = (
                        liff.getLineVersion() || ""
                    ).split(".");
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
            // liff.closeWindow();
            // }
            } else {
            //alert("myContent is NOT JSON 0bject");
            Dialog.alert({
                message: "Not JSON. Please check your data format",
                theme: "round-button",
                // confirmButtonColor: "#07c160",
            }).then(() => {
                // on close
            });
            return;
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
    width: 90%
  }

  .pg2 {
    margin-left: 12px;
    margin-right: 12px;
  }

  .pg3 {
    border: 1;
  }

  .section-header {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .section-header p {
    text-align: center;
    color: #000000;
  }

  .section-header .section-title {
    font-size: 25px;
    position: relative;
    padding-bottom: 20px;
    margin: 0 0 20px;
    /* display: block; */
    text-align: center;
    color: #cf295a;
  }

  .section-header .section-title:before {
    /* content: "--------------"; */
    position: absolute;
    width: 140px;
    bottom: 4px;
    right: 0;
    width: 100px;
    color: #010101;
    margin: 0 auto;
    left: 0;
    right: 0;
    height: 8px;
    font-size: 15px;
    font-weight: regular;
  }
  </style>

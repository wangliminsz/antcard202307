<template>
    <div>

      <div class="pg11">
        <van-button
          type="success"
          class="pg2"
          size="small"
          round
          @click="sendCard"
          >&nbsp;&nbsp;&nbsp;&nbsp;Share&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</van-button
        >
        <van-button
          type="primary"
          class="pg2"
          plain
          size="small"
          @click="clearText"
          >&nbsp;&nbsp;Clear&nbsp;&nbsp;</van-button
        >
        <van-button
          type="danger"
          class="pg2"
          plain
          size="small"
          @click="closePage"
          >&nbsp;&nbsp; Close &nbsp;&nbsp;</van-button
        >
      </div>

      <div class="pg1">
        <br />
        <van-row>
          <van-col span="24">
            <div>
              <van-cell-group inset>
                <van-field
                  class="pg3"
                  v-model="message"
                  rows="8"
                  autosize
                  maxlength="32000"
                  type="textarea"
                  placeholder="Input your Flex Message JSON here ..."
                  show-word-limit
                />
              </van-cell-group>
            </div>
          </van-col>
        </van-row>
        <br />
      </div>
    </div>
  </template>

  <script>
    import liff from "@line/liff";
    // import { Notify } from "vant";
    // import { Dialog } from "vant";

    export default {
        data() {
        return {
            // 版本号
            version: "1.1.1",
            message: "",
        };
        },

        mounted() {
        // // good --------------------------------------------------------
        // console.log('Mounted --------------------')
        // liff.init({liffId: "1661140554-dMVOaeqY"}).then(() => {
        //     console.log("Init Good-----------------")
        //     if (!liff.isLoggedIn())
        //       liff.login({ redirectUri: window.location.href });
        //   })
        // // good --------------------------------------------------------

        liff
            .init({ liffId: "1661140554-dMVOaeqY" })
            .then(() => {
            console.log("Init Good-----------------")
            console.log("Init Good-----------------")
            console.log("Init Good-----------------")

            if (!liff.isLoggedIn()) {
                alert("用戶未登入");
                liff.login();
            } else {
                alert("用戶已登入");
                // liff.permanentLink.setExtraQueryParam("page02"); // 新增ExtraQueryParam
                // // liff.permanentLink.setExtraQueryParam('user_tracking_id=9999') // 新增ExtraQueryParam
                // // liff.permanentLink.setExtraQueryParam("") // 刪除ExtraQueryParam
                const myLink = liff.permanentLink.createUrl();
                console.log("01 - liff.permanentLink.createUrl", myLink);

                const myOS = liff.getOS();
                console.log("Line on OS", myOS);

                liff.shareTargetPicker(
                    [{
                        type: "image",
                        originalContentUrl: "https://pic.pimg.tw/saryh777/1641637885-2419307650-g_n.png",
                        previewImageUrl: "https://pic.pimg.tw/saryh777/1641637885-2419307650-g_n.png",
                    }, ], {
                        isMultiple: true,
                    }
                );

                console.log("Line shareTargetPicker", myOS);

                if (liff.isApiAvailable("shareTargetPicker")) {
                    alert("Yes Yes Yes YES shareTargetPicker------------>")
                } else {
                    alert("NONONONO shareTargetPicker------------>")
                }
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

            // this.message = myContent;

            let myContent = this.message
            // console.log(myContent);
            console.log(typeof(myContent))

            let ifJSON = this.isJSON(myContent);
            console.log(ifJSON);

            // if (ifJSON) {
            if (!ifJSON) {
            console.log("ifJSON Block---------->", ifJSON);
            let myContentJSON = eval("(" + myContent + ")");
            console.log(myContentJSON)
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

            console.log("version ---------",liff.getLineVersion())
            //
            if (liff.isApiAvailable("shareTargetPicker")) {
                // alert("Yes shareTargetPicker------------>")

                liff
                .shareTargetPicker([
                    {
                      type: "text",
                      text: "Hello, VUE World!",
                    },
                    // {
                    // type: "flex",
                    // altText: "Flex Message",
                    // contents: myContentJSON,
                    // },
                ])
                .then(function (res) {
                    if (res) {
                    // succeeded in sending a message through TargetPicker
                    console.log(`[${res.status}] Message sent!`);

                    // Dialog.alert({
                    //     message: "Send successfuly",
                    //     theme: "round-button",
                    //     confirmButtonColor: "#07c160",
                    // }).then(() => {
                    //     // on close
                    // });
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
                    console.log("----something wrong happen", error);
                    // Dialog.alert({
                    // message: "Failed. Please check your data format",
                    // theme: "round-button",
                    // // confirmButtonColor: "#07c160",
                    // }).then(() => {
                    // // on close
                    // });
                });
            } else{
                alert("No shareTargetPicker------------>")
            }

            // liff.closeWindow();
            // }
            } else {
            //alert("myContent is NOT JSON 0bject");
            // Dialog.alert({
            //     message: "Not JSON. Please check your data format",
            //     theme: "round-button",
            //     // confirmButtonColor: "#07c160",
            // }).then(() => {
            //     // on close
            // });
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
  }

  .pg2 {
    margin-left: 12px;
    margin-right: 12px;
  }

  .pg3 {
    border: 1;
  }
  </style>

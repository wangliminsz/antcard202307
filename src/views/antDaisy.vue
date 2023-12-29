<template>
  <div class="graybg"></div>
</template>

<script>
import liff from "@line/liff";
import global_ from "../components/flexJson"; //引用模块进来

export default {
  data() {
    return {
      // 版本号
      version: "1.1.1",
      message: "",

      theUser: "",

      json01: global_.json_daisy,
      json02: global_.json_tangmo,
    };
  },

  mounted() {
    this.theUser = this.getUrl("userid");

    liff
      .init({ liffId: "1661140554-dMVOaeqY" })
      .then(() => {
        if (!liff.isLoggedIn()) {
          // alert("用戶未登入 2023-05-15 - antdaisy.vue");
          liff.login();
        } else {
          // alert("用戶已经登入 2023-05-15 - antdaisy.vue");
          const myLink = liff.permanentLink.createUrl();
          console.log(
            "02 - 2023-05-15 - antdaisy.vue -liff.permanentLink.createUrl",
            myLink
          );
          console.log(
            this.theUser, "2023-05-15- antdaisy.vue  --- where is the code ------------------>"
          );

          if (this.theUser == "daisy") {
            this.sendD("daisy");
          }

          if (this.theUser == "tangmo") {
            this.sendD("tangmo");
          }

          if (this.theUser == "william") {
            this.sendD("william");
          }
        }
      })
      .catch((err) => {
        console.log("Init Failed", err);
      });
  },

  // computed: {
  //   whichUser() {
  //     const queryParams = new URLSearchParams(window.location.search);
  //     return queryParams.get("user") || "";
  //   },
  // },

  methods: {
    sendD(args) {
      let theName = "";

      if (args == "daisy") {
        theName = "เดซ Daisy's Card";
        console.log(theName);
        console.log("come in ----------------> Inside 001");

        liff
          .shareTargetPicker([
            {
              type: "flex",
              altText: theName,
              contents: global_.json_daisy,
            },
          ])
          .then(function (res) {
            if (res) {
              console.log(`[${res.status}] Message sent!`);
            } else {
              console.log(
                "TargetPicker was opened at least. Whether succeeded to send message is unclear"
              );
            }

            liff.closeWindow();
          })
          .catch(function (error) {
            console.log("something wrong happen", error);
          });
      } else if (args == "tangmo") {
        theName = "Tangmo's Card";

        liff
          .shareTargetPicker([
            {
              type: "flex",
              altText: theName,
              contents: global_.json_tangmo,
            },
          ])
          .then(function (res) {
            if (res) {
              console.log(`[${res.status}] Message sent!`);
            } else {
              console.log(
                "TargetPicker was opened at least. Whether succeeded to send message is unclear"
              );
            }

            liff.closeWindow();
          })
          .catch(function (error) {
            console.log("something wrong happen", error);
          });
      } else if(args == "william"){
        theName = "William's Card";
        console.log(theName);
        console.log("come in ----------------> Inside 001");
        liff
          .shareTargetPicker([
            {
              type: "flex",
              altText: theName,
              contents: global_.json_william,
            },
          ])
          .then(function (res) {
            if (res) {
              console.log(`[${res.status}] Message sent!`);
            } else {
              console.log(
                "TargetPicker was opened at least. Whether succeeded to send message is unclear"
              );
            }
            liff.closeWindow();
          })
          .catch(function (error) {
            console.log("something wrong happen", error);
          });
      }

    },

    getUrl(args) {
      //   this.thisBk = getQueryVariable(args1);
      //   this.thisVer = getQueryVariable(args2);
      //   this.booklist01 = getChList(this.thisBk);
      console.log("getUrl -----------------------------------");
      let whichUser = "";
      whichUser = this.getQueryVariable(args);
      console.log(whichUser);
      console.log("getUrl -----------------------------------");

      return whichUser;
    },

    getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
          return pair[1];
        }
      }
      return false;
    },
  },
};
</script>

<style scoped>
</style>

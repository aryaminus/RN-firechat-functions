const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.sendNotification = functions.database
  .ref("/chat/{chatid}/{pushId}")
  .onWrite(event => {
    const message = event.data.val();
    const senderUid = message.uid;
    const receiverUid = message.fuid;

    const payload = {
      notification: {
        title: senderUid,
        body: message.text,
        sound: "default"
      }
    };

    const options = {
      collapseKey: "demo",
      contentAvailable: true,
      priority: "high",
      timeToLive: 60 * 60 * 24
    };

    return admin
      .database()
      .ref(`friends/{pushId}`)
      .once("value")
      .then(data => {
        //console.log("inside", data.val().notificationKey);
        if (data.val().uid == receiverUid){
          return admin
          .messaging()
          .sendToDevice(data.val().token, payload)
          .then(function(response) {
            console.log("Successfully sent message:", response);
          })
          .catch(function(error) {
            console.log("Error sending message:", error);
          });
        }
      });
  });

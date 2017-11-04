const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.sendNotification = functions.database
  .ref("/chat/{uid}/{pushId}")
  .onWrite(event => {
    const message = event.data.current.val();
    const senderUid = message.uid;
    const receiverUid = event.params.uid;

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
      .messaging()
      .sendToDevice(receiverUid, payload)
      .then(function(response) {
        console.log("Successfully sent message:", response);
      })
      .catch(function(error) {
        console.log("Error sending message:", error);
      });
  });

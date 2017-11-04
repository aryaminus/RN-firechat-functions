const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


/**
 * Triggers when new subject added in the list and sends a notification.
 */
exports.sendNotification = functions.database.ref('/subjects/{subjectKey}').onWrite((event) => {
  // Grab the current value of what was written to the Realtime Database.
  const subject = event.data.val();

  // Notification details.
  const payload = {
    notification: {
      title: 'hello',
      body: `${subject.author} just posted new subject "${subject.title}".`,
      icon: 'photoURL',
      sound: 'default',
      clickAction: 'fcm.ACTION.HELLO',
      // badge: '1'
    },
    data: {
      extra: 'extra_data',
    },
  };

  // Set the message as high priority and have it expire after 24 hours.
  const options = {
    collapseKey: 'demo',
    contentAvailable: true,
    priority: 'high',
    timeToLive: 60 * 60 * 24,
  };

  // Send a message to devices subscribed to the provided topic.
  const topic = `/topics/list`;
  return admin.messaging().sendToTopic(topic, payload, options)
    .then((response) => {
      console.log('Successfully sent message:', response);
    });
});
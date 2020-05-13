var push = require('web-push');

let vapidKeys =  {
  publicKey: 'BBxmgS8PYczFrz5Ajx8AF47onpaBqkkwkd2LYKh_vFI7usN0vC0bkm4P07szWjzTUXeGt2rdxcQ2G4F7mT3k7xE',
  privateKey: '1895QZO_tyCg_O_0sKVshM4WtXy59QalvO7Pa8HQvDI'
}


  push.setVapidDetails('mail:josselineacostamtz@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

  let sub={endpoint:"https://fcm.googleapis.com/fcm/send/cZaR0c-i9hg:APA91bHhvUpNcDHjZljcf3piSBQZnyMmjHlhuCvZI3rHSEvhB145O0Ap9436aOtpr1qS5Rg1WER7Ua_-CVkOPxu4r2ClUOVNkXe8lNNXy66issBvsfbWkVnaN11LxowILnI2uXQ34CVq",
  expirationTime:null,
keys:{p256dh:"BOznonK5AH1DFMN54Uzktb02pnRVISgq6W9YEHSiq6KkMnwqRplquCEsl9ThTZeEMFNuFfz1U-nTuvblD8Cy7GU",
auth:"LH3fBUa0BUIUR2VRhxqiyw"}}

  push.sendNotification(sub, 'test message')


console.log(vapidKeys);
var push = require('web-push');

let vapidKeys =  {
  publicKey: 'BBxmgS8PYczFrz5Ajx8AF47onpaBqkkwkd2LYKh_vFI7usN0vC0bkm4P07szWjzTUXeGt2rdxcQ2G4F7mT3k7xE',
  privateKey: '1895QZO_tyCg_O_0sKVshM4WtXy59QalvO7Pa8HQvDI'
}


  push.setVapidDetails('mail:josselineacostamtz@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

  let sub={

  }

  push.sendNotification(sub, 'test message')


console.log(vapidKeys);
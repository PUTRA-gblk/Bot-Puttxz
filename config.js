const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['6285854721440'] //ur owner number
global.ownername = "PutraXp" //ur owner name
global.developer = "Puttxz" //nama lu
global.ytname = "YT: PutraXp" //ur yt chanel name
global.socialm = "https://github.com/PUTRA-gblk" //ur github or insta name
global.sgc = "https://chat.whatsapp.com/E3l5YxNNUx89ecCRpOoOtO"
global.location = "Surabaya" //ur location

//bot bomdy 
global.owner = ['6285854721440'] //ur number
global.ownernomer = "6285854721440" //ur number
global.ownertag = '6285854721440' //ur tag number
global.premium = ['6285854721440'] //ur premium number
global.botname = 'ðð¼ð Puttxz' //ur bot name
global.ownername = "PutraXp"
global.linkz = "https://youtube.com/@PutraXp" //your theme url which will be displayed on whatsapp
global.dana = "6285854721440"
global.gopay = "6285854721440"
global.pulsa = "6285854721440"
global.websitex = "https://youtube.com/@PutraXp" //ur website to be displayed
global.websitex1 = "http://api-putraxp.epizy.com"
global.botscript = 'http://api-putraxp.epizy.com' //script link
global.themeemoji = "ð¿" //ur theme emoji
global.packname = "Sticker By" //ur sticker watermark packname
global.author = "Puttxzð¿" //ur sticker watermark author
global.wm = "PutraXp" //ur watermark

// Other
global.sessionName = 'Session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Doneâ',
    admin: 'ðð¢ð¯ðºð¢ ððªð´ð¢ ð¥ðª ðð¶ð¯ð¢ð¬ð¢ð¯ ðð­ð¦ð© ðð¥ð®ðªð¯ ðð°ð¥!!',
    botAdmin: 'ðð°ðµ ðð¶ð¬ð¢ð¯ ðð¥ð®ðªð¯ ð¤ð°ð¬',
    premime: 'ðð¢ð¯ðºð¢ ððªð´ð¢ ð¥ðª ðð¶ð¯ð¢ð¬ð¢ð¯ ðð´ð¦ð³ ðð³ð¦ð®ðªð¶ð®!',
    owner: 'ðð¢ð¯ðºð¢ ððªð´ð¢ ð¥ðª ðð¶ð¯ð¢ð¬ð¢ð¯ ð°ð­ð¦ð© ðð¸ð¯ð¦ð³!',
    group: 'ðð¢ð¯ðºð¢ ððªð´ð¢ ððª ð¨ð¶ð¯ð¢ð¬ð¢ð¯ ððª ðð³ð°ð¶ð±',
    private: 'ðð¢ð¯ðºð¢ ððªð´ð¢ ð¥ðª ðð¶ð¯ð¢ð¬ð¢ð¯ ððª ðð©ð¢ðµ ðð³ðªð·ð¢ðµð¦!',
    bot: 'ðð°ðµ ðð¯ð­ðº!',
    wait: 'ðð¢ðªðµ ðð¦ð¥ð¢ð¯ð¨ ððª ðð³ð°ð´ð¦ð´....',    linkm: 'Where is the link?',
    endLimit: 'ððªð®ðªðµ ðð¬ð¢ð¯ ððª ð³ð¦ð´ð¦ðµ 12 ðð¢ð³ðª',
    nsfw: 'ððªðµð¶ð³ ðð´ð§ð¸ ðð¦ð­ð¶ð® ððª ð¢ð¬ðµðªð§ð¬ð¢ð¯ ðð­ð¦ð© ðð¥ð®ðªð¯',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thum = fs.readFileSync("./Media/theme/jarot.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Media/theme/jarot.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Media/theme/jarot.jpg") //ur error pic
global.thumb = fs.readFileSync("./Media/theme/jarot.jpg") //ur thumb pic
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//module api
module.exports = {
api:{
     removebg: ['zNKnayDFH1nugtA81fkPMzXn','5CyygkXiT5vrki2Z6ZsUCE8u','Mz4yJkagrCLotdgsr4Ms39ud','vEeWnzQws9kJoYNMYKhbT1s6','2arViktax9HUdMqy9U7wFLKT','sfZpRHNwVPAG57nZVHijYZ9v','oqVVyQ2rBDYdUrxThg4GdjhA','rGp4axHpQ56Y5tRLX7J789QC','NfPx6NgTkpVYLnKUZHCAM1P3'],//https://remove.bg/api
     unscreen: ['N6J4Bjbyh2V4eqhAPTWYtFER','fcKJkPstNXp4pjntYt3bR38E'],
     upscaling: '1255173112',
     imgsuper: ['198f69d4b2msh0021bb0690669a6p1f3a80jsn9cab1ae485cc','85731a45bbmshf7bd86f09b300c2p14e544jsncd18a8d5dba2'],//https://super-image1.p.rapidapi.com/
     speechtotext: ['897beebb3ac74ceeaa6f8d0903b2297a']
   }
   }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

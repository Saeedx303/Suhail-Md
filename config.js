const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/saeedx303/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/saeed.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923120443386" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923120443386";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254797321557";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '2'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/JzSP1sB/662253f489568.jpg" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923477008403,923120443386";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0trb1F1K2VSYTU4THZqb0MxR1VwTk9UeWN5MDBUa3JDRVBITzNRZnRrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTllscVlhbjU4Q3dFNlRnU2RkTGR5amx5YURQeWRLNEFYeUc1U2EyRHNBbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQnBnV3dWeXlFOGw3Unk3TnBxenZTT3QyRkZqaTJvalhoQkl3VWNZMFhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKM3h1cnFVS2dxNjJJSmtiWCtGOTl3ajFRbzF2TE03Z2ZrODBhd1hPLzI0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllDV1p0clczMHFxcUt2TkIvYS8vQ2J3MnAzR01sU2k3S2ZKYVovaW1oRXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllpUHdOeWdzN2VjVEp4YUtmR3o5ODFuZnpDcXFnNnVUWXM0TldEK2lIUjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ09VSTRBaVV2SGlsU2UvNnE4Wk5YV0s3U0cwYXloeHZ0eENLeXFvYmUwVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVdhSEdyUVIxZk9mWjVHQ2Z5ZGJmUDd1ZG5UaWFoamlCN3ZjWGExM0hGbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijg0RkFOZjN6THAxTUplVTNFSUVXY2tGNGJTcmkyWXJ0ek5JQ0pFL3hZVVQ4ZkJJSU5uWlFKalA4SHhrM09nZVBSZ003ZWFNODRnNTFwakhwcytjSGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIzLCJhZHZTZWNyZXRLZXkiOiJDUUlvUnF3dk45TytORjFwZUp6czFRT0RlQWgwTW9jQnhZVHJKazMyNFk4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc5NzMyMTU1N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3QzFDMkRENTM2OEMyQkZCRkEyQjBGMUJDNUU0ODg5QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzEzNTE2MDg5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3OTczMjE1NTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQkJGRDc1MTdFNTRDMDNGMEREQjVGQkNGNEIxMjU1QzUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxMzUxNjA4OX1dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiOG1FTEh2NmFSS1Nfd1o1TWd6R0VVQSIsInBob25lSWQiOiI3NzExNWJiMi1kNjgzLTQxOTktOWI0OC1lZGIyMWE0NDM1OWQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNDNXTHBYNVNKY1VNaUhNZU02QUVJaFkzMlBZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJxS1lzRTFnL29weGR4MXgzdG9HbFlhaURHUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJBSjY4VFBLOSIsIm1lIjp7ImlkIjoiMjU0Nzk3MzIxNTU3OjEyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IktpbmcgQ2FsZWIg8J+HsPCfh6oifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xEOGg3OENFS25jaUxFR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im5UVUlZRVg0dmlXN2Q3QkVYMUNsZzBiSzNCVHpiSVJQNlc1dk9HWXc4Rk09IiwiYWNjb3VudFNpZ25hdHVyZSI6IlRMWnZXKzZQeEJCYjhKZ2J6SFdJVHJNTTVwbno3K25yMm5ubGZTVVZKT3FmbkpqUklYWjVYb3hCblBsSkV1SGdBQSt1bzdRU0xJS1djMk51RXkwU0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJabm9yUXFZbmFITjc4YnZtYkd3cForRGVMYU9rMFp5TVN1RjBVRnBjT3JvTW9nUWV1eEhGNlZNcWNrd21JdXRnSVh0QjdTVGxCcSswSmV2U050YTNpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc5NzMyMTU1NzoxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaMDFDR0JGK0w0bHUzZXdSRjlRcFlOR3l0d1U4MnlFVCtsdWJ6aG1NUEJUIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzEzNTE2MDg2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtMNiJ9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©aleb²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "BABLI",
  packname: process.env.PACK_NAME || "BABLI",
  botname : process.env.BOT_NAME  || "€aleb-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Caleb",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

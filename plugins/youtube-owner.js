import fs from 'fs'
let handler  = async (m, { conn, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = (await import("@adiwajshing/baileys")).default
const anu = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: 'Riel BOT', 
                    jpegThumbnail: './thumbnail.jpg'
                          }
                        }
                      }
conn.sendMessage(m.chat,{ text: wm}, { quoted: anu })
}



handler.help = ['doc']

handler.tags = ['ᴘᴇɴᴅɪɴɢ sᴛᴜғғ']

handler.command = /^fyt$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false

export default handler

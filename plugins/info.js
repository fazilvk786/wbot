let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 ലിജൂട്ടൻ 2.0😁 〙 ═
╠➥  *ആരെങ്കിലും PM ൽ വന്നിട്ട് മെസ്സേജ് അയച്ചാൽ അവരുടെ മൂട്ടിൽ പന്നിപ്പടക്കം🧨 വെച്ചു പൊട്ടിക്കും : എന്ന് ചാവേർ വാസു അണ്ണൻ (ലിജൂട്ടൻ 2.0 യുടെ അമ്മാവൻ)*
╠➥ Owner: MUHAMMED FAZIL VK
╠➥ Type: ആർക്കും ഉപയോഗിക്കാം🤩
║
╠➥ YouTube: https://youtube.com/c/
╠➥ instagram: https://instagram.com/mu.fazil_vk
╠➥ Memmory: രോഹിത്തിന്റെ തലയിൽ വർക്ക് ചെയ്യുന്ന ലിജൂട്ടൻ 2.0 എന്ന അൾട്ടിമേറ്റ് ബോട്ട് ആണിത്.
║
╠═〘 Thanks To 〙 ═
╠➥ My Brain😁 ™ 
╠➥ ™ ɪɴᴅᴏɴᴇsɪᴀ
            ʙʀᴜᴛᴀʟ
            ᴍᴀʀᴋɪᴠ
            ʀᴀᴠᴀɴᴀɴ
            ᴄʏʙᴇʀ ᴋᴀʟʟᴀɴ
            ʜɪᴛʟᴇʀ ᴛʜᴇ ɴᴀᴢɪ
            ᴄʏʙᴇʀ ᴄᴏᴍᴍᴀɴᴅᴏ
            sʜᴀʀɪᴋ
            ᴠɪsʜɴᴜ
            ᴡʜ173 5ᴘ1ᴅ3ʀ
             ʟᴏʀᴅ ᴏsɪʀɪs
╠➥ 
║
╠═〘 ബോട്ട്  〙 ═
╠➥ MAKE GROUP ADMIN 
╠➥ TURN ON YOUR DATA
╠➥ CONTACT : wa.me//+9190
║
║>Request? wa.me//+91
║
╠═〘 ലിജൂട്ടൻ 2.0 〙 ═
`.trim(), m)
}
handler.command = !/^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


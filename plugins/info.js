let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 ലിജൂട്ടൻ 2.0😁 〙 ═
╠➥  *ആരെങ്കിലും PM ൽ വന്നിട്ട് മെസ്സേജ് അയച്ചാൽ അവരുടെ തലയിൽ പന്നിപ്പടക്കം🧨 വെച്ചു പൊട്ടിക്കും : എന്ന് ചാവേർ വാസു അണ്ണൻ (ലിജൂട്ടൻ 2.0 യുടെ അമ്മാവൻ)*
╠➥ Owner: *MUHAMMED FAZIL VK*
╠➥ Type: ആർക്കും ഉപയോഗിക്കാം🤩
║
╠➥ YouTube: https://youtube.com/c/
╠➥ instagram: https://instagram.com/mu.fazil_vk
╠➥ Telegram: https://t.me/fazilvk
╠➥ Memmory: *ഒറിജിനൽ ലിജിനെ പോലെ പോലെ തലയിൽ ഒരു കുന്തവുമില്ലാത്ത മന്ദബുദ്ധിയായ അൾട്രാ ലെജൻഡ് ബോട്ട് ആണ് ഞാൻ😁*
║
╠═〘 Thanks To 〙 ═
╠➥ My Brain😁 ™ 
╠➥ ™ സ്നേഹത്തോടെ
╠➥ *FAZIL VK*
║
╠═〘 ബോട്ട് എങ്ങിനെ ഉപയോഗിക്കാം 〙 ═
╠➥ MAKE ME GROUP ADMIN 
╠➥ TURN ON YOUR DATA
╠➥ CONTACT : wa.me//+19795001362
║
║>Request? wa.me//+19795001362
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


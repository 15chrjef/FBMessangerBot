const http = require("http");
const Bot = require('messenger-bot');

let bot = new Bot({
	token: 'EAAagZB1KeqagBAIHzdZASBYelXv7sZAVrY5IlhOp0APIexq0eKlXP6nXYaBvZAoib4nlhU6a8gbY4IDMVzOZBVDvbtncdJbtUZCYbZAEQuciMmSyd671fKLa4OsJ8vwTPv3awVoxzVNJjb9MJrfOhXZBkCUT083l2d6VFABDcF7aEwZDZD',
	verify: 'VERIFY_TOKEN'
})

bot.on('error', (err) => {
	console.log(err.message)
})

bot.on('message', (payload, reply) => {
	let text = payload.message.text

	bot.getProfile(payload.sender.id, (err, profile) => {
		if(err) throw err

		reply({ text } , (err) => {
			if(err) throw err

			console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
		})
	})
})

http.createServer(bot.middleware()).listen(3000);
console.log('running')


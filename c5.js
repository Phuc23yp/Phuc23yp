module.exports.config = {
	name: "c5",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "Đăng Phúc //sửa credit cả nhà mày chết",
	description: "warr",
	commandCategory: "war", 
	usages: "c5[ngôn]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
	if (args.join() == "") {api.sendMessage("Đụ mẹ mày con ôn lồn tu phách như mày dơ mà dơ từ lúc sinh ra kiếm sục co đĩ mẹ mày hả con phò nát sủa tiếng chó hoang mang tán xéo mỏ lồn mày liền Để đào mộ con gái mẹ mày lên h saoo hay giờ kêu thằng cha mày đụ nát lồn mày hả em đụ cho tinh trùng dơ tinh trùng khuyết tật nó sồn lên não mày được mày bớt ngu lồn lại",event.threadID, event.messageID);
	}
}

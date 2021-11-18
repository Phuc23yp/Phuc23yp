module.exports.config = {
	name: "c4",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "Đăng Phúc //sửa credit cả nhà mày chết",
	description: "warr",
	commandCategory: "war", 
	usages: "c4[ngôn]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
	if (args.join() == "") {api.sendMessage("Mày thì tuổi lồn ăn được tao nè ôn lồn là saoo má trâu là saooo má hay má cạn ngôn ngữ rồi con đĩ cạn ngôn ngữ hay mày liệt ngôn ngữ hả con đĩ cái lồn bà già con gái mẹ nhà mày con đĩ âm binh âm khí âm lồn đại dương đại bàng nó còn ĩa vô hong lồn mày nữa đó thằng lồn trình ngu giỏi cái sủa ngu chướng tai gai mắt thì t dí",event.threadID, event.messageID);
	}
}

require("../config/database").connect()
let PostSeeder = require("./PostSeeder")
let UserSeeder = require("./UserSeeder")
let ConversationSeeder = require("./ConversationSeeder")
let ParticipantSeeder = require("./ParticipantSeeder")
let MessageSeeder = require("./MessageSeeder")
let CommentSeeder = require("./CommentSeeder")
let DataSeeder = async () => {
    try {
        // await UserSeeder.Seeder()
        // await PostSeeder.Seeder()
        // await ConversationSeeder.Seeder()
        // await ParticipantSeeder.Seeder()
        // await MessageSeeder.Seeder()
        await CommentSeeder.Seeder()
        console.log('done');
    } catch (error) {
        console.log(error);
    }
}
DataSeeder()
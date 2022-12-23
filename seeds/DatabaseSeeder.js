require("../config/database").connect()
let PostSeeder = require("./PostSeeder")
let UserSeeder = require("./UserSeeder")
let ConversationSeeder = require("./ConversationSeeder")
let MessageSeeder = require("./MessageSeeder")
let CommentSeeder = require("./CommentSeeder")
let ReactSeeder = require("./ReactSeeder")
let FriendSeeder = require("./FriendSeeder")
let DataSeeder = async () => {
    try {
        // await UserSeeder.Seeder()
        // await PostSeeder.Seeder()
        // await ParticipantSeeder.Seeder()
        await ConversationSeeder.Seeder()
        // await MessageSeeder.Seeder()

        // await CommentSeeder.Seeder()
        // await ReactSeeder.Seeder()
        // await FriendSeeder.Seeder()
        console.log('done');
    } catch (error) {
        console.log(error);
    }
}
DataSeeder()
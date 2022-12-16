require("../config/database").connect()
let { faker } = require('@faker-js/faker/locale/vi');
let Post = require("../models/Post")
let User = require("../models/User")
let limit = 10;
let getUser = async ()=>{
    return await User.find({},'_id').limit(limit)
}
let Seeder = async ()=>{
    let users = await getUser();
    for (let index = 0; index < limit; index++) {
        let random = Math.floor(Math.random() * limit) ;
        let id = users[random]['_id'];
        let newPost = new Post({
            content : faker.lorem.paragraphs(5),
            user_id:id,
        })
        await newPost.save()
    }
}
module.exports ={Seeder}
const bcrypt = require('bcryptjs');
let { faker } = require('@faker-js/faker/locale/vi');
let User = require('../models/User')
let Seeder = async (req, res,) => {
    var salt = bcrypt.genSaltSync(10)
    let hashPassword = await bcrypt.hashSync('nhatvuong99', salt);
    let newUser1 = new User({
        email: 'nhatvuong99@gmail.com',
        password: hashPassword,
        first_name: 'Nguyễn Nhất',
        last_name: 'Vương',
        avatar:'/images/logo99.png',
        cover: faker.image.image(),
        role: 'admin',
        is_active: faker.datatype.boolean(),
    })
    await newUser1.save();
    let newUser2 = new User({
        email: 'doannhat@gmail.com',
        password: hashPassword,
        first_name: 'Phan Doãn',
        last_name: 'Nhật',
        avatar: faker.image.avatar(),
        cover: faker.image.image(),
        role: 'admin',
        is_active: faker.datatype.boolean(),
    })
    await newUser2.save()
    let newUser3 = new User({
        email: 'minhhau@gmail.com',
        password: hashPassword,
        first_name: 'Nguyễn Minh',
        last_name: 'Hậu',
        role: 'admin',
        avatar: faker.image.avatar(),
        cover: faker.image.image(),
        is_active: faker.datatype.boolean(),
    })
    await newUser3.save()
    for (let index = 0; index < 100; index++) {
        let gender = faker.name.sex()
        var salt = bcrypt.genSaltSync(10)
        let hashPassword = await bcrypt.hashSync('nhatvuong99', salt);
        let newUser = new User({
            email: faker.internet.email(),
            password: hashPassword,
            first_name: faker.name.firstName(gender),
            last_name: faker.name.lastName(gender),
            avatar: faker.image.avatar(),
            cover: faker.image.image(),
            friend_count: faker.random.numeric(),
            is_active: faker.datatype.boolean(),
        })
        await newUser.save()
    }
}

module.exports = { Seeder }
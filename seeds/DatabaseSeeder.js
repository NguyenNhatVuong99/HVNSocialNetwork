let UserSeeder = require('../seeds/UserSeeder')
let PostSeeder = require('../seeds/PostSeeder')

let DataSeeder = async  () => {
    try {
        await UserSeeder.Seeder()
        await PostSeeder.Seeder()
        console.log('done');
    } catch (error) {
        console.log(error);
    }
}
DataSeeder()
const sequelize = require('../config/connection');
const seedPosts = require('./postSeed');

const seedAll = async () => {
    await sequelize.sync({ force: true});

    await seedPosts()
        console.log("------ \n POSTS seeded... \n ------");

    process.exit(0);
};

seedAll();
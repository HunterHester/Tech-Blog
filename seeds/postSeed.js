const { Post } = require('../models');

const postData = [
    {"title":"this is a test title that demonstrates what could be but not what is", "body":"this is the body... i don't really have much more to say"},
    {"title":"this is yet another post that i am intentionally seeding in", "body":"would you believe that i still don't know what to put"},
    {"title":"bulldogs","body":"you may not think it but they are the ultimate lifeform"}
]

const seedPosts = () => Post.bultCreate(postData);

module.exports = seedPosts
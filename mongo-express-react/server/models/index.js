import mongoose from 'mongoose';

import User from './user';
import Message from './message';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
  });
};

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', async () => {
  await Promise.all([
    models.User.deleteMany({}),
    models.Message.deleteMany({}),
  ]);
  createUsersWithMessages();
})

const createUsersWithMessages = async () => {
  const user1 = new models.User({ username: 'User One' });
  const user2 = new models.User({ username: 'User Two' });
  const message1 = new models.Message({ text: 'Message one', user: user1.id });
  const message2 = new models.Message({ text: 'Message two', user: user2.id });
  
  await user1.save();
  await user2.save();
  await message1.save();
  await message2.save();
};

const models = { User, Message };

export { connectDb };

export default models;
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  }
});

userSchema.statics.findByLogin = async function (login) {
    return await this.findOne({ username: login }) || await this.findOne({ email: login });
}

userSchema.pre('remove', function(next) {
  this.model('Message').deleteMany({ user: this._id }, next);
});
const User = mongoose.model('User', userSchema);

export default User;
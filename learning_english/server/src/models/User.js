import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  username: String,
  pass: String,
  email: String
});

const User = mongoose.model('Users', UserSchema);
export default User;

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/* Mongodb automaticamente crea un id con hash { _id:123asdfghjklm, name: "Tesla"} */
const CarSchema = new Schema({
  name: String
});

const Car = mongoose.model('Cars', CarSchema);
export default Car;

// // adminModel.js
// import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';

// const { Schema, model } = mongoose;

// const adminSchema = new Schema({
//   email: { type: String, unique: true, required: true },
//   password: { type: String, required: true },
// });

// // Hash the password before saving it to the database
// adminSchema.pre('save', async function (next) {
//   try {
//     const hashedPassword = await bcrypt.hash(this.password, 10);
//     this.password = hashedPassword;
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

// const Admin = model('Admin', adminSchema);

// export default Admin;

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

adminSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;

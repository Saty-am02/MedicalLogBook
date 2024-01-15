import mongoose from 'mongoose';


const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

});


const Student = mongoose.model('Student', studentSchema ,'student_details');

export default Student;
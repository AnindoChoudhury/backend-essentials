const mongoose = require("mongoose");
const { User } = require("../schemas/user.model.js");
const connect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/Streamer`);
    const user = await User.create({
      firstname: "anindo",
      lastname: "choudhury",
      username: "ani",
      password: "1233i",
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = connect;

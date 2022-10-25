const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

// export name of model and schema of model
module.exports = mongoose.model("Subject", SubjectSchema);
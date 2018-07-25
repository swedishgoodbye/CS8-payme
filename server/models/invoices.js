const mongoose = require('mongoose');
const mongooseTypes = require('mongoose-types');

mongooseTypes.loadTypes(mongoose, 'email');

const { Email } = mongoose.Schema.Types;

const Invoice = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    number: {
      type: String,
      required: true,
    },
    img:  { data: Buffer, contentType: String },
    totalAmount: {
      type: Number,
      required: true,
    },
    phone: {
      number: Number,
      frequency: String,
    },
    email: {
      address: Email,
      frequency: String,
      // mailOptions: {
      //   from: String, // sender address
      //   to: String, // list of receivers
      //   subject: String, // Subject line
      //   text: String, // plain text body
      //   html: String, // html body
      // },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Invoice', Invoice);

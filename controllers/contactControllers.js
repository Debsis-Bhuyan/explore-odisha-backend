import Contact from "../models/contactModel.js";

export const createContact = async (req, res) => {
  try {
    const { fullname, email, message } = req.body;
    if (!fullname || !email || !message) {
      return res
        .status(400)
        .json({ message: "Name, email, and message are required fields" });
    }

    const contact = await Contact.create({
      name:fullname,
      email,
      desc: message,
    });

    //contct data send

    res.status(201).json({
      success: true,
      message: "Feedback send successfully",
      contact,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};
export const getAllContact = async (req, res, next) => {
  try {
    

    //contct data send
    const contactData = await Contact.find({});

    res.status(201).json({
      success: true,
      message: "Feedback send successfully",
      contactData,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

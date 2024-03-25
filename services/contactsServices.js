import Contact from "../models/Contact.js";

export const listContacts = () => Contact.find();
export const addContact = (data) => Contact.create(data);

export const getContactById = async (id) => {
  const data = await Contact.findById(id);
  return data;
};
export const updateContact = (id, newData) =>
  Contact.findByIdAndUpdate(id, newData);

export const removeContact = (id) => Contact.findByIdAndDelete(id);

export const updateStatus = (id, newData) =>
  Contact.findByIdAndUpdate(id, newData);

const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");
const Joi = require("joi");
const contactsPath = path.join(__dirname, "/contacts.json");

const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),

  birth_year: Joi.number().integer().min(1900).max(2013),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
}).with("username", "birth_year");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId);
  if (result) return result;
  return null;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
};

const addContact = async (body) => {
  const contacts = await listContacts();
  const newContact = { id: nanoid(), ...body };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

const updateContact = async (contactId, body) => {
  // const contacts = await listContacts();
  // const index = contacts.findIndex((item) => item.id === contactId);
  // const changeContact = { id: contactId, ...body };
  // await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};

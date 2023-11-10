const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid")
const contactsPath = path.join(__dirname, "./db/contacts.json");

console.log(__dirname)

// TODO: задокументувати кожну функцію
async function listContacts() {
 
    const data = await fs.readFile(contactsPath, "utf-8")
    return JSON.parse(data);
 
  // ...твій код. Повертає масив контактів.
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.find(contact => contact.id === contactId )
  return result || null;
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

function removeContact(contactId) {
  
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

 async function addContact(name, email, phone) {
  const data = await fs.readFile(contactsPath, "utf-8")
  const contacts = JSON.parse(data);
const newContact = {
  id: nanoid(),
  name,
  email, 
  phone,
}
contacts.push(newContact);
await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
return newContact;
  // ...твій код. Повертає об'єкт доданого контакту. 
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}
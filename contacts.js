// contacts.js
const fs = require("fs/promises");
const path = require("path");
/*
 * Розкоментуй і запиши значення
 * 
 */
const path = require("path")
const contactsPath = path.join(__dirname, "contacts.json");

 

// TODO: задокументувати кожну функцію
async function listContacts() {
  const data = await fs.readFile(contactsPath, "utf-8" )
  return JSON.parse(data)
    // ...твій код. Повертає масив контактів.
  }
  
  function getContactById(contactId) {
    // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  }
  
  function removeContact(contactId) {
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  }
  
  function addContact(name, email, phone) {
    // ...твій код. Повертає об'єкт доданого контакту. 
  }

  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
  }
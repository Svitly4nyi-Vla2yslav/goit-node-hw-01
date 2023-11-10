

const contacts = require("./contacts")


// const argv = require('yargs').argv;

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case 'list':
            const allContacts = await contacts.listContacts();
            console.log(allContacts);
            break;

        case 'get':
            const oneContact = await contacts.getContactById(id);
           console.log(oneContact);
            break;

        case 'add':
            const addNewContact = await contacts.addContact(name, email, phone);
            console.log(addNewContact)
            break;

        case 'remove':
            const deleteContact = await contacts.removeContact(id)
            console.log(deleteContact)
            break;

        // default:
        //     console.warn('\x1B[31m Unknown action type!');
    }
}

// invokeAction(argv);

// invokeAction({action: "list"});

invokeAction({action: "remove", id: "t030w43MA1PMFyzdQY5zM"});
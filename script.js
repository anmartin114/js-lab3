class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    let it = new Contact(name, email, phone, relation);
    this.contacts.push(it);
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
}

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

const book = new AddressBook();
book.add("alicia", "anmartin114@gmail.com", "2496879142", "me");
book.add("mom", "martincathleen@yahoo.com", "2489901124", "mother");
book.add("Dad", "martins@wowway.com", "2488792009", "father");
book.add("Rachel", "rachmart99@gmail.com", "2485546892", "sister");

const print = function(book) {
  for (const contacts of book.contacts) {
    console.log(contacts);
  }
};

print(book);

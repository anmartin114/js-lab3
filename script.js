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

function display() {
  document.querySelector('#show-contacts').innerHTML=""
  book.contacts.forEach((contact, index) => {
    const contactBox = document.createElement("div");
    contactBox.innerHTML = `<i class="fa fa-trash" data-index-number="${index}" aria-hidden="true"></i>`;
    let name = document.createElement("p");
    name.innerText = `${contact.name}`;
    contactBox.appendChild(name);
    let contactContainer = document.querySelector("#show-contacts");
    contactContainer.appendChild(contactBox);
    contactBox.classList.add("card");
    let email = document.createElement("p");
    email.innerText = `${contact.email}`;
    contactBox.appendChild(email);
    let phone = document.createElement("p");
    phone.innerText = `${contact.phone}`;
    contactBox.appendChild(phone);
    let relation = document.createElement("p");
    relation.innerText = `${contact.relation}`;
    contactBox.appendChild(relation);
  });
}

//<i class="fa fa-trash" data-index-number="${index}" aria-hidden="true"></i>

const form = document.querySelector("form");
form.addEventListener("submit", addContact);

function addContact(e) {
  e.preventDefault();
  const formData = new FormData(form);
  book.add(
    formData.get("name"),
    formData.get("email"),
    formData.get("phone"),
    formData.get("relation")
  );
  form.reset();
  display();
}

document
  .querySelector("#show-contacts")
  .addEventListener("click", deleteContact);

function deleteContact(e) {
  if (e.target.classList.contains("fa-trash")) {
    const index = e.target.getAttribute("data-index-number");
    console.log(index);
    book.deleteAt(index);
    display();
  }
}

display();

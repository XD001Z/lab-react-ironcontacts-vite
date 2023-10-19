import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {

  const [contactList, setContacts] = useState([
    contacts[0],
    contacts[1],
    contacts[2],
    contacts[3],
    contacts[4],
  ]);

  const handleAddNewRandom = () => {
    let availableContacts = contacts.filter((contact) => {
      return !contactList.includes(contact);
    });

    if (availableContacts.length > 0) {
      let randomIndex = Math.floor(Math.random() * availableContacts.length);
      setContacts(contactList.concat(availableContacts[randomIndex]));
    }
  };

  const handleSortByName = () => {
    const sortedContacts = [...contactList].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  };

  const handleSortByPopularity = () => {
    const sortedContacts = [...contactList].sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedContacts);
  };

  const handleDelete = (index) => {
    const updatedContacts = contactList.slice(0,index).concat(contactList.slice(index + 1));
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={handleAddNewRandom}>Add New Random Contact</button>
      <button onClick={handleSortByName}>Sort by Name</button>
      <button onClick={handleSortByPopularity}>Sort by Popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Oscar</th>
          <th>Emmy</th>
          <th>Actions</th>
        </tr>
        {contactList.map((contact, index) => {
          return (
            <tr>
              <td><img className="img" src={contact.pictureUrl} alt="picture" /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && <p>🏆</p>}</td>
              <td>{contact.wonEmmy && <p>🌟</p>}</td>
              <td><button onClick={() => {handleDelete(index)}}>Delete</button></td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;

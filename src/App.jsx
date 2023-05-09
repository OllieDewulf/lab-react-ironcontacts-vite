import { useState } from 'react'
import './App.css'
import contacts from './contacts.json'

function App() {
  const [Contacts, setContacts] = useState(contacts.slice(0, 5));

  const handleClick = () => {
    const restOfContacts = contacts.filter(element => !contacts.includes(element))

    const randomContact = Math.random() * restOfContacts.length
  }

  const imgWidth = {
    height: '200px',
  }
  
  return <div className='App'>
    <h1>Iron Contacts</h1>
    <button onClick={handleClick}>Add Random Contact</button>
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th> Won an Emmy</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img style={imgWidth} src={contacts[0].pictureUrl} alt=''></img></td>
          <td>{contacts[0].name}</td>
          <td>{contacts[0].popularity}</td>
          <td>{contacts[0].wonOscar ? '🏆' : 'nope'}</td>
          <td>{contacts[0].wonEmmy ? '🏆' : 'nope'}</td>
        </tr>
        <tr>
        <td><img style={imgWidth} src={contacts[1].pictureUrl} alt=''></img></td>
          <td>{contacts[1].name}</td>
          <td>{contacts[1].popularity}</td>
          <td>{contacts[1].wonOscar ? '🏆' : 'nope'}</td>
          <td>{contacts[1].wonEmmy ? '🏆' : 'nope'}</td>
        </tr>
        <tr>
        <td><img style={imgWidth} src={contacts[2].pictureUrl} alt=''></img></td>
          <td>{contacts[2].name}</td>
          <td>{contacts[2].popularity}</td>
          <td>{contacts[2].wonOscar ? '🏆' : 'nope'}</td>
          <td>{contacts[2].wonEmmy ? '🏆' : 'nope'}</td>
        </tr>
        <tr>
        <td><img style={imgWidth} src={contacts[3].pictureUrl} alt=''></img></td>
          <td>{contacts[3].name}</td>
          <td>{contacts[3].popularity}</td>
          <td>{contacts[3].wonOscar ? '🏆' : 'nope'}</td>
          <td>{contacts[3].wonEmmy ? '🏆' : 'nope'}</td>
        </tr>
        <tr>
        <td><img style={imgWidth} src={contacts[4].pictureUrl} alt=''></img></td>
          <td>{contacts[4].name}</td>
          <td>{contacts[4].popularity}</td>
          <td>{contacts[4].wonOscar ? '🏆' : 'nope'}</td>
          <td>{contacts[4].wonEmmy ? '🏆' : 'nope'}</td>
        </tr>
      </tbody>
    </table>
  </div>
}

export default App
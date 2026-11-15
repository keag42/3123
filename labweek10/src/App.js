import './App.css';
import { useState } from "react";
function App() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("Alberta");
  const [postalCode, setPostalCode] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [showResults, setShowResults] = useState(false);
  return (
    <div className="App">
      <header className="App-header">

        
          <h1> Data Entry Form</h1>
        <tr>
          <td>
            <p style={{marginBottom: 0}}>Email</p>
            <input type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </td>

          <td>
            <p style={{marginBottom: 0}}>name</p>
            <input type="text" placeholder="Full Name"value={name} onChange={(e) => setName(e.target.value)}/>
          </td>
        </tr>

        <span><p style={{marginBottom: 0}}>Address</p></span>
        <input type="text" placeholder="1234 Main St" value={address} onChange={(e) => setAddress(e.target.value)}/>

        <p style={{marginBottom: 0}}>Address 2</p>
        <input type="text" placeholder="Apartment, studio, or floor" value={address2} onChange={(e) => setAddress2(e.target.value)}/>

        <tr>
          <td>
            <p style={{marginBottom: 0}} >City</p>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
          </td>

          <td>
            <p style={{marginBottom: 0}}>Province</p>
            <select name="province" id="province"value={province} onChange={(e) => setProvince(e.target.value)}>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
            </select>
          </td>

          <td>
            <p style={{marginBottom: 0}}>Postal Code</p>
            <input type="text"  value={postalCode} onChange={(e) => setPostalCode(e.target.value)}/>
          </td>
        </tr>

       <td><input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)}/> Agree Terms & Condition?</td>

        <button style={{backgroundColor: 'green'}} onClick={() => setShowResults(true)}>Submit</button>


        {/*Hidden:*/}
        {showResults && (
          <div style={{border: '1px solid green', marginTop:20, marginBottom:20, paddingLeft: 20, paddingRight: 20}}>
            <p style={{margin: 0}}><span style={{ color:"green"  }}>Email:</span> {email}</p>
            <p style={{margin: 0}}> <span style={{ color: "green" }}>Full Name:</span> {name}</p>
            <p style={{margin: 0}}><span style={{ color: "green" }}>Address:</span> {address}, {address2}</p>
            <p style={{margin: 0}}> <span style={{ color: "green" }}>City:</span> {city}</p>
            <p style={{margin: 0}}><span style={{ color: "green" }}>Province:</span> {province}</p>
            <p style={{margin: 0}}><span style={{ color: "green" }}>Postal Code:</span> {postalCode}</p>
          </div>
        )}

      </header>
    </div>
  );
}

export default App;

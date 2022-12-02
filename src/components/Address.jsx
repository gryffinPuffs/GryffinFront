import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Address = () => {
    const [address_id, setAddress_id] = useState("")
  const [address_line1, setAddress_line1] = useState("");
  const [address_line2, setAddress_line2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip_code, setZip_code] = useState("");
    const navigate = useNavigate();
  async function handleAddress(event) {
    event.preventDefault();
    
    
    setAddress_line1("")
    setAddress_line2("")
    setCity("")
    setState("")
    setZip_code("")
    setAddress_id(event.target.id)
    localStorage.setItem("address_id", address_id)
    console.log(address_id, "address_id created")
    navigate("/Register")
  }

  return (
    <div className="address-container">
        <h2 className="address-header">Set Your Address</h2>
        <form onSubmit={handleAddress}>
        <input
          type="text"
          name="address_line1"
          placeholder="Address Line 1 *"
          required
          value={address_line1}
          onChange={function (event) {
            setAddress_line1(event.target.value)

          }}
        />
        <br />
        <input
          type="text"
          name="address_line2"
          placeholder="Address Line 2"
          value={address_line2}
          onChange={function (event) {
            setAddress_line2(event.target.value)

          }}
        />
        <br />
        <input
          type="text"
          name="city"
          placeholder="City *"
          required
          value={city}
          onChange={function (event) {
            setCity(event.target.value)

          }}
        />
        <br />
        <input
          type="text"
          name="state"
          placeholder="State *"
          required
          value={state}
          onChange={function (event) {
            setState(event.target.value)

          }}
        />
        <br />
        <input
          type="text"
        //   pattern="[0-9]"
          name="zip_code"
          placeholder="Zip Code *"
          required
          value={zip_code}
          onChange={function (event) {
            setZip_code(event.target.value)

          }}
        />
        <br />
        <button className="address-button" type="submit">Submit</button>
        </form>
    </div>
  )
};

export default Address;
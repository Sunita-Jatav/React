import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("");
  const [done, setDone] = useState(false);
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = { title, done, gender, city };
    console.log(data);
    // setTitle(""); setDone(false); setGender(""); setCity("");
  };

  return (
    <div>
      <h1>Create Task</h1>
      <form onSubmit={submitHandler}>
        
        {/* Title input */}
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <br />

        {/* Checkbox */}
        <label>
          <input
            type="checkbox"
            onChange={(e) => setDone(e.target.checked)}
            checked={done}
          />
          Completed
        </label>
        <br /><br />

        {/* Radio buttons */}
        <label>
          <input
            name="gender"
            value="male"
            type="radio"
            onChange={(e) => setGender(e.target.value)}
            checked={gender === "male"}
          />
          Male
        </label>
        <br />
        <label>
          <input
            name="gender"
            value="female"
            type="radio"
            onChange={(e) => setGender(e.target.value)}
            checked={gender === "female"}
          />
          Female
        </label>
        <br /><br />

        {/* Dropdown */}
        <select onChange={(e) => setCity(e.target.value)} value={city}>
          <option value="">--Select City--</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Kolkata">Kolkata</option>
        </select>
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;


import React,{useState} from 'react'
const namelist =[
    'John',
    'Jane',
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eve',
    'Frank',
    'Grace',
    'Hannah',
    'Ivy',
];   
const Q5 = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
      setSearchTerm(e.target.value.toLowerCase());
    };
  
    const filteredNames = namelist.filter((name) =>
      name.toLowerCase().includes(searchTerm)
    );
  return (
    <div>
     <h2>Live Search</h2> 
     <input
        type="text"
        placeholder="Search names..."
        value={searchTerm}
        onChange={handleChange}
      />
         <ul>
        {filteredNames.length > 0 ? (
          filteredNames.map((name, index) => <li key={index}>{name}</li>)
        ) : (
          <li>No match found</li>
        )}
      </ul> 
    </div>
  )
}

export default Q5

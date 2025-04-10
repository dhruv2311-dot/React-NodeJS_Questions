import React ,{useState,useEffect}from 'react'

const Q6 = () => {
    const[users,setusers]=useState([])
    const[loading,setloading]=useState(true)
    const[error,seterror]=useState(null)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            if (!res.ok) throw new Error('Network response was not ok');
            return res.json();
          })
          .then((data) => {
            setusers(data);
            setloading(false);
          })
          .catch((err) => {
            seterror(err.message);
            setloading(false);
          });
    },[])
    if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
       <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Q6

import { useEffect, useState } from 'react'
import './App.css'
import Grid from './Components/Grid'
import Search from './Components/Search'
import { Robot } from './assets/Robots'

const url = 'https://jsonplaceholder.typicode.com/users'

function App() {
  const [robots, setRobots] = useState<Robot[]>([])
  const [filteredRobots, setFilteredRobots] = useState<Robot[]>([])

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setRobots(data)
        setFilteredRobots(data)
      })
      .catch(err => {
        console.error('Failed to fetch robots:', err);
      });
  }, []);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const txt = e.target.value.toLowerCase();
    if (txt === "") {
      setFilteredRobots(robots);
    } else {
      const filtered = robots.filter(r =>
        r.name.toLowerCase().includes(txt) || r.email.toLowerCase().includes(txt)
      );
      setFilteredRobots(filtered);
    }
  };

  return (
    <>
      <h1>Find your robot </h1>
      <Search onSearchChange={onSearchChange} />
      <Grid robots={filteredRobots} />
    </>
  );
}

export default App;

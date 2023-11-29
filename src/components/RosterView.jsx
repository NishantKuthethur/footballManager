import { useStore } from '../store/store';

const RosterView = () => {
  const { searchValue } = useStore();

  // Mock data: Replace it with actual players data from csv and use state
  const players = [
    { name: "Messi", position: "Position 1" },
    { name: "Ronaldo", position: "Position 2" },
    { name: "Mbappe", position: "Position 3" },
    // ... more players 
  ];

  // Filter players based on searchValue
  const filteredPlayers = players.filter(player => 
    player.name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div>
      <table className=' text-texts-heading'>
        <thead>
          <tr>
						<th data-priority="1">Name</th>
						<th data-priority="2">Position</th>
					</tr>
        </thead>
        <tbody>
        {filteredPlayers.map((player, index) => (
          <tr key={index}>
            <td>{player.name}</td>
            <td>{player.position}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default RosterView;
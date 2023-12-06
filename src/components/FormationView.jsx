import { useStore } from '../store/store';
import Player from './Player';

export default function FormationView() {
  
  const {roster} = useStore();

  const startingPlayers = roster.filter(player => player.Starter === "Yes");

  const groupPlayersByRole = (players) => {
    const grouped = { Goalkeeper: [], Defender: [], Midfielder: [], Forward: [] };
    players.forEach(player => {
      if (grouped[player.Position]) {
        grouped[player.Position].push(player);
      }
    });
    return grouped;
  };

  // Filter starters and group them by role
  const groupedPlayers = groupPlayersByRole(startingPlayers);

  const getPositionForPlayer = (role, index, totalPlayers) => {
    // Base positions
    const baseYPositions = {
      Defender: '58px',
      Midfielder: '52px',
      Forward: '52px'
    };
    
    if(role=='Goalkeeper'){
      return { x: '65px', y: '52%' };
    }

    // Adjustments based on player order and role
    const yAdjustment = 20; // Vertical adjustment, change as needed
    let yPosition = parseInt(baseYPositions[role]) + (index - Math.floor(totalPlayers / 2)) * yAdjustment + '%';
  
    let xPosition;
    switch (role) {
      case 'Defender':
        // First and last defender in a different X line than the middle two
        xPosition = (index === 0 || index === totalPlayers - 1) ? '235px' : '220.24px';
        yPosition = (index === 2) ? '66%'  : yPosition;
        yPosition = (index === 3) ? '86%'  : yPosition;
        break;
      case 'Midfielder':
        // All midfielders in the same vertical line
        xPosition = '50%';
        break;
      case 'Forward':
        // Middle attacker in a different X line than the top and bottom
        xPosition = (index === 1) ? '600px' : '580px';
        break;
      default:
        xPosition = '50%';
    }
  
    return { x: xPosition, y: yPosition };
  };

  return (
    <div className='relative overlay-background h-[541px] w-[808px] rounded'>
      {Object.entries(groupedPlayers).map(([role, players]) => (
      players.map((player, index) => (
        <Player
          key={player.id}
          player={player}
          position={getPositionForPlayer(role, index, players.length)}
        />
      ))
    ))}
    </div>
  )
}

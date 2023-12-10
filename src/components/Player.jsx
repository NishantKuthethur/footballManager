import PropTypes from 'prop-types'
import { useStore } from '../store/store';

const Player = ({ player, position }) => {
    const { selectedPlayer, setSelectedPlayer} = useStore();
    const handlePlayerSelection = () => {
      setSelectedPlayer(player);
    }

    if(selectedPlayer == null && player.id == 1){
      setSelectedPlayer(player);
    }
    const isSelected = player.id === selectedPlayer.id;
    const style = {
      position: 'absolute',
      left: position.x,
      top: position.y,
      transform: 'translate(-50%, -50%)',
      // Add more styling as needed
    };
  
    return (
      <div style={style} className="player-circle flex flex-col items-center justify-center gap-1 text-texts-heading" onClick={handlePlayerSelection}>
        <div className={`h-8 w-8 flex items-center justify-center rounded-full ${isSelected ? 'bg-primary-orange' : 'bg-neutral-2 border-2'}`}><div className="jersey-number flex justify-center text-center ">{player["Jersey Number"]}</div></div>
        <div className="player-name text-[14px] leading-[21px] text-center font-medium ">{player["Player Name"]}</div>
      </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    position: PropTypes.object.isRequired
}

export default Player
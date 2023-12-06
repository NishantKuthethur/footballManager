import PropTypes from 'prop-types'
import { useStore } from '../store/store';

const Player = ({ player, position }) => {
    const { setSelectedPlayer} = useStore();
    const handlePlayerSelection = () => {
      setSelectedPlayer(player);
    }

    const style = {
      position: 'absolute',
      left: position.x,
      top: position.y,
      transform: 'translate(-50%, -50%)',
      // Add more styling as needed
    };
  
    return (
      <div style={style} className="player-circle flex flex-col items-center justify-center gap-1 text-texts-heading" onClick={handlePlayerSelection}>
        <div className='relative h-8 w-8 bg-neutral-2 rounded-full border-2'><div className="jersey-number flex justify-center text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 right-0.5">{player["Jersey Number"]}</div></div>
        <div className="player-name text-[14px] leading-[21px] text-center font-medium ">{player["Player Name"]}</div>
      </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    position: PropTypes.object.isRequired
}

export default Player
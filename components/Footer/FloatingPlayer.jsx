import PlayerControls from '../Player/PlayerControls';
import { useStateContext } from '../../contexts/ContextProvider';
import NowPlayingImage from '../Player/NowPlayingImage';
import Volume from './Volume';

const FloatingPlayer = () => {
  const { activeMenu, currentSong } = useStateContext();

  return (
    <div
      className={`lg:hidden flex justify-between items-center bg-black swatch_text-primary w-full px-8 py-2 border-t-[1.5px] border-t-gray-600 ${
        activeMenu && 'md:ml-72 md:w-[calc(100%-18rem)]'
      }`}
    >
      <div className='flex items-center gap-3'>
        <NowPlayingImage width={90} height={90} />
        <div className='flex flex-col w-40 h-14 overflow-hidden'>
          <div className='text-xl '>{currentSong.title}</div>
          <div className='text-base text-gray-400 font-semibold'>
            {currentSong.artist}
          </div>
        </div>
      </div>
      <div className=' w-80'>
        <PlayerControls />
      </div>
      <Volume />
    </div>
  );
};

export default FloatingPlayer;

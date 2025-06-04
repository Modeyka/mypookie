import React, { useState, useCallback } from 'react';

const initialNoButtonTexts: string[] = [
  'No',
  'R U SURE?',
  'BUT WHY? :(',
  'LAST CHANCE!',
  'MY HEART!!',
  'YES IS HUGE!',
  'AWKWARD...',
  'I WILL CRY',
  'PLS STOP!'
];

// Pixel Art Heart Icon
const PixelHeartIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 13 12"
    fill="currentColor" 
    className={`w-16 h-16 inline-block ${className || ''}`}
    style={style}
    aria-hidden="true"
  >
    <path d="M2 0H4V1H5V2H6V3H7V2H8V1H9V0H11V1H12V3H11V5H10V6H9V7H7V8H6V9H5V10H4V11H3V10H2V9H1V7H0V5H1V3H2V0Z" />
  </svg>
);

// Pixel Art Flower Icon
const PixelFlowerIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 5 5"
    fill="currentColor"
    className={`w-6 h-6 inline-block ${className || ''}`}
    style={style}
    aria-hidden="true"
  >
    <path d="M1 0H2V1H0V2H1V1H2V2H3V1H4V2H3V0H1ZM0 2H1V3H0V2ZM4 2H5V3H4V2ZM2 1H3V2H2V1ZM2 3H3V5H2V3Z" />
  </svg>
);

// Pixel Art Butterfly Icon
const PixelButterflyIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 5 4" // 5 wide, 4 tall
    fill="currentColor"
    className={`w-5 h-4 inline-block ${className || ''}`}
    style={style}
    aria-hidden="true"
  >
    <path d="M0 0 H1 V1 H0Z M2 0 H3 V1 H2Z M4 0 H5 V1 H4Z M0 1 H5 V2 H0Z M1 2 H2 V3 H1Z M3 2 H4 V3 H3Z M2 3 H3 V4 H2Z" />
  </svg>
);

// Pixel Art Kitty Icon
const PixelKittyIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 9 9" // 9 wide, 9 tall
    fill="currentColor"
    className={`w-9 h-9 inline-block ${className || ''}`}
    style={style}
    aria-hidden="true"
  >
    {/* Head */}
    <path d="M2 0H7V1H8V2H7V3H6V4H3V3H2V2H1V1H2Z"/>
    {/* Body */}
    <path d="M2 4H7V6H6V7H3V6H2V4Z"/>
    {/* Legs */}
    <path d="M2 7H4V8H2Z M5 7H7V8H5Z"/>
    {/* Tail */}
    <path d="M7 2H9V5H8V3H7V2Z"/>
  </svg>
);

const BackgroundDecorations: React.FC = () => (
  <>
    {/* Flowers */}
    <PixelFlowerIcon className="absolute top-[10%] left-[10%] text-pink-500 opacity-50 w-8 h-8 transform rotate-12" />
    <PixelFlowerIcon className="absolute top-[25%] right-[15%] text-purple-500 opacity-40 w-10 h-10 transform -rotate-6" />
    <PixelFlowerIcon className="absolute bottom-[10%] left-[30%] text-fuchsia-300 opacity-55 w-7 h-7" />
    <PixelFlowerIcon className="absolute bottom-[35%] right-[8%] text-rose-400 opacity-30 w-9 h-9 transform rotate-3" />
    <PixelFlowerIcon className="absolute top-[50%] left-[20%] text-pink-300 opacity-45 w-6 h-6 transform -rotate-15" />
    <PixelFlowerIcon className="absolute top-[5%] right-[33%] text-rose-500 opacity-50 w-8 h-8 transform rotate-10" />
    <PixelFlowerIcon className="absolute bottom-[5%] left-[5%] text-purple-300 opacity-40 w-10 h-10" />
    <PixelFlowerIcon className="absolute top-[60%] right-[40%] text-indigo-500 opacity-35 w-7 h-7 transform rotate-12" />
    <PixelFlowerIcon className="absolute top-[80%] left-[45%] text-violet-400 opacity-50 w-9 h-9 transform -rotate-10" />

    {/* Butterflies */}
    <PixelButterflyIcon 
      className="absolute top-[15%] right-[5%] text-pink-400 opacity-60 w-7 h-6" 
      style={{ animation: 'flutter1 8s infinite alternate ease-in-out' }} 
    />
    <PixelButterflyIcon 
      className="absolute top-[65%] left-[12%] text-purple-300 opacity-50 w-6 h-5" 
      style={{ animation: 'flutter2 7s -1s infinite alternate ease-in-out' }} 
    />
    <PixelButterflyIcon 
      className="absolute bottom-[15%] right-[25%] text-fuchsia-400 opacity-55 w-8 h-7" 
      style={{ animation: 'flutter3 9s -0.5s infinite alternate ease-in-out' }}
    />
    <PixelButterflyIcon 
      className="absolute top-[30%] left-[35%] text-violet-500 opacity-40 w-7 h-6"
      style={{ animation: 'flutter1 6s -2s infinite alternate ease-in-out' }}
    />

    {/* Dancing Kitty */}
    <PixelKittyIcon
      className="absolute bottom-[8%] left-[50%] transform -translate-x-1/2 text-gray-300 opacity-80 w-12 h-12"
      style={{ animation: 'kittyDance 3s infinite ease-in-out' }}
    />
  </>
);


const App: React.FC = () => {
  const [yesScale, setYesScale] = useState<number>(1);
  const [noClickCount, setNoClickCount] = useState<number>(0);
  const [isPookieConfirmed, setIsPookieConfirmed] = useState<boolean>(false);
  const [currentNoButtonTextIndex, setCurrentNoButtonTextIndex] = useState<number>(0);

  const noButtonTexts = initialNoButtonTexts;

  const handleNoClick = useCallback(() => {
    setNoClickCount(prevCount => prevCount + 1);
    setYesScale(prevScale => prevScale + 0.4 + noClickCount * 0.15); 
    setCurrentNoButtonTextIndex(prevIndex => (prevIndex + 1) % noButtonTexts.length);
  }, [noClickCount, noButtonTexts.length]);

  const handleYesClick = useCallback(() => {
    setIsPookieConfirmed(true);
  }, []);

  const getYesButtonDynamicStyle = () => {
    return {
      transform: `scale(${yesScale})`,
      transformOrigin: 'center', 
    };
  };

  const pixelButtonBase = "font-bold py-3 px-6 shadow-none border-2 transition-all duration-200 ease-in-out focus:outline-none active:transform active:translate-y-px";
  const yesButtonColors = "bg-pink-500 hover:bg-pink-600 border-pink-700 text-white focus:ring-4 focus:ring-pink-400 focus:ring-opacity-50";
  const noButtonColors = "bg-purple-500 hover:bg-purple-600 border-purple-700 text-white focus:ring-4 focus:ring-purple-400 focus:ring-opacity-50";


  return (
    <div className="relative h-screen overflow-hidden bg-pink-900 flex flex-col items-center justify-center p-4 text-center text-pink-100 selection:bg-purple-400 selection:text-pink-100">
      <BackgroundDecorations />

      {!isPookieConfirmed ? (
        <>
          <main className="relative z-10 bg-pink-200 border-4 border-pink-400 p-6 md:p-8 max-w-lg w-full shadow-lg">
            <div className="relative mb-8">
              <PixelFlowerIcon className="absolute -top-3 -left-3 text-purple-500 transform rotate-[-15deg] w-7 h-7 md:w-8 md:h-8" />
              <h1 className="text-2xl md:text-3xl font-bold text-pink-800 py-2">
                WILL U BE MY POOKIE?
              </h1>
              <PixelFlowerIcon className="absolute -bottom-3 -right-3 text-fuchsia-500 transform rotate-[15deg] w-7 h-7 md:w-8 md:h-8" />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-row justify-center items-center space-x-4 md:space-x-6 mb-8">
                <button
                  onClick={handleYesClick}
                  style={getYesButtonDynamicStyle()}
                  className={`${pixelButtonBase} ${yesButtonColors} text-lg md:text-xl scale-origin-center`}
                  aria-label="Confirm you will be pookie"
                >
                  Yes
                </button>
                <button
                  onClick={handleNoClick}
                  className={`${pixelButtonBase} ${noButtonColors} text-md md:text-lg`}
                  aria-label="Decline to be pookie"
                >
                  {noButtonTexts[currentNoButtonTextIndex]}
                </button>
              </div>
            </div>
          </main>
          <footer className="relative z-10 mt-8 text-xs text-pink-300">
            MADE W/ <PixelFlowerIcon className="w-4 h-4 inline-block text-purple-400 relative -top-px" /> FOR POOKIES
          </footer>
        </>
      ) : (
        <div className="fixed inset-0 bg-pink-600 flex flex-col items-center justify-center z-50 text-white p-4 md:p-8">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-4 animate-pulse scale-origin-center">
            YES!
          </h1>
          <PixelHeartIcon className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto text-white drop-shadow-lg mb-3 md:mb-4" />
          
          <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2">
            U R MY POOKIE!
          </p>
          <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-3 my-2 md:my-4 px-4">
            <PixelHeartIcon 
              className="text-white opacity-90 w-8 h-8 sm:w-10 sm:h-10" 
              style={{animation: 'heartFloat 2s infinite ease-in-out'}} 
            />
            <PixelHeartIcon 
              className="text-pink-300 opacity-80 w-6 h-6 sm:w-8 sm:h-8" 
              style={{animation: 'heartFloat 2.2s -0.5s infinite ease-in-out'}} 
            />
            <PixelHeartIcon 
              className="text-white w-10 h-10 sm:w-12 sm:h-12" 
              style={{animation: 'heartFloat 1.8s -0.2s infinite ease-in-out'}} 
            />
            <PixelHeartIcon 
              className="text-pink-300 opacity-70 w-7 h-7 sm:w-9 sm:h-9" 
              style={{animation: 'heartFloat 2.5s -1s infinite ease-in-out'}} 
            />
             <PixelHeartIcon 
              className="text-white opacity-90 w-8 h-8 sm:w-10 sm:h-10" 
              style={{animation: 'heartFloat 2.1s -0.8s infinite ease-in-out'}} 
            />
          </div>
          <p className="text-lg sm:text-xl md:text-2xl">
            U R THE BEST!
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
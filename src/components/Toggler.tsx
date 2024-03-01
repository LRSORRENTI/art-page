import { useState } from 'react';

const Toggler = () => {
  const [isCross, setIsCross] = useState(false);

  const toggleIcon = () => {
    setIsCross(!isCross);
  };

  return (
    <button id="toggleButton" onClick={toggleIcon}>
      <svg
        id="menuIcon"
        width="45"
        height="65"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={
            isCross
              ? 'M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z'
              : 'M6 13.5C6 13.1193 6.11929 12 7.5 12H37.5C38.8807 12 39 13.1193 39 13.5C39 13.8807 38.8807 15 37.5 15H7.5C6.11929 15 6 13.8807 6 13.5ZM21 22.5C21 22.1193 21.1193 21 22.5 21H37.5C38.8807 21 39 22.1193 39 22.5C39 22.8807 38.8807 24 37.5 24H22.5C21.1193 24 21 22.8807 21 22.5ZM12 31.5C12 31.1193 12.1193 30 13.5 30H37.5C38.8807 30 39 31.1193 39 31.5C39 31.8807 38.8807 33 37.5 33H13.5C12.1193 33 12 31.8807 12 31.5Z'
          }
          fill="lightgrey"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  );
};

export default Toggler;

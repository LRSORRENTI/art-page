type Props = {
    active: boolean;
    onClick: () => void;
  };
  
  export default function Burger({ active, onClick }: Props) {
    return (
      <div
        className={`fixed w-9 h-9 cursor-pointer top-4 left-5 z-20 bg-white bg-opacity-70 ${active ? 'active' : ''}`}
        onClick={onClick}
      >
        <div className={`meat meat-1 ${active ? 'rotate-45' : ''}`} />
        <div className={`meat meat-2 ${active ? 'opacity-0' : ''}`} />
        <div className={`meat meat-3 ${active ? '-rotate-45' : ''}`} />
        <style jsx>
          {`
            .meat {
              margin-top: 100px;
              position: absolute;
              width: 5rem;
              height: 0.5rem;
              background: #222;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              transition: all 150ms ease-in;
            }
            .meat:hover{
                cursor:pointer;
            }

            .meat-1 {
              transform: ${active ? 'rotate(45deg)' : 'translateY(-2.5rem)'} translate(-50%, -50%);
            }
            .meat-2 {
              
              width: ${active ? '0' : '4.5rem'};
            }
            .meat-3 {
              transform: ${active ? 'rotate(-45deg)' : 'translateY(2.5rem)'} translate(-50%, -50%);
            }

            @media (min-width: 769px) {
              .container {
                display: none;
              }
            }
          `}
        </style>
      </div>
    );
  }
  
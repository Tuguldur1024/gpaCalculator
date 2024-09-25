import { useEffect, useState } from "react";

export default function Home() {
  const [hearts, setHearts] = useState([]);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Generate an array of hearts with random properties
    const generatedHearts = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position (percentage)
      size: Math.random() * 2 + 1, // Random size for hearts
      delay: Math.random() * 5, // Random delay to stagger falling
    }));
    setHearts(generatedHearts);

    // Show "I love you" text after 3 seconds
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 3000);

    return () => {
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div className="container">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}rem`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          ❤️
        </span>
      ))}

      {showText && <h1 className="fancyText font-semibold">I Love You ❤️</h1>}

      {/* Styled JSX for scoped CSS */}
      <style jsx>{`
        .container {
          position: relative;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #fe496c 0%, #fda085 100%);
          flex-direction: column;
        }

        .heart {
          position: absolute;
          top: -10%; /* Start hearts slightly off-screen */
          opacity: 0;
          animation: fall linear infinite;
        }

        @keyframes fall {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(
              110vh
            ); /* Fall to slightly off-screen bottom */
            opacity: 0;
          }
        }

        .heart {
          animation-duration: 5s;
        }

        .fancyText {
          font-size: 4rem;
          color: white;
          font-family: "Cursive";
          animation: fadeIn 2s ease-in-out;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

import { useRef, useState } from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-5-cols">
        {counterItems.map((item, index) => (
          <HoverCounterCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const HoverCounterCard = ({ item }) => {
  const numberRef = useRef(null);
  const [offsetX, setOffsetX] = useState(0);

  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const distanceX = e.clientX - centerX;

    const maxDistance = 20;
    const clampedX = Math.max(-maxDistance, Math.min(maxDistance, distanceX / 5));

    setOffsetX(clampedX);
  };

  const handleMouseLeave = () => {
    setOffsetX(0);
  };

  return (
    <div
      className="bg-black-100 rounded-lg p-4 flex flex-col justify-center hoverCard"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={numberRef}
        className="counter-number text-white text-5xl font-bold mb-2"
      >
        <CountUp suffix={item.suffix} end={item.value} />
      </div>
      <div className="text-white-50 text-lg">{item.label}</div>
    </div>
  );
};

export default AnimatedCounter;

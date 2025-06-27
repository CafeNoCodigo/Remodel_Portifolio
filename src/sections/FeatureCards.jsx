import { useInViewOnce } from '../hooks/useInViewOnce';
import TypewriterText from '../components/FeatureCardModel/TypewriterText.jsx';
import { abilities } from '../constants/index.js';
import { motion } from 'framer-motion';

const FeatureCards = () => {
  return (
    <div className="w-full padding-x-lg flex">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }) => {
          const [ref, isVisible] = useInViewOnce();

          return (
            <motion.div
              ref={ref}
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="card-border rounded-xl p-8 flex flex-col gap-4"
            >
              <div className="size-14 flex items-center justify-center rounded-full">
                <img src={imgPath} alt={title} />
              </div>
              <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
              <TypewriterText text={desc} trigger={isVisible} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureCards;

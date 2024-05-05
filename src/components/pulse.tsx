import { motion } from "framer-motion";
interface PulseProps {
  className: string;
  isHovered: boolean;
  dur: string;
}
const Pulse: React.FC<PulseProps> = ({ className, isHovered, dur }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isHovered ? 0 : 1 }}
      transition={{
        duration: 0.1,
        type: "easeOut",
      }}
      className={className}
    >
      <svg className="fill-blue-500/50 w-full h-full" viewBox="0 0 24 24">
        <circle cx={12} cy={12} r={0}>
          <animate
            attributeName="r"
            calcMode="spline"
            dur={dur}
            keySplines=".52,.6,.25,.99"
            repeatCount="indefinite"
            values="0;11"
          ></animate>
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur={dur}
            keySplines=".52,.6,.25,.99"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </svg>
    </motion.div>
  );
};
export default Pulse;

import PropTypes from "prop-types";
import { cn } from "../../utils/helper";

const Card = ({ className, ...props }) => (
  <div
    className={cn(
      "rounded-2xl border border-stone-800/80 bg-stone-950/60 backdrop-blur-md text-stone-200 shadow-xl shadow-black/40 transition-all hover:border-stone-700/80 hover:bg-stone-900/40",
      className,
    )}
    {...props}
  />
);

Card.propTypes = {
  className: PropTypes.string,
};

const CardHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
);

CardHeader.propTypes = {
  className: PropTypes.string,
};

const CardTitle = ({ className, ...props }) => (
  <h3
    className={cn(
      "text-xl font-semibold leading-none tracking-tight text-stone-100",
      className,
    )}
    {...props}
  />
);

CardTitle.propTypes = {
  className: PropTypes.string,
};

const CardDescription = ({ className, ...props }) => (
  <p
    className={cn("text-sm text-stone-400 leading-relaxed", className)}
    {...props}
  />
);

CardDescription.propTypes = {
  className: PropTypes.string,
};

const CardContent = ({ className, ...props }) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
);

CardContent.propTypes = {
  className: PropTypes.string,
};

const CardFooter = ({ className, ...props }) => (
  <div className={cn("flex items-center p-6 pt-0", className)} {...props} />
);

CardFooter.propTypes = {
  className: PropTypes.string,
};

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};

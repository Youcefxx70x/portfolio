import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import PropTypes from "prop-types";
import { cn } from "../../utils/helper";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = ({ className, sideOffset = 4, ...props }) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      sideOffset={sideOffset}
      className={cn(
        "z-50 overflow-hidden rounded-md border border-stone-800 bg-stone-900 px-3 py-1.5 text-xs text-stone-200 shadow-lg shadow-black/50 transition-opacity",
        className,
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
);

TooltipContent.propTypes = {
  className: PropTypes.string,
  sideOffset: PropTypes.number,
};

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };

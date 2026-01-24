import { useState } from "react";

export type HoverSwapProps = {
    defaultText: string;
    hoverText: string;
    className?: string;
};

export function HoverSwap({
    defaultText,
    hoverText,
    className = "",
}: HoverSwapProps): JSX.Element {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={className}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
            tabIndex={0}
            role=""
            aria-pressed={isHovered}
        >
            {isHovered ? hoverText : defaultText}
        </div>
    );
}

export default HoverSwap;
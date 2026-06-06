import { Link } from "react-router-dom";

export default function Button({
    children,
    bgColor = "bg-purple-900",
    hoverColor = "hover:bg-yellow-400",
    padding = "px-6 py-3",
}) {

    return (
        <Link
            to="/donate"
            className={`
                ${bgColor}
                ${hoverColor}
                text-white
                ${padding}
                rounded-full
                text-[17px]
                font-bold
                tracking-widest
                transition-colors
                duration-300
            `}
        >
            {children}
        </Link>
    );
}
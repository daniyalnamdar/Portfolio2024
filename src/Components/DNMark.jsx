/* eslint-disable react/prop-types -- reusable brand primitive */
import darkThemeLogo from "../assets/dn-logo-dark.png";
import lightThemeLogo from "../assets/dn-logo-light.png";

export default function DNMark({ className = "", title = "Daniyal Namdar" }) {
  return (
    <span className={`dn-mark inline-grid ${className}`} role="img" aria-label={title}>
      <img
        src={darkThemeLogo}
        className="dn-mark__dark col-start-1 row-start-1 h-auto w-full"
        alt=""
        aria-hidden="true"
      />
      <img
        src={lightThemeLogo}
        className="dn-mark__light col-start-1 row-start-1 h-auto w-full"
        alt=""
        aria-hidden="true"
      />
    </span>
  );
}

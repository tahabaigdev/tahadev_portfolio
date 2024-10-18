import { NavLink, useLocation } from "react-router-dom";
import TahaImg from "../../assets/images/me2.jpeg";
import Logo from "../../assets/images/logo.png";
import { navItems, navSocialItems } from "../../constants";
import { useRef, useCallback, useState } from "react";
import gsap from "gsap";

const Header = () => {
  const hamburgerMenuRef = useRef(null); // Ref for the hamburger menu container
  const hamburgerMenuItemsRef = useRef([]); // Ref for the menu items
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const hamburgerSocialItemsRef = useRef([]);

  const toggleHamburger = () => {
    setIsActive((prev) => !prev);
    if (!isActive) {
      // Animate the hamburger items
      gsap.fromTo(
        hamburgerMenuItemsRef.current.concat(hamburgerSocialItemsRef.current),
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.3,
          ease: "power1.out",
        },
      );
      // Disable scrolling
      document.body.style.overflowY = "hidden";
    } else {
      // Enable scrolling again when the menu is closed
      document.body.style.overflowY = "auto";
    }
  };

  const handleNavClick = useCallback(
    (e, link) => {
      if (location.pathname === link) {
        e.preventDefault();
      }
      setIsActive(false); // Close the hamburger menu
      document.body.style.overflowY = "auto"; // Re-enable vertical scrolling
    },
    [location.pathname],
  );

  const renderNavItems = () =>
    navItems.map((item) => (
      <li key={item.id}>
        <NavLink
          to={item.link}
          className="nav-item select-none text-[1.5rem] font-medium leading-[3rem] tracking-[-0.15px] transition-all duration-[0.3s] hover:text-[#c7c7c7]"
          onClick={(e) => handleNavClick(e, item.link)}
        >
          {item.text}
        </NavLink>
      </li>
    ));

  return (
    <header className="relative z-[998]">
      <div className="container-style flex h-[6.4rem] items-center justify-between">
        <div>
          <NavLink
            to="/"
            className="inline-flex items-center gap-[.3rem]"
            onClick={(e) => handleNavClick(e, "/")}
            aria-label="Navigate to homepage"
          >
            <img
              src={Logo}
              alt="Taha Baig logo"
              className="logo max-w-[4rem] rounded-[1.2rem]"
            />
            <span className="font-Righteous text-[1.8rem] leading-[2.4rem]">
              Taha Baig
            </span>
          </NavLink>
        </div>

        <nav>
          <ul className="hidden items-center gap-[2rem] lg:flex">
            {renderNavItems()}
          </ul>

          {/* Hamburger Menu */}
          <button
            onClick={toggleHamburger}
            className={`${isActive && "active"} hamburger-btn h-[4.4rem] w-[4.4rem] lg:hidden`}
          >
            <div className="bar h-[.2rem] w-[2rem] rounded-[1rem] bg-Dark_Gray will-change-transform"></div>
            <div className="bar h-[.2rem] w-[2rem] rounded-[1rem] bg-Dark_Gray will-change-transform"></div>
          </button>

          <div
            ref={hamburgerMenuRef} // Ref for the menu container
            className={`${isActive ? "pointer-events-auto visible opacity-[1]" : "pointer-events-none invisible opacity-[0]"} absolute left-[0] top-[100%] z-[999] w-[100%] bg-Charcoal_Black px-[2rem] pb-[11rem] pt-[2rem] transition-all duration-[0.2s] ease-in lg:hidden`}
          >
            <ul className="flex flex-col">
              {navItems.map((item, index) => (
                <li
                  key={item.id}
                  ref={(el) => (hamburgerMenuItemsRef.current[index] = el)} // Assign each item to the ref array
                >
                  <NavLink
                    to={item.link}
                    className="nav-item select-none text-[4rem] font-semibold leading-[5.2rem] tracking-[-0.15px] transition-all duration-[0.3s] hover:text-[#c7c7c7]"
                    onClick={(e) => handleNavClick(e, item.link)} // Close menu on click
                  >
                    {item.text}
                  </NavLink>
                </li>
              ))}
            </ul>

            <hr className="my-[3rem] h-[1rem] w-[100%] text-[rgb(34_34_34)]" />

            <ul className="flex flex-col">
              {navSocialItems.map((item, index) => (
                <li
                  key={item.id}
                  ref={(el) => (hamburgerSocialItemsRef.current[index] = el)} // Assign each social item to the ref array
                >
                  <a
                    href={item.link}
                    className="text-[1.5rem] font-medium leading-[3rem] tracking-[-0.15px]"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

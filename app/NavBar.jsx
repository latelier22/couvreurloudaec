"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter(); // Get the router object
  const pathName = usePathname();

  useEffect(() => {
    const init = async () => {
      const { Collapse, initTE } = await import("tw-elements");
      initTE({ Collapse });
    };
    init();
  }, []);

  // Définir les menus et les routes
  const menuItems = [
    { label: "Accueil", route: "/" },
    { label: "Activités", route: "/activites" },
    { label: "Anniversaires", route: "/anniversaires" },
    { label: "Boutique", route: "/boutique" },
    { label: "Réservez", route: "/reservations" },
    { label: "Tarifs", route: "/tarifs" },
    { label: "Horaires", route: "/horaires" },
    { label: "Contact", route: "/contact" },
  ];

  return (
    <nav
      className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-start px-3">
        <a href="/" className="ml-2">
          <img src="images/logo.png" className="h-28 w-28 mb-3 animate-rotateAccelerate" alt="Accueil" />
        </a>
        <div className="flex items-center">
          <button
            className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContentY"
            aria-controls="navbarSupportedContentY"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-20 w-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
          </button>
        </div>

        <div
          className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto mx-auto"
          id="navbarSupportedContentY"
          data-te-collapse-item
        >
          <ul
            className="mx-auto flex flex-col lg:flex-row"
            data-te-navbar-nav-ref
          >
            {menuItems.map((menuItem, index) => (
              <li
                key={index}
                className={`${index > 0 ? "mb-2 " : ""}lg:mb-0 lg:pr-2`}
                data-te-nav-item-ref
              >
                <Link
                  href={menuItem.route}
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className={`block font-medium text-2xl first-line:transition duration-150 ease-in-out hover:text-4xl hover:text-red-300/75 hover:border-b-2 hover:border-red-300 focus:text-red-300 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 ${
                    pathName === menuItem.route ? 'text-red-700 border-b-2 border-red-700' : ''
                  }`}
                  
                >
                  {menuItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

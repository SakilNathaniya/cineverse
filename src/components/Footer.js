import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-zinc-800">
      <span className="text-sm text-zinc-500 sm:text-center dark:text-zinc-400">
        © 2030{" "}
        <Link to="/" className="hover:underline">
          Cine-verse
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-zinc-500 dark:text-zinc-400 sm:mt-0">
        <li>
          <Link
            to="#"
            target="_blank"
            className="mr-4 hover:underline md:mr-6 "
          >
            Instagram
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/sakil-nathaniya-812811204/"
            target="_blank"
            className="mr-4 hover:underline md:mr-6"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link to="#" target="_blank" className="mr-4 hover:underline md:mr-6">
            Youtube
          </Link>
        </li>
        <li>
          <Link
            to="https://github.com/SakilNathnaiya"
            target="_blank"
            className="hover:underline"
          >
            Github
          </Link>
        </li>
      </ul>
    </footer>
  );
};

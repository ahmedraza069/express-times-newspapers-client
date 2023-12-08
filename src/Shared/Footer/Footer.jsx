import { Link } from "react-router-dom";


const Footer = () => {
    return (
		<div className="py-8">
        <footer className="footer items-center p-4 bg-gray-400">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <div>
        <img className="w-40" src="https://i.ibb.co/y8ZQXVB/express-time-logo-design-961981-63-removebg-preview.png" alt="logo" />
      </div>
<p className="text-sm  sm:ml-4 sm:pl-4 sm:border-l-2  text-white sm:py-2 sm:mt-0 mt-4">© 2023 Local Tours and Guide —
  <a href="https://twitter.com/knyttneve" className="text-white ml-1" rel="noopener noreferrer" target="_blank">&copy; Md. Rakibul Hasan Raza</a>
</p>
<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ">
<div className="flex mt-3 -mx-2 sm:mt-0">
            <Link to={'/'} class="mx-2 text-sm font-bold text-white transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Home </Link>

            <Link to={'/'} class="mx-2 text-sm font-bold text-white transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </Link>

            <Link to={'/'} class="mx-2 text-sm font-bold text-white transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Cookies </Link>
        </div>
</span>
</div>
</footer>
    </div>
    );
};

export default Footer;
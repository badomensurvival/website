type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="bg-white shadow dark:bg-cool-gray-800 z-40 w-full sticky top-0">
      <div className="px-4 mx-auto max-w-11xl md:px-6 lg:px-8">
        <div className="flex justify-between font-semibold h-14">
          <div className="left-menu-items flex space-x-4">
            {/*<div className="hidden md:flex items-center">*/}
            {/*  <div className="items-center justify-center hidden space-x-8 md:ml-8 md:flex">*/}
            {/*    <button>*/}
            {/*      <svg*/}
            {/*        fill="currentColor"*/}
            {/*        viewBox="0 0 20 20"*/}
            {/*        xmlns="http://www.w3.org/2000/svg"*/}
            {/*        className="w-6 h-6 text-gray-400 focus:outline-none"*/}
            {/*      >*/}
            {/*        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>*/}
            {/*      </svg>*/}
            {/*    </button>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="hidden md:flex">*/}
            {/*  <a*/}
            {/*    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm leading-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"*/}
            {/*    href="https://minetrax.xinecraft.com/stats"*/}
            {/*  >*/}
            {/*    Statistics*/}
            {/*  </a>*/}
            {/*</div>*/}

            {/*<div className="hidden md:flex">*/}
            {/*  <a*/}
            {/*    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm leading-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"*/}
            {/*    href="https://minetrax.xinecraft.com/poll"*/}
            {/*  >*/}
            {/*    Polls*/}
            {/*  </a>*/}
            {/*</div>*/}

            {/*<div className="hidden md:flex">*/}
            {/*  <a*/}
            {/*    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm leading-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"*/}
            {/*    href="https://minetrax.xinecraft.com/news"*/}
            {/*  >*/}
            {/*    News*/}
            {/*  </a>*/}
            {/*</div>*/}
          </div>
          <div className="middle-menu-items flex space-x-4">
            <div className="flex items-center flex-shrink-0">
              <a href="https://minetrax.xinecraft.com/">
                <img
                  src="/img/badomen_horizontal.png"
                  alt="Site Header Logo"
                  className="logo block w-auto h-9"
                />
              </a>
            </div>
          </div>
          <div className="right-menu-items flex space-x-4">
            {/*<div className="hidden md:flex items-center">*/}
            {/*  <div className="relative mx-auto text-gray-600 dark:text-gray-400">*/}
            {/*    <form>*/}
            {/*      <input*/}
            {/*        aria-label="search"*/}
            {/*        className="border-none bg-gray-200 dark:bg-cool-gray-900 h-10 px-5 pr-10 focus:w-80 rounded-full text-sm focus:outline-none focus:ring-0"*/}
            {/*        type="search"*/}
            {/*        name="search"*/}
            {/*        placeholder="Search.."*/}
            {/*        autoComplete="off"*/}
            {/*        spellCheck="false"*/}
            {/*        data-ms-editor="true"*/}
            {/*      />*/}
            {/*      <button*/}
            {/*        type="submit"*/}
            {/*        className="absolute right-0 top-0 mt-3 mr-4"*/}
            {/*      >*/}
            {/*        <svg*/}
            {/*          id="Capa_1"*/}
            {/*          className="text-gray-400 dark:text-gray-600 h-4 w-4 fill-current"*/}
            {/*          xmlns="http://www.w3.org/2000/svg"*/}
            {/*          version="1.1"*/}
            {/*          x="0px"*/}
            {/*          y="0px"*/}
            {/*          viewBox="0 0 56.966 56.966"*/}
            {/*        >*/}
            {/*          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>*/}
            {/*        </svg>*/}
            {/*      </button>*/}
            {/*    </form>*/}
            {/*  </div>*/}
            {/*</div>*/}

            {/*<div className="hidden md:flex">*/}
            {/*  <a*/}
            {/*    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm leading-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"*/}
            {/*    href="https://minetrax.xinecraft.com/login"*/}
            {/*  >*/}
            {/*    Login*/}
            {/*  </a>*/}
            {/*</div>*/}

            {/*<div className="hidden md:flex">*/}
            {/*  <a*/}
            {/*    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm leading-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"*/}
            {/*    href="https://minetrax.xinecraft.com/register"*/}
            {/*  >*/}
            {/*    Register*/}
            {/*  </a>*/}
            {/*</div>*/}
          </div>
          <div className="flex items-center -mr-2 md:hidden">
            <div className="flex items-center justify-center space-x-8 md:ml-8 md:hidden">
              <button>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-400 focus:outline-none"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              </button>
            </div>
            <button className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-cool-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-cool-gray-900 focus:text-gray-500 dark:focus:text-gray-200">
              <svg
                className="w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className="inline-flex"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
                <path
                  className="hidden"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:hidden">
        <div className="pt-2 pb-3 space-y-1">
          <div>
            <a
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-cool-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-cool-gray-900 focus:border-gray-300 transition duration-150 ease-in-out"
              href="https://minetrax.xinecraft.com/stats"
            >
              Statistics
            </a>
          </div>

          <div>
            <a
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-cool-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-cool-gray-900 focus:border-gray-300 transition duration-150 ease-in-out"
              href="https://minetrax.xinecraft.com/poll"
            >
              Polls
            </a>
          </div>

          <div>
            <a
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-cool-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-cool-gray-900 focus:border-gray-300 transition duration-150 ease-in-out"
              href="https://minetrax.xinecraft.com/news"
            >
              News
            </a>
          </div>

          <div>
            <a
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-cool-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-cool-gray-900 focus:border-gray-300 transition duration-150 ease-in-out"
              href="https://minetrax.xinecraft.com/staff-members"
            >
              Staff Members
            </a>
          </div>

          <div>
            <a
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-cool-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-cool-gray-900 focus:border-gray-300 transition duration-150 ease-in-out"
              href="https://minetrax.xinecraft.com/pages/rules"
            >
              Rules
            </a>
          </div>

          <div>
            <a
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-cool-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-cool-gray-900 focus:border-gray-300 transition duration-150 ease-in-out"
              href="https://minetrax.xinecraft.com/features"
            >
              Features
            </a>
          </div>

          <div>
            <a
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-cool-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-cool-gray-900 focus:border-gray-300 transition duration-150 ease-in-out"
              href="https://minetrax.xinecraft.com/login"
            >
              Login
            </a>
          </div>

          <div>
            <a
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-cool-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-cool-gray-900 focus:border-gray-300 transition duration-150 ease-in-out"
              href="https://minetrax.xinecraft.com/register"
            >
              Register
            </a>
          </div>
        </div>

        {/*<div className="flex pb-2 just-center">*/}
        {/*  <div*/}
        {/*      className="relative mx-auto text-gray-600 dark:text-gray-400 inline-block md:hidden"*/}
        {/*  >*/}
        {/*    <form>*/}
        {/*      <input*/}
        {/*          aria-label="search"*/}
        {/*          className="border-none bg-gray-200 dark:bg-cool-gray-900 h-10 px-5 pr-10 focus:w-80 rounded-full text-sm focus:outline-none focus:ring-0"*/}
        {/*          type="search"*/}
        {/*          name="search"*/}
        {/*          placeholder="Search.."*/}
        {/*          autoComplete="off"*/}
        {/*          spellCheck="false"*/}
        {/*          data-ms-editor="true"*/}
        {/*      />*/}
        {/*      <button*/}
        {/*          type="submit"*/}
        {/*          className="absolute right-0 top-0 mt-3 mr-4"*/}
        {/*      >*/}
        {/*        <svg*/}
        {/*            id="Capa_1"*/}
        {/*            className="text-gray-400 dark:text-gray-600 h-4 w-4 fill-current"*/}
        {/*            xmlns="http://www.w3.org/2000/svg"*/}
        {/*            version="1.1"*/}
        {/*            x="0px"*/}
        {/*            y="0px"*/}
        {/*            viewBox="0 0 56.966 56.966"*/}
        {/*        >*/}
        {/*          <path*/}
        {/*              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"*/}
        {/*          ></path>*/}
        {/*        </svg>*/}
        {/*      </button>*/}
        {/*    </form>*/}

        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </nav>
  );
}

import prisma from '@/lib/prisma';

export default async function Page() {
  const allPlayers = await prisma.luckperms_players.findMany();

  console.log(allPlayers);

  return (
    <>
      <div className="order-1 col-span-1 space-y-4 md:order-none">
        <div>
          <div className="p-3 sm:px-5 bg-white dark:bg-gray-800 rounded shadow">
            <h3 className="font-extrabold text-gray-800 dark:text-gray-200">
              Online Players
              <span className="float-right text-green-500 font-semibold">
                0 / 20
              </span>
            </h3>

            <div className="mt-3 text-gray-500 flex flex-wrap justify-center"></div>
            <div className="italic p-1 rounded text-center text-gray-400">
              No players online.
            </div>
          </div>
        </div>
        <div>
          <div className="p-3 bg-white dark:bg-cool-gray-800 rounded shadow space-y-2">
            <h3 className="font-extrabold text-gray-800 dark:text-gray-200">
              Vote for Server
            </h3>
            <p className="rounded text-sm text-gray-600 dark:text-gray-400 text-center p-1">
              Vote on these sites and win rewards!
            </p>
            <div className="flex flex-col space-y-2">
              <div className="rounded flex justify-between items-center p-2 bg-gray-100 dark:bg-cool-gray-900">
                <div
                  content="https://minetrax.github.io"
                  className="text-gray-500 dark:text-gray-300 text-sm font-bold focus:outline-none"
                >
                  PlanetMinecraft
                </div>
                <div>
                  <a
                    target="_blank"
                    className="rounded tracking-wider text-sm px-2 py-1 text-gray-500 dark:text-gray-300 bg-white dark:bg-cool-gray-800 shadow hover:shadow-md"
                    href="https://minetrax.github.io"
                  >
                    Vote
                  </a>
                </div>
              </div>
              <div className="rounded flex justify-between items-center p-2 bg-gray-100 dark:bg-cool-gray-900">
                <div
                  content="https://minetrax.github.io"
                  className="text-gray-500 dark:text-gray-300 text-sm font-bold focus:outline-none"
                >
                  Minecraft-MP.com
                </div>
                <div>
                  <a
                    target="_blank"
                    className="rounded tracking-wider text-sm px-2 py-1 text-gray-500 dark:text-gray-300 bg-white dark:bg-cool-gray-800 shadow hover:shadow-md"
                    href="https://minetrax.github.io"
                  >
                    Vote
                  </a>
                </div>
              </div>
              <div className="rounded flex justify-between items-center p-2 bg-gray-100 dark:bg-cool-gray-900">
                <div
                  content="https://minetrax.github.io"
                  className="text-gray-500 dark:text-gray-300 text-sm font-bold focus:outline-none"
                >
                  MinecraftServers.org
                </div>
                <div>
                  <a
                    target="_blank"
                    className="rounded tracking-wider text-sm px-2 py-1 text-gray-500 dark:text-gray-300 bg-white dark:bg-cool-gray-800 shadow hover:shadow-md"
                    href="https://minetrax.github.io"
                  >
                    Vote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="p-3 sm:px-5 bg-white dark:bg-cool-gray-800 rounded shadow">
            <h3 className="font-extrabold text-gray-800 dark:text-gray-200">
              Latest Poll
            </h3>

            <div className="mt-3 text-gray-500 dark:text-gray-300">
              <div className="vue-poll" id="1">
                <h3 className="qst dark:text-gray-300">
                  Do you like MineTrax?
                </h3>
                <div className="ans-cnt">
                  <div className="ans">
                    <div className="hover:bg-light-blue-100 dark:hover:bg-cool-gray-900 ans-no-vote noselect">
                      <span className="txt">Yes</span>
                    </div>
                    <span
                      className="bg bg-cool-gray-200 dark:bg-cool-gray-700"
                      // style="width: 0%"
                    ></span>
                  </div>
                  <div className="ans">
                    <div className="hover:bg-light-blue-100 dark:hover:bg-cool-gray-900 ans-no-vote noselect">
                      <span className="txt">No</span>
                    </div>
                    <span
                      className="bg bg-cool-gray-200 dark:bg-cool-gray-700"
                      // style="width: 0%"
                    ></span>
                  </div>
                </div>

                <div className="flex justify-between items-baseline"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="p-3 sm:px-5 bg-white dark:bg-cool-gray-800 rounded shadow">
            <h3 className="font-extrabold text-gray-800 dark:text-gray-200">
              Did You Know?
            </h3>

            <div className="flex space-x-2 mt-4">
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                Creepers are afraid of ocelots
              </div>
            </div>
          </div>
        </div>
        <iframe
          src="https://discord.com/widget?id=951998050358951966&amp;theme=dark"
          width="100%"
          height="500"
          // allowTransparency="true"
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
        <div>
          <div className="p-3 sm:px-5 bg-white dark:bg-cool-gray-800 rounded shadow">
            <h3 className="font-extrabold text-gray-800 dark:text-gray-200">
              Donate
            </h3>
            <p className="rounded text-sm text-gray-600 dark:text-gray-300 text-center p-1">
              Help us run our servers!
            </p>
            <div className="mt-3 text-light-blue-400 flex justify-center">
              <a
                target="_blank"
                className="hover:bg-light-blue-50 dark:hover:bg-cool-gray-900 border px-2 py-1 border-light-blue-400 font-semibold rounded"
                href="https://github.com/minetrax"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="order-3 col-span-1 space-y-4 md:col-span-2 md:order-none">
        <div>
          <div className="bg-white dark:bg-cool-gray-800 rounded px-4 py-3 shadow">
            <div className="prose dark:prose-dark max-w-none text-center">
              <h2>Hello there 👋</h2>
              <p>
                <strong>Welcome to MineTrax Suite Demo Server.</strong>
              </p>
              <p>
                <strong>Check out suite:</strong>
                <a href="https://minetrax.github.io">
                  https://minetrax.github.io
                </a>
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="p-3 bg-white dark:bg-cool-gray-800 rounded shadow space-y-2">
            <h3 className="font-extrabold text-gray-800 dark:text-gray-200">
              Top 10 Players
            </h3>
            <div className="flex flex-col space-y-2">
              <table className="">
                <thead className="bg-gray-100 dark:bg-cool-gray-900 dark:bg-opacity-50 text-gray-700 dark:text-gray-300">
                  <tr>
                    <th
                      scope="col"
                      className="p-1 text-left text-xs font-bold text-center uppercase tracking-wider"
                    >
                      #
                    </th>
                    {/*<th*/}
                    {/*    scope="col"*/}
                    {/*    className="p-1 text-left text-xs font-bold uppercase tracking-wider"*/}
                    {/*>*/}
                    {/*    Flag*/}
                    {/*</th>*/}
                    <th
                      scope="col"
                      className="p-1 text-left text-xs font-bold uppercase tracking-wider"
                    >
                      Rank
                    </th>
                    <th
                      scope="col"
                      className="p-1 text-left text-xs font-bold uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="p-1 text-left text-xs font-bold uppercase tracking-wider hidden sm:table-cell"
                    >
                      Rating
                    </th>
                    <th
                      scope="col"
                      className="p-1 text-left text-xs font-bold uppercase tracking-wider hidden sm:table-cell"
                    >
                      Last Seen
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-cool-gray-800">
                  {allPlayers.map((player, index) => (
                    <tr className="" key={index}>
                      <td className="p-1 text-sm text-light-blue-400 font-extrabold">
                        <span className="border-2 rounded text-sm px-1 border-light-blue-300 bg-light-blue-50 dark:bg-cool-gray-800">
                          {index + 1}
                        </span>
                      </td>
                      <td className="p-1">
                        <div className="flex items-center">
                          <div
                            className="flex-shrink-0 h-6 w-6 focus:outline-none"
                            content="Czechia"
                          >
                            <img
                              className="h-6 w-6"
                              src="https://minetrax.xinecraft.com/images/flags/flags-iso/shiny/48/CZ.png"
                              alt="Czechia"
                            />
                          </div>
                        </div>
                      </td>

                      <td className="p-1">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-6 w-6">
                            <img
                              className="h-6 w-6"
                              src={`https://cravatar.eu/avatar/${player.username}.png`}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div
                              className="text-sm text-gray-900 focus:outline-none cursor-pointer hover:underline"
                              content="9e763427-3530-4656-a5e0-01bb6c829464"
                            >
                              <span className="text-gray-700 dark:text-gray-300 font-bold text-sm truncate">
                                {player.username}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-1 text-sm text-gray-700 hidden sm:table-cell">
                        <span>
                          {/*<svg*/}
                          {/*  viewBox="0 0 24 24"*/}
                          {/*  fill="none"*/}
                          {/*  className="w-6 h-6 focus:outline-none"*/}
                          {/*>*/}
                          {/*  <circle*/}
                          {/*    cx="12"*/}
                          {/*    cy="12"*/}
                          {/*    r="12"*/}
                          {/*    fill="#1F1F22"*/}
                          {/*  ></circle>*/}
                          {/*  <path*/}
                          {/*    fillRule="evenodd"*/}
                          {/*    clipRule="evenodd"*/}
                          {/*    d="M16.686 17.467a7.2 7.2 0 10-9.371 0l-1.563 1.822A9.58 9.58 0 012.4 12 9.6 9.6 0 0112 2.4a9.6 9.6 0 019.6 9.6 9.58 9.58 0 01-3.352 7.29l-1.562-1.823z"*/}
                          {/*    fill="#CDCDCD"*/}
                          {/*    fillOpacity=".1"*/}
                          {/*  ></path>*/}
                          {/*  <path*/}
                          {/*    fillRule="evenodd"*/}
                          {/*    clipRule="evenodd"*/}
                          {/*    d="M16.686 17.467a7.2 7.2 0 10-9.371 0l-1.563 1.822A9.58 9.58 0 012.4 12 9.6 9.6 0 0112 2.4a9.6 9.6 0 019.6 9.6 9.58 9.58 0 01-3.352 7.29l-1.562-1.823z"*/}
                          {/*    fill="#FE1F00"*/}
                          {/*  ></path>*/}
                          {/*  <path*/}
                          {/*    d="M9.233 10.233l-1.487.824v-1.034l1.722-1.075h.991V14.4H9.233v-4.167zm4.595 4.251c-.246 0-.448-.009-.604-.025a3.295 3.295 0 01-.513-.101 1.237 1.237 0 01-.462-.235 1.202 1.202 0 01-.294-.454 1.7 1.7 0 01-.126-.689v-2.612c0-.258.04-.485.118-.68a1.23 1.23 0 01.302-.463c.107-.095.252-.17.437-.226a2.45 2.45 0 01.554-.118c.213-.011.41-.017.588-.017.252 0 .454.009.605.025a2.4 2.4 0 01.504.101c.202.062.361.143.479.244.118.1.218.246.302.437.084.19.126.422.126.697v2.612c0 .258-.042.485-.126.68a1.15 1.15 0 01-.302.454 1.32 1.32 0 01-.462.235c-.19.062-.372.098-.546.11a5.58 5.58 0 01-.58.025zm.017-.79c.235 0 .403-.014.504-.042a.306.306 0 00.202-.176c.033-.084.05-.221.05-.412v-2.78c0-.19-.017-.328-.05-.412a.282.282 0 00-.202-.168c-.1-.033-.269-.05-.504-.05-.24 0-.414.017-.52.05a.282.282 0 00-.202.168c-.034.084-.05.221-.05.412v2.78c0 .19.016.328.05.412.033.084.1.143.201.176.107.028.28.042.521.042z"*/}
                          {/*    fill="#FE1F00"*/}
                          {/*  ></path>*/}
                          {/*</svg>*/}
                        </span>
                      </td>
                      <td className="p-1 text-xs text-gray-700 dark:text-gray-300 hidden sm:table-cell">
                        <span
                          className="focus:outline-none"
                          content="Fri, 22nd Jul 2022, 3:37 pm"
                        >
                          10 months ago
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white dark:bg-cool-gray-800 rounded shadow flex justify-between">
            <div className="p-3 sm:px-5">
              <div className="text-xl">
                <p className="mb-1">
                  {/*<svg*/}
                  {/*  className="w-5 h-5 inline text-gray-400 focus:outline-none"*/}
                  {/*  fill="none"*/}
                  {/*  stroke="currentColor"*/}
                  {/*  viewBox="0 0 24 24"*/}
                  {/*  xmlns="http://www.w3.org/2000/svg"*/}
                  {/*>*/}
                  {/*  <path*/}
                  {/*    strokeLinecap="round"*/}
                  {/*    strokeLinejoin="round"*/}
                  {/*    strokeWidth="2"*/}
                  {/*    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"*/}
                  {/*  ></path>*/}
                  {/*</svg>*/}
                  <span className="font-semibold uppercase text-sm tracking-wider text-orange-500">
                    &nbsp;Announcement&nbsp;
                  </span>
                  <span
                    content="Sat, 4th Jun 2022, 3:04 pm"
                    className="focus:outline-none text-sm text-gray-500 dark:text-gray-400 font-light leading-snug"
                  >
                    11 months ago
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
                    - 1 minute read
                  </span>
                </p>
                <a
                  className="hover:text-light-blue-400 dark:text-gray-200 dark:hover:text-light-blue-400 duration-200"
                  href="https://minetrax.xinecraft.com/news/launching-minetrax-test-server-1654365883"
                >
                  Launching MineTrax Test Server
                </a>
              </div>
              <div className="mt-3 text-gray-500 dark:text-gray-400">
                <p>
                  Now you can try out minetrax suite @
                  <a href="https://minetrax.live">https://minetrax.live</a>
                </p>
              </div>
            </div>
            <img
              className="h-auto w-2/5 object-cover object-center"
              src="https://minetrax.xinecraft.com/storage/media/3/intel_perf.png"
              alt="News Image"
            />
          </div>
        </div>
      </div>
      <div className="order-2 col-span-1 space-y-4 md:order-none">
        <div>
          <div className="p-3 sm:px-5 bg-white dark:bg-cool-gray-800 rounded shadow break-words">
            <h3 className="font-extrabold text-gray-800 dark:text-gray-200">
              Server Status
            </h3>

            <div className="flex flex-col">
              <div className="mt-3 text-gray-700 dark:text-gray-300 text-center font-semibold">
                Join
                <span className="font-bold text-light-blue-500 dark:text-light-blue-400">
                  0
                </span>
                Online Players!
              </div>
              <button
                type="button"
                className="text-center font-extrabold mt-3 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded p-2 hover:text-light-blue-500 dark:hover:text-light-blue-400 hover:bg-light-blue-50 dark:hover:bg-cool-gray-900 hover:border-light-blue-500 dark:hover:border-cool-gray-800 focus:ring focus:ring-light-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out focus:outline-none"
              >
                <span>minetrax.xinecraft.com</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="p-3 space-y-4 bg-white rounded shadow dark:bg-cool-gray-800">
            <h3 className="font-extrabold text-gray-800 dark:text-gray-200">
              Shout Box
            </h3>
            <div className="flex-col space-y-4 overflow-auto max-h-96 hide-scrollbar">
              <div className="chat-message">
                <div className="flex">
                  <div className="items-start order-2 max-w-xs mx-2 space-y-2 text-sm">
                    <div className="flex flex-col inline-block px-4 py-2 text-gray-700 bg-gray-100 rounded-tl-lg rounded-2xl dark:bg-cool-gray-600 dark:bg-opacity-25 dark:text-gray-200">
                      <div>
                        <span className="font-semibold cursor-pointer hover:underline">
                          ADMINKSE
                        </span>
                        <span className="ml-1 text-xs text-gray-500 dark:text-gray-400 focus:outline-none">
                          1 month
                        </span>
                      </div>
                      <span className="text-justify">HI</span>
                    </div>
                  </div>
                  <img
                    src="https://avatars.dicebear.com/api/bottts/ADMINKSE.svg"
                    alt="My profile"
                    className="order-1 w-8 h-8 mt-2 rounded-full"
                  />
                </div>
              </div>
              <div className="chat-message">
                <div className="flex">
                  <div className="items-start order-2 max-w-xs mx-2 space-y-2 text-sm">
                    <div className="flex flex-col inline-block px-4 py-2 text-gray-700 bg-gray-100 rounded-tl-lg rounded-2xl dark:bg-cool-gray-600 dark:bg-opacity-25 dark:text-gray-200">
                      <div>
                        <span className="font-semibold cursor-pointer hover:underline">
                          MarshyO_o
                        </span>
                        <span className="ml-1 text-xs text-gray-500 dark:text-gray-400 focus:outline-none">
                          1 month
                        </span>
                      </div>
                      <span className="text-justify">What's up everyone</span>
                    </div>
                  </div>
                  <img
                    src="https://avatars.dicebear.com/api/bottts/MarshyO_o.svg"
                    alt="My profile"
                    className="order-1 w-8 h-8 mt-2 rounded-full"
                  />
                </div>
              </div>
              <div className="chat-message">
                <div className="flex">
                  <div className="items-start order-2 max-w-xs mx-2 space-y-2 text-sm">
                    <div className="flex flex-col inline-block px-4 py-2 text-gray-700 bg-gray-100 rounded-tl-lg rounded-2xl dark:bg-cool-gray-600 dark:bg-opacity-25 dark:text-gray-200">
                      <div>
                        <span className="font-semibold cursor-pointer hover:underline">
                          SebusToja
                        </span>
                        <span className="ml-1 text-xs text-gray-500 dark:text-gray-400 focus:outline-none">
                          2 months
                        </span>
                      </div>
                      <span className="text-justify">Hi</span>
                    </div>
                  </div>
                  <img
                    src="https://minetrax.xinecraft.com/storage/profile-photos/yo92TQsZ9GhO1cf20ALapIVXLFn2yZwuL8Gm7tYQ.jpg"
                    alt="My profile"
                    className="order-1 w-8 h-8 mt-2 rounded-full"
                  />
                </div>
              </div>
              <div className="chat-message">
                <div className="flex">
                  <div className="items-start order-2 max-w-xs mx-2 space-y-2 text-sm">
                    <div className="flex flex-col inline-block px-4 py-2 text-gray-700 bg-gray-100 rounded-tl-lg rounded-2xl dark:bg-cool-gray-600 dark:bg-opacity-25 dark:text-gray-200">
                      <div>
                        <span className="font-semibold cursor-pointer hover:underline">
                          stelemanuele77
                        </span>
                        <span className="ml-1 text-xs text-gray-500 dark:text-gray-400 focus:outline-none">
                          2 months
                        </span>
                      </div>
                      <span className="text-justify">hello</span>
                    </div>
                  </div>
                  <img
                    src="https://minetrax.xinecraft.com/storage/profile-photos/AlX4PbElUtAf5bb4fR5u1gGgduMg9S8amWQkMJvd.jpg"
                    alt="My profile"
                    className="order-1 w-8 h-8 mt-2 rounded-full"
                  />
                </div>
              </div>
              <div className="chat-message">
                <div className="flex">
                  <div className="items-start order-2 max-w-xs mx-2 space-y-2 text-sm">
                    <div className="flex flex-col inline-block px-4 py-2 text-gray-700 bg-gray-100 rounded-tl-lg rounded-2xl dark:bg-cool-gray-600 dark:bg-opacity-25 dark:text-gray-200">
                      <div>
                        <span className="font-semibold cursor-pointer hover:underline">
                          stelemanuele77
                        </span>
                        <span className="ml-1 text-xs text-gray-500 dark:text-gray-400 focus:outline-none">
                          2 months
                        </span>
                      </div>
                      <span className="text-justify">hello</span>
                    </div>
                  </div>
                  <img
                    src="https://minetrax.xinecraft.com/storage/profile-photos/AlX4PbElUtAf5bb4fR5u1gGgduMg9S8amWQkMJvd.jpg"
                    alt="My profile"
                    className="order-1 w-8 h-8 mt-2 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="text-sm text-center text-gray-600 dark:text-gray-400">
              <a
                className="font-semibold text-light-blue-500"
                href="https://minetrax.xinecraft.com/login"
              >
                Login
              </a>
              or
              <a
                className="font-semibold text-light-blue-500"
                href="https://minetrax.xinecraft.com/register"
              >
                Register
              </a>
              to Shout
            </div>
          </div>
        </div>
        <div>
          <div className="p-3 bg-white dark:bg-cool-gray-800 rounded shadow space-y-4">
            <h3 className="font-extrabold text-gray-800 dark:text-gray-200">
              Latest News
            </h3>
            <div className="flex justify-between space-y-4">
              <div className="flex-co space-y-1">
                <span className="px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-lg bg-orange-100 text-orange-800 dark:bg-orange-700 dark:bg-opacity-25 dark:text-orange-400">
                  Announcement
                </span>
                <p className="font-semibold leading-5 text-gray-800 dark:text-gray-300">
                  <a
                    className="hover:text-light-blue-400 duration-200"
                    href="https://minetrax.xinecraft.com/news/launching-minetrax-test-server-1654365883"
                  >
                    <span>Launching MineTrax Test Server</span>
                  </a>
                </p>
                <span className="text-gray-500 dark:text-gray-400 text-xs focus:outline-none">
                  11 months ago
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-xs">
                  - 1 minute&nbsp;read
                </span>
              </div>
              <img
                className="h-16 w-20 rounded"
                src="https://minetrax.xinecraft.com/storage/media/3/intel_perf.png"
                alt="News Image"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="p-3 bg-white dark:bg-cool-gray-800 rounded shadow space-y-2">
            <h3 className="font-extrabold text-gray-800 dark:text-gray-200">
              Online Users
            </h3>
            <div className="flex justify-center flex-wrap"></div>
            <div className="flex justify-center text-xs text-gray-700 dark:text-gray-300 font-semibold">
              Total: 2 (members: 0, guests: 2)
            </div>
          </div>
        </div>
        <div>
          <div className="p-3 bg-white dark:bg-cool-gray-800 rounded shadow space-y-2">
            <h3 className="font-extrabold text-gray-800 dark:text-gray-200">
              Newest User
            </h3>
            <div className="cursor-pointer flex space-x-2 border dark:border-gray-700 rounded-tl-md rounded-tr-xl rounded-b-3xl p-2 items-center hover:border-light-blue-400 dark:hover:border-light-blue-400">
              <img
                className="w-14 h-14 rounded-full"
                src="https://minetrax.xinecraft.com/storage/profile-photos/6ErGywlZdtpXnafBYrooaGP1rUyJWtZqKUIift7F.png"
                alt="Avatar"
              />
              <div className="flex flex-col">
                <div className="break-all">
                  <span className="text-gray-800 dark:text-gray-300 font-semibold">
                    ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎
                    ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎
                    ‎‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    @____________
                  </span>
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-500 focus:outline-none">
                  Joined&nbsp;11 days ago
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 bg-white dark:bg-cool-gray-800 rounded shadow space-y-2">
          <h3 className="text-gray-800 dark:text-gray-200 font-extrabold">
            Socials
          </h3>
          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://www.youtube.com/channel/UCs_fsNTUhiYXiwrgO-KrUYQ"
              target="_blank"
              className="inline-block p-1 hover:bg-red-600 text-gray-700 rounded hover:text-white transition duration-100 ease-in dark:text-gray-300 dark:hover:text-white"
            >
              {/*<svg*/}
              {/*  className="fill-current h-8 w-8 p-1"*/}
              {/*  height="512"*/}
              {/*  viewBox="0 0 24 24"*/}
              {/*  width="512"*/}
              {/*  xmlns="http://www.w3.org/2000/svg"*/}
              {/*>*/}
              {/*  <path d="M9.939 7.856a.75.75 0 00-1.134.644v7c0 .585.638.939 1.134.645l5.869-3.495a.751.751 0 00.001-1.289zm.366 6.325v-4.36l3.655 2.183z"></path>*/}
              {/*  <path d="M19.904 3.271c-4.653-.691-11.153-.691-15.808 0C2.234 3.547.767 5.009.447 6.907c-.596 3.523-.596 6.664 0 10.186.32 1.899 1.787 3.36 3.649 3.636 2.332.346 5.124.519 7.915.519 2.786 0 5.571-.172 7.894-.518 1.86-.276 3.326-1.737 3.648-3.636.596-3.523.596-6.665 0-10.188-.32-1.897-1.787-3.359-3.649-3.635zm2.17 13.573c-.213 1.256-1.173 2.222-2.39 2.402-4.518.671-10.838.671-15.368-.001-1.218-.181-2.179-1.146-2.391-2.402-.574-3.394-.574-6.291 0-9.687.213-1.256 1.173-2.22 2.392-2.402 2.262-.335 4.973-.503 7.682-.503 2.711 0 5.422.168 7.684.503 1.218.181 2.179 1.146 2.391 2.402.574 3.396.574 6.293 0 9.688z"></path>*/}
              {/*</svg>*/}
            </a>
            <a
              href="https://twitter.com/minetraxsuite"
              target="_blank"
              className="inline-block p-1 hover:bg-light-blue-600 text-gray-700 rounded hover:text-white transition duration-100 ease-in dark:text-gray-300 dark:hover:text-white"
            >
              {/*<svg viewBox="0 0 512 512" className="h-8 w-8 p-1 fill-current">*/}
              {/*  <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"></path>*/}
              {/*</svg>*/}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

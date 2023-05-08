type Props = {

}

export default function Footer({}: Props) {
    return (<>
        <footer className="flex flex-col items-center justify-center p-5">
            <div className="text-sm text-gray-800 dark:text-gray-400">
                © MineTrax Community 2023
            </div>
            <div className="text-xs text-gray-500">
                Powered with
                <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inline-flex w-4 h-4 text-red-500 opacity-75 animate-ping"
                >
                    <path
                        fill-rule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clip-rule="evenodd"
                    ></path>
                </svg
                >
                <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative inline-flex w-4 h-4 text-red-500"
                >
                    <path
                        fill-rule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
                by
                <a
                    target="_blank"
                    href="https://minetrax.github.io"
                    className="hover:underline hover:text-light-blue-500"
                >MineTrax</a
                >
            </div>
        </footer>
    </>)
}
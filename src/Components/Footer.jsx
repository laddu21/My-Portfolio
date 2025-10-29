
const Footer = () => {
    return (
        <footer className="w-full bg-black/80 dark:bg-gray-900/90 backdrop-blur-md text-white dark:text-gray-100 text-center py-8 px-4 border-t border-white/10 dark:border-gray-700/50">
            <div className="max-w-4xl mx-auto">
                <p className="mb-4 text-lg leading-relaxed text-gray-100 dark:text-gray-200">
                    Feel free to reach out if you have any questions or would like to collaborate!
                </p>
                <p className="text-gray-300 dark:text-gray-400 font-medium">
                    &copy; <span className="font-bold text-white dark:text-gray-100">2023 Shaik Rabbani.</span> All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;

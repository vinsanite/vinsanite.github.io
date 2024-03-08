import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import Button from "../components/Button.jsx";
import Background from "../components/Background.jsx";

export default function Contact() {
    return (
        <>
            <NavBar />
            <section className="bg-primary px-5 text-[#181818]">
                <div className="relative flex justify-center items-center m-10 flex-wrap text-left">
                    <div className="w-5/6 rounded-md bg-[#181818] hover:bg-gradient-to-r from-green-500 via-indigo-500 to-purple-500 p-1">
                        <section class="bg-white rounded-md">
                            <div class="py-4 lg:py-16 px-4 mx-auto max-w-screen-md">
                                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-black">
                                    Contact Me
                                </h2>
                                <form action="mailto:vincentnguyen7011@gmail.com" method="post" enctype="text/plain" class="space-y-4">
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                            Your email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                            placeholder="name@email.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                            placeholder="Enter the subject..."
                                            required
                                        />
                                    </div>
                                    <div class="sm:col-span-2">
                                        <label
                                            for="message"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                            Your message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="6"
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Leave a message..."
                                            required
                                        />
                                    </div>
                                    <Button type="submit">
                                        Send message
                                    </Button>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

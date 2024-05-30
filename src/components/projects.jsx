import projecto1 from "../assets/projecto1.png";
import projecto2 from "../assets/proyecto2.png";
import projecto3 from "../assets/Webpage.png";
import projecto4 from "../assets/apiTs.png";

export const Projects = () => {

  
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <h2 className="text-xl font-semibold uppercase tracking-wide text-slate-200 my-4 ">
        PROJECTS
      </h2>
      <ul className="group/list">
        <li className="mb-12">
          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <a
                  class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                  href="https://master--landingpagecafe.netlify.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Spotify Profile (opens in a new tab)"
                >
                  <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                    Coffe Landing Page - Free trial hosting end{" "}
                    <span class="inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </a>
              </h3>
              <p class="mt-2 text-sm leading-normal  text-sm leading-normal text-slate-opa">
                Responsive Landing Page for a coffee in my city. You can see the
                location of the place, scan the menu and preview and inform
                about dishes.
              </p>
              <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    React
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    Tailwind
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    WhatsApp API
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    Map API
                  </div>
                </li>
              </ul>
            </div>
            <img
              src={projecto1}
              alt="Spotify Profile app homepage"
              className="rounded border-2 h-auto border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            ></img>
          </div>
        </li>
        <li className="mb-12">
          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <a
                  class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                  href="https://github.com/lautarobeber/websockets-chat"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Spotify Profile (opens in a new tab)"
                >
                  <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                    Web Sockets Chat - Free trial hosting end{" "}
                    <span class="inline-block">
                      
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </a>
              </h3>
              <p class="mt-2 text-sm leading-normal  text-sm leading-normal text-slate-opa">
                Live online chat. You enter your username, and you can see
                online users and chat with them from anywhere in the world.
              </p>
              <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    NodeJS
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    TypeScript
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    NestJS
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    WebSockets
                  </div>
                </li>
              </ul>
            </div>
            <img
              src={projecto2}
              alt="Spotify Profile app homepage"
              className="rounded border-2 h-auto border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            ></img>
          </div>
        </li>
        <li className="mb-12">
          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <a
                  class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                  href="https://github.com/lautarobeber/webpage-backend"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Spotify Profile (opens in a new tab)"
                >
                  <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                    Sneaker{" "}
                    <span class="inline-block">
                      E-commerce - Free trial hosting end
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </a>
              </h3>
              <p class="mt-2 text-sm leading-normal  text-sm leading-normal text-slate-opa">
                As a user, you create an account and have the possibility of
                purchasing your shoes in the size you want. or also add them to
                the cart, to make a varied purchase. Once purchased, You can see
                the status of your order in the MIS COMPRAS section.<br></br>Test the payment:<br></br>
                Credit card: 4242 4242 4242 4242, Expiration date: 12/32, invent
                the rest.<br></br>
                Admin User: admin@admin.com, Password: admin123
              </p>
              <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    NodeJS
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    Express
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    ZOD
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    JWT
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    Multer
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    Stripe
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    MySQL
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    Sequelize
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    React
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    Tailwind
                  </div>
                </li>
              </ul>
            </div>
            <img
              src={projecto3}
              alt="Spotify Profile app homepage"
              className="rounded border-2 h-auto border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            ></img>
          </div>
        </li>
        <li className="mb-12">
          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <a
                  class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                  href="https://api-rest-ts-4ilj.onrender.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Spotify Profile (opens in a new tab)"
                >
                  <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                  Travel Diary - Free trial hosting
                    <span class="inline-block">
                    
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </a>
              </h3>
              <p class="mt-2 text-sm leading-normal  text-sm leading-normal text-slate-opa">
              REST API with CRUD for traveling notes with React and Typescript. Notes saved in MongoDB
              </p>
            
              <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    React
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    Tailwind CSS
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    Typescript
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    NodeJS
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    Express
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    MongoDB
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    Stripe
                  </div>
                </li>
                <li class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    MySQL
                  </div>
                </li>
              </ul>
            </div>
            <img
              src={projecto4}
              alt="Api Rest Diaries"
              className="rounded border-2 h-auto border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            ></img>
          </div>
        </li>
      </ul>
    </section>
  );
};

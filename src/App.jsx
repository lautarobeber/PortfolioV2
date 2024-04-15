import "./index.css";
import "./App.css";
import CircleCursor from "./components/circlecursor";
import { Experience } from "./components/experience";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Link } from "react-scroll";

function App() {
  return (
    <>
      <CircleCursor />
      <section  className="flex inset-0 min-h-screen  bg-custom-dark-blue">
        <div className="container min-h-screen max-w-screen flex flex-col lg:flex-row mx-auto lg:px-36   bg-transparent font-sans">
          <header className="pt-12 lg:w-1/2 max-h-screen lg:py-24 lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-between  ">
            <div className="">
              <h1 className=" text-4xl font-bold tracking-normal text-slate-200 sm:text-5xl pb-4">
                <a href="/">Lautaro Beber</a>
              </h1>
              <h2 className='"mt-3 text-lg font-medium tracking-normal text-slate-100 sm:text-xl"'>
                Software Developer
              </h2>
              <p className="mt-4 max-w-xs text-slate-opa  leading-normal">
                I fix bugs, build things and learn new languages.
              </p>
              <nav className="nav hidden lg:block">
                <ul className="mt-16 w-max">
                  <li>
                    <Link to="about" smooth={true} duration={500} className="flex flex-row items-center hover:cursor-pointer">
                      <div className="w-12 hover:w-24 h-px bg-gray-600 mr-2"></div>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-200 hover:text-sm">
                        About
                      </span>
                    </Link>
                  </li>
                  <li>
                   
                    <Link to="experience" smooth={true} duration={500} className="flex flex-row my-4 items-center hover:cursor-pointer">
                      <div className="w-12 h-px bg-gray-600 mr-2"></div>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-200 hover:text-sm">
                        Experience
                      </span>
                    </Link>
                    
                  </li>
                  <li>
                    <Link to="projects" smooth={true} duration={500} className="flex flex-row items-center hover:cursor-pointer">
                      <div className="w-12 h-px bg-gray-600 mr-2"></div>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-200 hover:text-sm">
                        Projects
                      </span>
                    </Link>
                  </li>
                </ul>

              </nav>
              <div class="mt-12"><a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base" href="https://drive.google.com/file/d/1ez6KlRrWyCxOUwlULcz3i4ZncLUxeWW-/view?usp=sharing" target="_blank" rel="noreferrer noopener" aria-label="View Full Résumé (opens in a new tab)"><span>View Full <span class="inline-block">CV<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg></span></span></a></div>

            </div>

            <div className="text-slate-200">
              <ul className="ml-1 mt-8 flex items-center">
                <li className="mr-5 text-xs shrink-0">
                  <a
                    target="_blank"
                    href="https://github.com/lautarobeber?tab=repositories"
                    className="github-svg-container hover:text-slate-200 block "
                  >
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 20 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      fill="#000000 "
                      className="github-svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title>github [#000000]</title>{" "}
                        <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          {" "}
                          <g
                            id="Dribbble-Light-Preview"
                            transform="translate(-140.000000, -7559.000000)"
                            fill="#ffffff"
                          >
                            {" "}
                            <g
                              id="icons"
                              transform="translate(56.000000, 160.000000)"
                            >
                              {" "}
                              <path
                                d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                id="github-[#000000]"
                              >
                                {" "}
                              </path>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="mr-5 text-xs shrink-0">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/lautaro-beber-73709b236/"
                    className="github-svg-container hover:text-slate-200 block "
                  >
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                          fill="#ffffff"
                        />{" "}
                        <path
                          d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                          fill="#ffffff"
                        />{" "}
                        <path
                          d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                          fill="#ffffff"
                        />{" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                          fill="#ffffff"
                        />{" "}
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="mr-5 text-xs shrink-0">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/lautibeber/"
                    className="github-svg-container hover:text-slate-200 block "
                  >
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                          fill="#ffffff"
                        />{" "}
                        <path
                          d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                          fill="#ffffff"
                        />{" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                          fill="#ffffff"
                        />{" "}
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </header>
          <main className="w-full lg:w-1/2 bg-custom-dark-blue lg:py-24">
            <About />
            <Experience />
           <Projects />
          </main>
        </div>
      </section>
    </>
  );
}

export default App;

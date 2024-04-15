export const Experience = () => {


    return(
        <section id="experience">
        <h2 className="text-xl font-semibold uppercase tracking-wide text-slate-200 my-4 ">
          EXPERIENCE
        </h2>
        <ol className="group/list">
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7143422494295670784/" target="_blank">
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label="2024 to Present"
                >
                  2022 — 2023
                </header>
                <div className="z-10 sm:col-span-6 text-slate-200">
                  <h3 className="font-medium leading-snug ">
                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
                      <span>
                        Backend Developer - Bondpland Project
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
                    </a>
                  </h3>
                  <p class="mt-2 text-sm leading-normal text-slate-opa">
                    Build and maintain critical components used to
                    construct Klaviyo’s frontend, across the whole
                    product. Work closely with cross-functional teams,
                    including developers, designers, and product managers,
                    to implement and advocate for best practices in web
                    accessibility.
                  </p>
                  <ul
                    class="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
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
                        Express
                      </div>
                    </li>
                    <li class="mr-1.5 mt-2">
                      <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        MySQL
                      </div>
                    </li>
                    <li class="mr-1.5 mt-2">
                      <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Zod
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </a>
        </ol>
      </section>
    )
}
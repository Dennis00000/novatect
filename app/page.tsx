"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ArrowRight } from "lucide-react"

type ModalType = "about" | "projects" | "blog" | "contacts" | null

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)
  const [currentModal, setCurrentModal] = useState<ModalType>(null)

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const showModal = (modal: ModalType) => {
    setCurrentModal(modal)
    setMenuOpen(false)
    document.body.style.overflow = "hidden"
  }

  const hideModal = () => {
    setCurrentModal(null)
    document.body.style.overflow = "unset"
  }

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setMenuOpen(false)
  }

  const navItems = [
    { label: "ABOUT US", modal: "about" as const },
    { label: "PROJECTS", modal: "projects" as const },
    { label: "BLOG", modal: "blog" as const },
    { label: "CONTACTS", modal: "contacts" as const },
  ]

  const projectData = [
    {
      title: "DAY CARE IN PARIS",
      type: "ARCHITECTURE",
      year: "2023",
      description:
        "A modern childcare facility designed with sustainable materials and child-friendly spaces featuring interactive learning environments.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DAY%20CARE%20IN%20PARIS.jpg-EelMiZtXe7t9pvcwVv05XkWUAxbjdk.jpeg",
    },
    {
      title: "CONCERT HALL IN NEW YORK",
      type: "ARCHITECTURE",
      year: "2023",
      description:
        "State-of-the-art performance venue with exceptional acoustics and striking contemporary design featuring flowing organic forms.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CONCERT%20HALL%20IN%20NEW%20YORK.jpg-zt5THHvh8BdUJQDNrlYew5f2bwaNWz.jpeg",
    },
    {
      title: "MODERN HOTEL IN LONDON",
      type: "ARCHITECTURE",
      year: "2022",
      description:
        "Luxury hotel combining neoclassical elegance with contemporary sophistication, featuring grand entrance and premium amenities.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MODERN%20HOTEL%20IN%20LONDON.jpg-jiR296DM9vV7WXaDreFBvpYmL6JjnF.jpeg",
    },
    {
      title: "RESIDENTIAL COMPLEX",
      type: "ARCHITECTURE",
      year: "2022",
      description:
        "Modern luxury residential development featuring clean lines, glass facades, and integrated landscape design.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RESIDENTIAL%20COMPLEX.jpg-sgqpycXvI7cMul0pB13eyubBwpVy4S.jpeg",
    },
  ]

  const blogPosts = [
    {
      title: "The Future of Sustainable Architecture",
      date: "December 15, 2024",
      excerpt:
        "Exploring innovative materials and design approaches that minimize environmental impact while maximizing aesthetic appeal.",
    },
    {
      title: "Designing for Community: Public Spaces That Connect",
      date: "November 28, 2024",
      excerpt:
        "How thoughtful architectural design can foster social interaction and strengthen community bonds in urban environments.",
    },
    {
      title: "The Art of Acoustic Design in Modern Concert Halls",
      date: "November 10, 2024",
      excerpt:
        "Behind the scenes of our New York Concert Hall project and the science of creating perfect sound environments.",
    },
  ]

  const specializations = [
    { title: "ARCHITECTURE", desc: "Innovative building design and urban planning" },
    { title: "INTERIORS", desc: "Sophisticated interior spaces and environments" },
    { title: "PLANNING", desc: "Strategic development and master planning" },
  ]

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${navScrolled ? "bg-zinc-900/98" : "bg-zinc-900/95"} backdrop-blur-md`}
      >
        <div className="max-w-7xl mx-auto px-5 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={goToTop}
              className="text-2xl font-bold tracking-[2px] hover:text-yellow-600 transition-all duration-500 hover:scale-105 hover:tracking-[3px] transform-gpu"
            >
              NOVA<span className="text-yellow-600">TECT</span>
            </button>

            <ul className="hidden md:flex space-x-10">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => showModal(item.modal)}
                    className="text-xs tracking-wider hover:text-yellow-600 transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <button className="md:hidden flex flex-col space-y-1" onClick={() => setMenuOpen(!menuOpen)}>
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              ></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              ></span>
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <ul className="flex flex-col space-y-4 text-center">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => showModal(item.modal)}
                      className="text-xs tracking-wider hover:text-yellow-600 transition-colors duration-300"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-concert-hall.png"  
            alt="Concert Hall Architecture"
            fill
            className="object-cover brightness-60"
            priority
          />
        </div>
        <div className="relative z-10 text-center max-w-2xl px-5">
          <h1 className="text-4xl md:text-6xl font-black tracking-[4px] mb-8 leading-tight">
            CONCERT HALL IN NEW YORK
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-10 opacity-90">
            Concert Hall is the architecture of a new generation, a building that embodies not only in the architectural
            environment but also in the intellectual culture and communication.
          </p>
          <button
            onClick={() => showModal("projects")}
            className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-yellow-600 text-yellow-600 px-8 py-4 text-sm tracking-[2px] font-bold hover:bg-yellow-600 hover:text-zinc-900 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">READ MORE</span>
            <ArrowRight
              size={18}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            />
            <div className="absolute inset-0 bg-yellow-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
          </button>
        </div>
      </section>

      {currentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={hideModal}></div>
          <div className="relative bg-zinc-900 border border-zinc-700 rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto m-4 w-full">
            <button
              onClick={hideModal}
              className="absolute top-4 right-4 z-10 p-2 hover:bg-zinc-800 rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            {currentModal === "about" && (
              <div className="p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-light tracking-[3px] mb-8">ABOUT NOVATECT</h2>
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl md:text-3xl font-light mb-6 leading-tight">
                      we turn ideas into works of art
                    </h3>
                    <p className="text-sm leading-relaxed mb-8 opacity-80">
                      For each project, we establish relationships with partners who we know will help us create added
                      value for your project. As well as bringing together the public and private sectors, we make
                      sector-overarching links to gather knowledge and to learn from each other.
                    </p>
                    <p className="text-sm leading-relaxed mb-8 opacity-80">
                      The way we undertake projects is based on permanently applying our values. We believe in
                      sustainable design, innovative solutions, and creating spaces that inspire and elevate the human
                      experience.
                    </p>

                    <div>
                      <h4 className="text-sm tracking-[2px] mb-5 opacity-70">our specialization:</h4>
                      <ul className="space-y-3">
                        {specializations.map((item) => (
                          <li key={item.title} className="border-l-2 border-yellow-600 pl-4">
                            <div className="text-lg tracking-wider font-bold">{item.title}</div>
                            <div className="text-sm opacity-70">{item.desc}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src="/about-pattern.png"
                      alt="Architectural Pattern"
                      width={400}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentModal === "projects" && (
              <div className="p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-light tracking-[3px] mb-8">PROJECTS</h2>
                <div className="grid gap-8 md:grid-cols-2">
                  {projectData.map((project) => (
                    <div key={project.title} className="flex flex-col bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-600 transition-shadow duration-300">
                      <div className="relative w-full h-56 md:h-48">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-bold text-xl tracking-[3px] mb-2">{project.title}</h3>
                        <div className="text-sm tracking-[2px] font-semibold opacity-70 mb-4">
                          {project.type} - {project.year}
                        </div>
                        <p className="text-sm leading-relaxed flex-grow">{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentModal === "blog" && (
              <div className="p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-light tracking-[3px] mb-8">BLOG</h2>
                <div className="space-y-6">
                  {blogPosts.map((post) => (
                    <article key={post.title} className="border-b border-zinc-700 pb-4">
                      <h3 className="font-bold text-xl tracking-[3px] mb-2">{post.title}</h3>
                      <time className="text-xs opacity-70 block mb-2">{post.date}</time>
                      <p className="text-sm leading-relaxed opacity-80">{post.excerpt}</p>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {currentModal === "contacts" && (
              <div className="p-8 md:p-12 max-w-md mx-auto">
                <h2 className="text-4xl md:text-5xl font-light tracking-[3px] mb-8">CONTACT US</h2>
                <form
                  className="flex flex-col space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault()
                    alert("Form submitted! (This is a placeholder)")
                  }}
                >
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-zinc-800 rounded-md px-4 py-3 text-white placeholder:text-zinc-500"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-zinc-800 rounded-md px-4 py-3 text-white placeholder:text-zinc-500"
                    required
                  />
                  <textarea
                    placeholder="Message"
                    rows={5}
                    className="bg-zinc-800 rounded-md px-4 py-3 text-white placeholder:text-zinc-500 resize-none"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-yellow-600 hover:bg-yellow-500 transition-colors duration-300 font-bold text-zinc-900 py-3 rounded-md tracking-[2px]"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

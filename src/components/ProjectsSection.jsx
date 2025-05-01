import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "PANG - Panel Admin Next Generation",
    description: "A beautiful admin dashboard app using React and Material UI with functionality and interactive feature.",
    image: "/projects/PANG.png",
    tags: ["React", "Material UI", "Tanstack", "Websockets"],
  },
  {
    id: 2,
    title: "ADMTC",
    description:
      "A comprehensive academic resource platform built for Europe, offering intuitive access to research materials, publications, and collaboration tools through a modern and user-friendly interface.",
    image: "/projects/ADMTC.png",
    tags: ["Angular", "Graphql", "TypeScript"],
    demoUrl: "https://www.admtc.pro",
  },
  {
    id: 3,
    title: "E-RKAM v2",
    description:
      "A digital budgeting and planning system designed for madrasahs, enabling efficient management of work plans and budgets through an intuitive, secure, and transparent electronic platform.",
    image: "/projects/ERKAM.png",
    tags: ["React", "Angular", "Material UI", "Websockets", "TypeScript"],
    demoUrl: "https://erkam.kemenag.go.id",
  },
  {
    id: 4,
    title: "Zippy Platform",
    description:
      "A smart voucher-based purchasing platform tailored for MSMEs, empowering small businesses to simplify transactions, access exclusive deals, and streamline their procurement process.",
    image: "/projects/ZIPPY.png",
    tags: ["Next", "Nuxt", "Tailwindcss", "Tanstack", "TypeScript"],
    demoUrl: "https://merchant.dev.zippyrewards.co/",
  },
  {
    id: 5,
    title: "Dashboard Monitoring EDC",
    description:
      "An interactive dashboard designed to monitor and analyze EDC machine transactions in real time, providing clear insights, performance metrics, and operational visibility for better decision-making.",
    image: "/projects/CIMB_EDC.png",
    tags: ["React", "Material UI", "Websockets", "TypeScript"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects & Works </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ranggatw"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

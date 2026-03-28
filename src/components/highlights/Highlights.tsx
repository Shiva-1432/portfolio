const highlights = [
  {
    title: "3+ Production-Level Projects",
    desc: "Built scalable systems using modern tech stack",
  },
  {
    title: "Cloud & Backend Focus",
    desc: "Experience with AWS, APIs, and system design",
  },
  {
    title: "AI + Real-World Applications",
    desc: "Worked on healthcare and resume analysis systems",
  },
];

export default function Highlights() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8">
        {highlights.map((item, i) => (
          <div
            key={i}
            className="glass p-8 group hover:border-accent-purple/50 transition-all duration-500"
          >
            <h3 className="text-xl font-bold tracking-tight mb-3 text-white">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}


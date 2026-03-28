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

import SectionWrapper from "../common/SectionWrapper";

const Highlights = () => {
  return (
    <SectionWrapper>

      <div className="grid md:grid-cols-3 gap-6">

        {highlights.map((item, i) => (
          <div
            key={i}
            className="border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition"
          >
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-400 mt-2 text-sm">{item.desc}</p>
          </div>
        ))}

      </div>

    </SectionWrapper>
  );
};

export default Highlights;

import SkillCard from "./SkillCard";

const skills = [
  { name: "Next.js" },
  { name: "React" },
  { name: "TypeScript" },

  { name: "Node.js" },
  { name: "MySQL" },

  { name: "AWS" },
  { name: "Docker" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-8">

      <h2 className="text-3xl font-bold mb-10 text-center">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>

    </section>
  );
};

export default Skills;

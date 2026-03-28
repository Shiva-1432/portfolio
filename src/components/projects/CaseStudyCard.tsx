type Project = {
  title: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  architecture: string;
  architectureFlow: string[];
  impact: string[];
};

const CaseStudyCard = ({ project }: { project: Project }) => {
  return (
    <div className="py-20 border-t border-gray-800 first:border-t-0 first:pt-0">

      <h2 className="text-4xl font-bold">
        {project.title}
      </h2>

      <p className="text-gray-400 mt-4 max-w-2xl">
        {project.description}
      </p>

      <div className="mt-6 space-y-2 text-gray-300">
        <p>
          <strong className="text-white">Problem:</strong> {project.problem}
        </p>
        <p>
          <strong className="text-white">Solution:</strong> {project.solution}
        </p>
        <p>
          <strong className="text-white">Impact:</strong> {project.impact.join(" • ")}
        </p>
      </div>

    </div>
  );
};

export default CaseStudyCard;

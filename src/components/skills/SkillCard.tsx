const SkillCard = ({ skill }: { skill: { name: string } }) => {
  return (
    <div className="px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition">
      {skill.name}
    </div>
  );
};

export default SkillCard;

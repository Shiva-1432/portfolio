import React from "react";

type Props = {
  title: string;
  flow: string[];
};

const ArchitectureDiagram = ({ title, flow }: Props) => {
  return (
    <div className="mt-6 border border-gray-800 rounded-xl p-6">

      <h4 className="font-semibold mb-4">{title}</h4>

      <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
        {flow.map((step, index) => (
          <React.Fragment key={index}>
            <div className="px-4 py-2 border border-gray-700 bg-gray-900 rounded-lg">
              {step}
            </div>
            {index < flow.length - 1 && (
              <span className="text-gray-500 font-bold">→</span>
            )}
          </React.Fragment>
        ))}
      </div>

    </div>
  );
};

export default ArchitectureDiagram;

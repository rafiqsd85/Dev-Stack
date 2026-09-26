import { ImCross } from "react-icons/im";
import type { Technology } from "../type/Card";

interface StackboxProps {
  selectedTechnologies: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const Stackbox = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: StackboxProps) => {
  return (
    <div className="border-2 border-gray-200 rounded-xl p-4 bg-white hover:bg-gray-100">
      <h2 className="text-xl font-bold">Your Stack</h2>

      {selectedTechnologies.length === 0 ? (
        <>
          <p className="text-gray-500 text-sm mt-1">
            No Technology Selected Yet
          </p>

          <div className="mt-4 border-2 border-dashed border-gray-200 rounded-lg py-10 text-center">
            <p className="text-gray-400 text-sm">
              Your stack is empty.
            </p>
          </div>
        </>
      ) : (
        <>
          <p className="text-gray-500 text-sm mt-1">
            {selectedTechnologies.length} Technology Selected
          </p>

          <div className="mt-4 flex flex-col gap-3">
            {selectedTechnologies.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-between border border-gray-200 rounded-lg p-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-8 h-8 object-contain"
                  />

                  <div>
                    <p className="font-semibold text-sm">
                      {tech.name}
                    </p>

                    <p className="text-gray-500 text-xs">
                      {tech.category}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onRemove(tech.id)}
                  className="text-gray-400 hover:text-red-500 text-lg cursor-pointer"
                >
                  <ImCross />
                </button>
              </div>
            ))}

            <button
              onClick={onRemoveAll}
              className="w-full border border-red-300 text-red-500 py-2 rounded-lg mt-2 font-semibold hover:bg-red-50 cursor-pointer"
            >
              Remove All
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Stackbox;
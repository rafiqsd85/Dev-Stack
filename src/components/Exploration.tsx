import { useEffect,useState } from "react";

import TechCards from "./TechCards";
import Stackbox from "./Stackbox";
import type { Technology } from "../type/Card";

const Exploration = () => {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);
    useEffect(() => {
        const fetchTechnologies = async () => {
            const res =await fetch("/data.json");
            const data = await res.json();
            setTechnologies(data);
        };
        fetchTechnologies();
    }, []);
    const handleAdd = (tech:Technology) => {
        setSelectedTechnologies([...selectedTechnologies, tech]);
    };
    const handleRemove = (id: string) => {
        const newitem=selectedTechnologies.filter((tech) => tech.id !== id);
        setSelectedTechnologies(newitem);
    };
    const handleRemoveAll = () => {
        setSelectedTechnologies([]);
    }

    return (
        <section className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-black mb-4">
                Explore the <span className="text-pink-500"> Technologies</span>
            </h2>
            <p className="text-gray-600"> Pick one technology per category to build your ideal stack.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {technologies.map((tech) => (
                            <TechCards key={tech.id} tech={tech} onAdd={handleAdd}
                            isSelected={selectedTechnologies.some((item) => item.id === tech.id)}
                            />
                        ))}
                    </div>
                </div>
                <div className="self-start">
                    <Stackbox selectedTechnologies={selectedTechnologies} onRemove={handleRemove}  onRemoveAll={handleRemoveAll}/>

                </div>
                
            </div>

        </section>
    );
};

export default Exploration;
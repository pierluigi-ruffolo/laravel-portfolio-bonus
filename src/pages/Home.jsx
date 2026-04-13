import { useState, useEffect } from "react";
import axios from "axios";
import CardProjects from "../components/CardProjects";

function Home() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_KEY);
        setProjects(response.data.results);
      } catch (error) {
        console.error("Errore nel caricamento progetti:", error);
      }
    };
    fetchProjects();
  }, []);
  return (
    <main className="bg-light min-vh-100 py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 border-start border-primary border-4 ps-4">
            <h1 className="display-5 fw-bold text-dark m-0">
              Project Portfolio
            </h1>
            <p className="text-muted lead">Esplora i miei ultimi lavori</p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map((project) => (
            <div className="col" key={project.id}>
              <CardProjects project={project} />
            </div>
          ))}
        </div>
        {projects.length === 0 && (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status"></div>
            <p className="mt-3 text-muted">Caricamento progetti in corso...</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Home;

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";
function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const requestProduct = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_KEY}/${id}`,
        );
        setProject(response.data.results);
        console.log(response.data.results);
        ù;
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    requestProduct();
  }, [id]);

  return (
    <>
      {loading === true ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-3 text-muted">Caricamento progetti in corso...</p>
        </div>
      ) : (
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-12 text-center text-md-start">
              <span className="badge rounded-pill bg-primary mb-2 px-3 py-2">
                {project.type?.name}
              </span>
              <h1 className="display-4 fw-bold text-dark">{project.title}</h1>
              <hr className="my-4 border-primary opacity-25" />
            </div>
          </div>

          <div className="row g-5">
            <div className="col-lg-8">
              <h3 className="h4 fw-bold mb-3 text-primary">
                Descrizione del Progetto
              </h3>
              <p className="lead text-secondary lh-lg">{project.summary}</p>
              <div className="mt-5 p-5 bg-light rounded-4 text-center border">
                <i className="bi bi-image text-muted display-1"></i>
                <p className="text-muted mt-2">Area Anteprima Progetto</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 bg-white p-4">
                <h4 className="fw-bold mb-4">Informazioni</h4>

                <div className="mb-4">
                  <label className="text-muted small text-uppercase fw-bold">
                    Cliente
                  </label>
                  <p className="fs-5 mb-0 fw-semibold">{project.client}</p>
                </div>

                <div className="mb-4">
                  <label className="text-muted small text-uppercase fw-bold">
                    Periodo
                  </label>
                  <p className="fs-5 mb-0 fw-semibold">{project.period}</p>
                </div>

                <div className="mb-4">
                  <label className="text-muted small text-uppercase fw-bold">
                    Tecnologie
                  </label>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {project.technologies?.map((tech) => (
                      <span
                        key={tech.id}
                        className="badge border text-dark shadow-sm px-3 py-2"
                        style={{
                          borderLeft: `5px solid ${tech.color}`,
                          backgroundColor: "#f8f9fa",
                        }}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-top">
                  <Link
                    to="/"
                    className="btn btn-primary w-100 rounded-pill py-2 fw-bold"
                  >
                    Torna ai Progetti
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectDetail;

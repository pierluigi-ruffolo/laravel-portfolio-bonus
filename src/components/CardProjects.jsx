function CardProjects({ project }) {
  return (
    <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
      <div className="card-body p-4 d-flex flex-column">
        <div className="mb-3">
          <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2">
            <i className="bi bi-tag-fill me-1"></i>
            {project.type?.name || "General"}
          </span>
        </div>
        <h4 className="card-title fw-bold text-dark mb-3">{project.title}</h4>
        <p className="card-text text-secondary flex-grow-1 mb-4">
          {project.summary?.length > 120
            ? project.summary.substring(0, 120) + "..."
            : project.summary}
        </p>
        <div className="pt-3 border-top mt-auto">
          <div className="row g-0 align-items-center">
            <div className="col-8">
              <div className="d-flex align-items-center">
                <div className="bg-light rounded-circle p-2 me-2">
                  <i className="bi bi-briefcase text-primary"></i>
                </div>
                <div className="overflow-hidden">
                  <p className="small fw-bold mb-0 text-truncate">
                    {project.client}
                  </p>
                  <p className="small text-muted mb-0">{project.period}</p>
                </div>
              </div>
            </div>
            <div className="col-4 text-end">
              <button className="btn btn-outline-dark btn-sm rounded-pill px-3">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardProjects;

import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero-panel text-center">
      <h3 className="text-uppercase text-primary fw-semibold mb-2">
        Product Management System
      </h3>
      <h5>Manage and explore products for your needs</h5>
      
      <Link className="btn btn-primary btn-lg mt-2" to="/products">
        View Products
      </Link>
    </section>
  );
}

export default Home;

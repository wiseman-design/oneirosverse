import { motion } from "framer-motion";
import "./styles.css";


const App: React.FC = () => {
  return (
    <div className="portfolio-wrapper">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-tag">Portfolio 2026</div>
        <h1>Δημιουργούμε ιστορίες που μένουν αξέχαστες.</h1>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80" 
            alt="Me" 
          />
        </div>
        <div className="about-text">
          <h2>Σχετικά με μένα</h2>
          <p>
            Γράψε εδώ το κείμενό σου. Αυτή η ενότητα θα φαίνεται δίπλα στην 
            εικόνα στον υπολογιστή και κάτω από την εικόνα στο κινητό.
          </p>
        </div>
      </section>

      {/* Portfolio Projects */}
      <div className="portfolio">
        {/* Project 01 */}
        <div className="content-block">
          <div className="content-image">
            <span className="number">01</span>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80" 
              alt="Project 01" 
            />
          </div>
          <div className="content-text">
            <div className="hero-tag">Design</div>
            <h2>Τίτλος Έργου 01</h2>
            <p>
              Περιγραφή του έργου σου. Στο κινητό, αυτή η κάρτα θα στοιχηθεί 
              αυτόματα για να είναι ευανάγνωστη.
            </p>
          </div>
        </div>

        {/* Project 02 */}
        <div className="content-block">
          <div className="content-image">
            <span className="number">02</span>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80" 
              alt="Project 02" 
            />
          </div>
          <div className="content-text">
            <div className="hero-tag">Development</div>
            <h2>Τίτλος Έργου 02</h2>
            <p>
              Όταν προσθέτεις νέα έργα, απλώς αντέγραψε όλο το block του project.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Το Όνομά Σου | Professional Portfolio</p>
      </footer>
    </div>
  );
};

export default App;
import { useEffect, useState } from "react";

export default function App() {
  const [projects, setProjects] = useState<any[]>([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: ""
  });

  useEffect(() => {
    fetch("http://localhost:3001/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  const addProject = (e: any) => {
    e.preventDefault();

    fetch("http://localhost:3001/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => {
        setProjects([...projects, data]);
        setForm({ title: "", description: "", image: "" });
      });
  };

  return (
    <>
      <section className="hero">
        <div className="hero-tag">Creative Universe</div>
        <h1>Δημιουργούμε ιστορίες που μένουν αξέχαστες.</h1>
      </section>

      <section className="input-panel">
        <form onSubmit={addProject} className="input-group">
          <input
            placeholder="Τίτλος"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
          />
          <textarea
            placeholder="Περιγραφή"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
          />
          <input
            placeholder="Image URL"
            value={form.image}
            onChange={e => setForm({ ...form, image: e.target.value })}
          />
          <button className="add-btn">+ Προσθήκη</button>
        </form>
      </section>

      <div>
        {projects.map((p, i) => (
          <div key={p.id} className="content-block">
            <div className="content-image">
              <img src={p.image || "https://picsum.photos/800/600"} />
            </div>
            <div>
              <h2>{p.title}</h2>
              <p>{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
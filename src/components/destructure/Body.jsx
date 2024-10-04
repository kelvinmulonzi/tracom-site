
import logo from '/graduates.png';
import grad from '../../Assets/graduate1.jpg';

const Body = () => (
  <div>
    <img src={logo} alt="kampala" className="main-img" />
    <section className="graduates">
      <h1>Our Graduates</h1>
      <div className="graduates-container">
        <div className="graduates-card">
          <img src={grad} alt="graduate" className="graduate-img" />
          <h2>John Doe</h2>
          <p>Software Developer</p>
        </div>
        <div className="graduates-card">
        <img src={grad} alt="graduatess" className="graduate-img" />
          <h2>Jane Doe</h2>
          <p>Quality Assurance</p>
        </div>
        <div className="graduates-card">
        <img src={grad} alt="graduate" className="graduate-img" />
          <h2>James Doe</h2>
          <p>Business Analyst</p>
        </div>
      </div>
    </section>
  </div>
);

export default Body;
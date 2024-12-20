import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about__container page__section">
        <img
          className="about__image"
          src="https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYWlsc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Author Image"
        />
        <div className="about__description-container">
          <h2 className="about__description-title">About the author</h2>
          <p className="about__description-bio">
            Here is the bio. Here is the bio. Here is the bio. Here is the bio.
            Here is the bio. Here is the bio. Here is the bio. Here is the bio.
            Here is the bio. Here is the bio. Here is the bio. Here is the bio.
            Here is the bio. Here is the bio. Here is the bio. Here is the bio.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

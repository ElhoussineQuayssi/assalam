const ProjectSection = ({ title, description, backgroundImage }) => {
  return (
    <div className="bg-cover bg-center p-4 m-2 rounded-lg shadow-lg flex-grow" style={{ backgroundImage: `url(${backgroundImage})`, width: '30vw', height: '33.33vh' }}>
      <h2 className="text-2xl font-bold text-blue-500">{title}</h2>
      <p className="text-blue-500">{description}</p>
    </div>
  );
};

export default ProjectSection;

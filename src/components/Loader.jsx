function Loader() {
  return (
    <div className="loader-screen">
      <div className="loader-content">
        
        <img 
          src="/images/logo1.png" 
          alt="Joel Cauich Logo"
          className="loader-logo-img"
        />

        <div className="loader-spinner"></div>

        <p className="loader-text">Cargando portafolio...</p>
      </div>
    </div>
  );
}

export default Loader;
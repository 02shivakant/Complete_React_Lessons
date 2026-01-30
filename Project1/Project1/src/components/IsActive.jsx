import "./IsActive.css"

const IsActive = ({ title, isActive, onClick, children }) => {
  return (
    <div className="section">
      <button onClick={onClick}>
        {title}
      </button>

      {isActive && (
        <div className="section-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default IsActive;

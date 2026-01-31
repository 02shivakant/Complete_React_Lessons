function HoverBox() {
  return (
    <>
      <h2>Mouse Events</h2>
      <div
        onMouseEnter={(e) => e.target.style.background = "lightgreen"}
        onMouseLeave={(e) => e.target.style.background = "lightgray"}
        style={{
          width: "150px",
          height: "80px",
          background: "lightgray",
          textAlign: "center",
          lineHeight: "80px",
          marginTop: "10px"
        }}
      >
        Hover Me
      </div>
    </>
  );
}

export default HoverBox;

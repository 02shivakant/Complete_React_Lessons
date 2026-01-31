function KeyPress() {
  const handleKey = (e) => {
    if (e.key === "Enter") {
      alert("Enter key pressed!");
    }
  };

  return (
    <>
      <h2>Keyboard Event</h2>
      <input
        type="text"
        placeholder="Press Enter"
        onKeyDown={handleKey}
      />
    </>
  );
}

export default KeyPress;

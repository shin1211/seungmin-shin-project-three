const OldListSection = ({ children }) => {
  return (
    <section>
      <div className="wrapper">
        <ul className="old-list-container">
          {children}
        </ul>
      </div>
    </section>
  )
}

export default OldListSection;
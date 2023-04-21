// import React from "react";

// const Loading = () => {
//   return (
//     <section className="section">
//       <h1 className="section-title"> Loading ....</h1>
//     </section>
//   );
// };

// export default Loading;

const Loading = () => {
  return (
    <div className="d-flex justify-content-center text-primary" style={{ marginTop: "4rem" }}>
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
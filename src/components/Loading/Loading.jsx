import React, { Spinner } from "reactstrap";

const Loading = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="bg-primary d-flex justify-content-center"
    >
      <section className="align-self-center">
        <div class="spinner-grow" role="status">
          <span class="sr-only"></span>
        </div>
      </section>
    </div>
  );
};

export default Loading;

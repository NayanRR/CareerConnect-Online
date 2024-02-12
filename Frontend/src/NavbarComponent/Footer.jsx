import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="container my-5">
        <footer class="text-center text-lg-start text-color">
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div class="row">
                
                  <h5 class="text-uppercase text-color-second">
                    Connect Career Online
                  </h5>

                  <p>
                    Welcome to our Online Job Portal, where career dreams come
                    to life. Our user-friendly platform simplifies job
                    searching, offering a seamless experience for both job
                    seekers and employers.
                  </p>
                </div>
              </section>

                

            <hr class="mb-4" />

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3 text-color">Login from here</span>
                <Link to="/user/login" class="active">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-rounded bg-color custom-bg-text"
                  >
                    Log in
                  </button>
                </Link>
              </p>
            </section>

            <hr class="mb-4" />
          </div>

          <div class="text-center">
            © 2023 Copyright:
            <a class="text-color-3" href="/">
            Connect Career Online
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

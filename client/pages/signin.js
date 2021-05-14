import Layout from "../components/Layout";
import SigninComponent from "../components/auth/SigninComponent";
import Link from "next/link";

const Signin = () => {
  return (
    <Layout>
      <h2 className="text-center pt-4 pb-4">Sign In</h2>
      <div className="row">
        {/* <div className="col-md-8 offset-md-2"> */}
        <div className="col-md-6 offset-md-3">
          <SigninComponent />
        </div>
      </div>
      <div className="row">
        {/* <div className="col-md-8 offset-md-2 mt-2"> */}
        <div className="col-md-6 offset-md-3 mt-2">
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Signin;

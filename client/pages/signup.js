import Layout from "../components/Layout";
import SignupComponent from "../components/auth/SignupComponent";
import Link from "next/link";

const Signup = () => {
  return (
    <Layout>
      <div className="row">
        {/* <div className="col-md-8 offset-md-2"> */}
        <div className="col-md-6 offset-md-3">
          <SignupComponent />
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

export default Signup;

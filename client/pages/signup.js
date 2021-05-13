import Layout from "../components/Layout";
import SignupComponent from "../components/auth/SignupComponent";
import Link from "next/link";

const Signup = () => {
  return (
    <Layout>
      <SignupComponent />
      <Link href="/">
        <a>Home</a>
      </Link>
    </Layout>
  );
};

export default Signup;

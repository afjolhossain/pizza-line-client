import { Link, useLocation, useNavigate } from "react-router-dom";
import image1 from "../../../assets/images/splash-header-2.jpg";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import auth from "../../../firebase/firebase.init";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { createUser, loading, user, updateUserProfile, singInWithGoogle } =
    useAuth();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state || "/";
  const handleCreateAccount = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    form.reset();

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError(" Password must include at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError(" Password must include at least one lowercase letter.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log("sign in", result.user);

        // update user Profile
        const profile = {
          displayName: name,
        };
        updateProfile(auth.currentUser, profile)
          .then(() => {
            console.log("user profile updated");
          })
          .catch((error) => {
            console.log("user updated error", error);
          });
        setSuccess("User Created Successfully");
        navigate(from);
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleSignIn = () => {
    singInWithGoogle()
      .then((result) => {
        setSuccess(result.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
    navigate(from);
  };

  return (
    <div>
      <div
        className="hero min-h-96 "
        style={{
          opacity: "20px",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backgroundImage: `url(${image1})`,
        }}
      >
        <div className="hero-overlay "></div>
        <div className="hero-content text-neutral-content text-center  ">
          <div className=" ">
            <p className="uppercase text-6xl">Create Account</p>
            <Link to="/">
              <p className="uppercase mt-4 text-[#dc5547] font-Cormorant font-bold tracking-wider hover:underline">
                Back home
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto">
        <p className="text-3xl font-Cormorant text-center py-10">
          CREATE ACCOUNT
        </p>

        <form onSubmit={handleCreateAccount} className="space-y-4 text-center">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label"> Name</label>
            <input
              required
              name="name"
              type="text"
              className="input w-full"
              placeholder="Name"
            />
            <label className="label">Email</label>
            <input
              required
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              name="password"
              required
              type="password"
              className="input w-full"
              placeholder="Password"
            />

            <button className="btn btn-neutral mt-4 hover:shadow-md transition py-3">
              Login
            </button>
            {error && (
              <div role="alert" className="alert alert-warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>{error}</span>
              </div>
            )}

            <div
              className="flex items-center pt-4 space-x-1"
              bis_skin_checked="1"
            >
              <div
                className="flex-1 h-px sm:w-16 dark:bg-gray-300"
                bis_skin_checked="1"
              ></div>
              <p className="px-3 text-sm dark:text-gray-600">
                Login with social accounts
              </p>
              <div
                className="flex-1 h-px sm:w-16 dark:bg-gray-300"
                bis_skin_checked="1"
              ></div>
            </div>
            <button
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center gap-2 w-full  px-6 py-3 bg-white text-gray-700 border border-gray-300 shadow hover:shadow-md transition mt-3"
            >
              <FcGoogle className="text-2xl" />
              <span className="font-medium uppercase">Login with Google</span>
            </button>
            <button className="text-xs text-center sm:px-6 dark:text-gray-600">
              Allready have an account?
              <Link to="/login" className="underline dark:text-gray-800">
                Sign In
              </Link>
            </button>
          </fieldset>
          {success && (
            <div role="alert" className="alert alert-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{success}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;

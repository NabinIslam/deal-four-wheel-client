import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Register = () => {
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail] = useState('');
  const [token] = useToken(createdUserEmail);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  if (token) {
    navigate(from, { replace: true });
  }

  const handleRegister = data => {
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);

        updateUser(data.name)
          .then(() => {
            saveUser(
              data.name,
              data.email,
              data.sellerCheck ? 'seller' : undefined
            );
          })
          .catch(err => console.error(err));

        reset();
        toast.success('Registration successful');
      })
      .catch(err => console.error(err));
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        setCreatedUserEmail(email);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        saveUser(user.displayName, user.email, 'buyer');
        navigate(from, { replace: true });
        toast.success('Login successful');
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="h-[90vh]">
      <div className="container mx-auto h-full flex items-center justify-center px-4">
        <div className="w-96 mx-auto shadow-md p-8 rounded-xl border">
          <h2 className="text-center font-bold text-2xl">Register</h2>
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="flex flex-col gap-4"
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Name" />
              </div>
              <TextInput
                {...register('name', {
                  required: 'Full name is required',
                })}
                type="text"
              />
              {errors.name && (
                <p className="text-red-600">{errors.name?.message}</p>
              )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" />
              </div>
              <TextInput
                {...register('email', {
                  required: 'Email address is required',
                })}
                type="email"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Password" />
              </div>
              <TextInput
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be atleast 6 characters or longer',
                  },
                })}
                type="password"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Checkbox {...register('sellerCheck')} id="remember" />
              <Label htmlFor="remember">
                Please check to open a seller account on DealFourWheel
              </Label>
            </div>
            <Button className="bg-slate-800" type="submit">
              Register
            </Button>
          </form>
          <p className="mt-2 font-semibold">
            Already have an account?{' '}
            <Link to={'/login'} className="text-slate-700">
              Login
            </Link>
          </p>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray- font-semibold">
              OR
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <p className="text-center font-semibold mb-4">
            Please sign in with google to open a buyer account on DealFourWheel
          </p>
          <div>
            <Button
              className="mx-auto font-semibold"
              outline={true}
              gradientDuoTone="purpleToBlue"
              onClick={handleGoogleSignIn}
            >
              Sign in with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

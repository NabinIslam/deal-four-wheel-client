import {
  Button,
  FileInput,
  Label,
  Select,
  Textarea,
  TextInput,
} from 'flowbite-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import LoadingSpinner from '../components/LoadingSpinner';

const AddProduct = () => {
  const { user, loading } = useContext(AuthContext);

  const categories = useLoaderData();

  const imgHostKey = import.meta.env.VITE_APP_imgHostKey;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const handleAddProduct = data => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(imgData => {
        if (imgData.success) {
          const product = {
            name: data.productName,
            resalePrice: data.resalePrice,
            originalPrice: data.originalPrice,
            condition: data.condition,
            category: data.category,
            mobileNumber: data.mobileNumber,
            location: data.location,
            description: data.description,
            yearOfPurchase: data.yearOfPurchase,
            image: imgData.data.url,
            sellerEmail: user.email,
            sellerName: user.displayName,
          };

          fetch('https://dealfourwheel-server.vercel.app/products', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `baerer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(product),
          })
            .then(res => res.json())
            .then(result => {
              if (result.acknowledged) {
                reset();
                toast.success(`Product added successfully`);
                navigate('/dashboard/my-products');
              }
            });
        }
      });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold">Add A Product</h3>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="flex flex-col gap-4 my-5 max-w-md"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Product name" />
          </div>
          <TextInput
            {...register('productName', {
              required: "Products's name is required",
            })}
            type="text"
          />
          {errors.productName && (
            <p className="text-red-600">{errors.productName?.message}</p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="resalePrice" value="Resale Price" />
          </div>
          <TextInput
            {...register('resalePrice', {
              required: 'Resale price is required',
            })}
            type="number"
          />
          {errors.resalePrice && (
            <p className="text-red-600">{errors.resalePrice?.message}</p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="originalPrice" value="Original Price" />
          </div>
          <TextInput
            {...register('originalPrice', {
              required: 'Original Price is required',
            })}
            type="number"
          />
          {errors.originalPrice && (
            <p className="text-red-600">{errors.originalPrice?.message}</p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="condition" value="Condition" />
          </div>
          <Select
            {...register('condition', { required: 'Condition is required' })}
          >
            <option value="">Select a conditon</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
          </Select>
          {errors.condition && (
            <p className="text-red-600">{errors.condition?.message}</p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="category" value="Category" />
          </div>
          <Select
            {...register('category', { required: 'Category is required' })}
          >
            <option value="">Select a category</option>
            {categories.map(category => (
              <option key={category._id} value={category.category_name}>
                {category.category_name}
              </option>
            ))}
          </Select>
          {errors.category && (
            <p className="text-red-600">{errors.category?.message}</p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="mobileNumber" value="Mobile Number" />
          </div>
          <TextInput
            {...register('mobileNumber', {
              required: 'Mobile number is required',
            })}
            type="tel"
          />
          {errors.mobileNumber && (
            <p className="text-red-600">{errors.mobileNumber?.message}</p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="locaion" value="Location" />
          </div>
          <TextInput
            {...register('location', {
              required: 'Location is required',
            })}
            type="text"
          />
          {errors.location && (
            <p className="text-red-600">{errors.location?.message}</p>
          )}
        </div>
        <div id="textarea">
          <div className="mb-2 block">
            <Label htmlFor="description" value="Description" />
          </div>
          <Textarea
            {...register('description', {
              required: 'Description is required',
            })}
            rows={4}
          />
          {errors.description && (
            <p className="text-red-600">{errors.description?.message}</p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="yearOfPurchase" value="Year of purchase" />
          </div>
          <TextInput
            {...register('yearOfPurchase', {
              required: 'Year of purchase is required',
            })}
            type="number"
          />
          {errors.yearOfPurchase && (
            <p className="text-red-600">{errors.yearOfPurchase?.message}</p>
          )}
        </div>
        <div id="fileUpload">
          <div className="mb-2 block">
            <Label htmlFor="file" value="Product's Photo" />
          </div>
          <FileInput
            {...register('image', { required: "Product's photo is required" })}
            id="file"
          />
          {errors.image && (
            <p className="text-red-600">{errors.image?.message}</p>
          )}
        </div>
        <Button className="bg-slate-800 border-0" type="submit">
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;

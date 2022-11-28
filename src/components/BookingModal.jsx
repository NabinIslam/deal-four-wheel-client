import React, { useContext } from 'react';
import { Button, Modal, TextInput } from 'flowbite-react';
import { AuthContext } from '../contexts/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({ show, setShow, product, refetch }) => {
  const { user } = useContext(AuthContext);

  const handleAppointment = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const location = form.location.value;
    const price = form.price.value;

    const booking = {
      name,
      email,
      phone,
      price,
      location,
    };

    fetch('https://dealfourwheel-server.vercel.app/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `baerer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify(booking),
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          setShow(false);
          refetch();
          toast.success('Booking confirmed');
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <Modal show={show} onClose={() => setShow(false)}>
      <Modal.Header>{product.name}</Modal.Header>
      <Modal.Body>
        <form
          onSubmit={handleAppointment}
          className="flex flex-col gap-4 max-w-md mx-auto my-5"
        >
          <div>
            <TextInput
              name="name"
              type="text"
              defaultValue={user?.displayName}
              placeholder="Full Name"
              required={true}
              disabled
            />
          </div>
          <div>
            <TextInput name="phone" type="tel" placeholder="Phone Number" />
          </div>
          <div>
            <TextInput
              name="email"
              type="email"
              defaultValue={user?.email}
              placeholder="Email"
              required={true}
              disabled
            />
          </div>

          <div>
            <TextInput
              name="price"
              type="number"
              defaultValue={product.resalePrice}
              placeholder="Price"
              required={true}
              disabled
            />
          </div>

          <div>
            <TextInput
              name="location"
              type="text"
              placeholder="Meeting location"
              required={true}
            />
          </div>

          <Button
            className="bg-gradient-to-r from-primary to-secondary border-0"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default BookingModal;

import LoadingSpinner from '../components/LoadingSpinner';
import { useQuery } from '@tanstack/react-query';
import { Button, Table } from 'flowbite-react';

const MyOrders = () => {
  const {
    data: bookings = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['bookings'],
    queryFn: async () => {
      const res = await fetch(
        'https://dealfourwheel-server.vercel.app/bookings'
      );
      const data = await res.json();

      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold">My Orders</h3>
      <div className="mt-6">
        <Table>
          <Table.Head>
            <Table.HeadCell>Sl No.</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Phone</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Location</Table.HeadCell>
            <Table.HeadCell>Pay</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {bookings.map((booking, i) => (
              <Table.Row
                key={booking._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>{i + 1}</Table.Cell>

                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {booking.name}
                </Table.Cell>
                <Table.Cell>{booking.email}</Table.Cell>
                <Table.Cell>{booking.phone}</Table.Cell>
                <Table.Cell>{booking.price}</Table.Cell>
                <Table.Cell>{booking.location}</Table.Cell>
                <Table.Cell>
                  <Button>Pay</Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default MyOrders;

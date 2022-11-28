import { Button, Table } from 'flowbite-react';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../components/LoadingSpinner';
import toast from 'react-hot-toast';

const AllBuyers = () => {
  const {
    data: buyers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['buyers'],
    queryFn: async () => {
      const res = await fetch(
        'https://dealfourwheel-server.vercel.app/users/buyers'
      );
      const data = await res.json();

      return data;
    },
  });

  const handleDeleteBuyer = buyer => {
    fetch(`https://dealfourwheel-server.vercel.app/user/${buyer._id}`, {
      method: 'DELETE',
      headers: {
        authorization: `baerer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success('Buyer deleted successfully');
        }
      });
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold">All Users</h3>
      <div className="mt-6">
        <Table>
          <Table.Head>
            <Table.HeadCell>Sl No.</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {buyers.map((buyer, i) => (
              <Table.Row
                key={buyer._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>{i + 1}</Table.Cell>

                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {buyer.name}
                </Table.Cell>
                <Table.Cell>{buyer.email}</Table.Cell>
                <Table.Cell>
                  <Button
                    color="failure"
                    onClick={() => handleDeleteBuyer(buyer)}
                  >
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default AllBuyers;

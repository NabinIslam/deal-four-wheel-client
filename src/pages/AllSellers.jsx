import { Button, Table } from 'flowbite-react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import LoadingSpinner from '../components/LoadingSpinner';
import { BsAlarm } from 'react-icons/bs';
import verifiedTick from '../assets/verifiedTick.png';

const AllSellers = () => {
  const {
    data: sellers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['sellers'],
    queryFn: async () => {
      const res = await fetch(
        'https://dealfourwheel-server.vercel.app/users/sellers'
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteSeller = seller => {
    fetch(`https://dealfourwheel-server.vercel.app/user/${seller._id}`, {
      method: 'DELETE',
      headers: {
        authorization: `baerer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success('Seller deleted successfully');
        }
      });
  };

  const handleVerifySeller = seller => {
    fetch(`https://dealfourwheel-server.vercel.app/user/${seller._id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success('Seller verified successfully');
        }
      });
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-4">
      <div>
        <h3 className="text-xl font-semibold">All Users</h3>
        <div className="mt-6">
          <Table>
            <Table.Head>
              <Table.HeadCell>Sl No.</Table.HeadCell>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Varify</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {sellers.map((seller, i) => (
                <Table.Row
                  key={seller._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>{i + 1}</Table.Cell>

                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <p className="flex items-center">
                      {seller.name}
                      {seller.verified ? (
                        <span className="ml-1">
                          <img src={verifiedTick} alt="" />
                        </span>
                      ) : null}
                    </p>
                  </Table.Cell>
                  <Table.Cell>{seller.email}</Table.Cell>
                  <Table.Cell>
                    <Button onClick={() => handleVerifySeller(seller)}>
                      Verify
                    </Button>
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      color="failure"
                      onClick={() => handleDeleteSeller(seller)}
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
    </div>
  );
};

export default AllSellers;

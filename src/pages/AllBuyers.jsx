import { Button, Table } from 'flowbite-react';
import { useQuery } from '@tanstack/react-query';

const AllBuyers = () => {
  const { data: buyers = [], refetch } = useQuery({
    queryKey: ['buyers'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users/buyers');
      const data = await res.json();

      return data;
    },
  });

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
                    <Button color="failure">Delete</Button>
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

export default AllBuyers;

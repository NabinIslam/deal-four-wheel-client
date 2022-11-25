import { Button, Table } from 'flowbite-react';
import { useQuery } from '@tanstack/react-query';

const AllSellers = () => {
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ['sellers'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users/sellers');
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
              {sellers.map((seller, i) => (
                <Table.Row
                  key={seller._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>{i + 1}</Table.Cell>

                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {seller.name}
                  </Table.Cell>
                  <Table.Cell>{seller.email}</Table.Cell>
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

export default AllSellers;

import { useEffect, useState } from "react";
import { useGetUsers } from "../../entities/users/api";
import { UserCard } from "../../widgets/user-card";
import { Users } from "../../entities/users/model/";
import { SearchInput } from "../../widgets/search-input";

export const UsersList = () => {
  const { data, isLoading } = useGetUsers();

  const [users, setUsers] = useState<Users[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      setUsers(
        search !== ""
          ? users.filter(
              (user) =>
                user.username.toLowerCase().includes(search) ||
                user.phone.toLowerCase().includes(search) ||
                user.email.toLowerCase().includes(search),
            )
          : data,
      );
    }
  }, [search]);

  return (
    <main className="px-5 xl:px-16 my-20 grid grid-cols-1 gap-5 place-items-center">
      <SearchInput search={search} setSearch={setSearch} />
      {isLoading ? (
        <section className="text-center text-xl text-green ">
          Loading...
        </section>
      ) : (
        <section className="min-w-full text-center ">
          {users.length === 0 ? (
            <div className="text-xl text-green">No results</div>
          ) : (
            <section className="min-w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ">
              {users?.map((user) => <UserCard key={user.id} {...user} />)}
            </section>
          )}
        </section>
      )}
    </main>
  );
};

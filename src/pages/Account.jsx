import { Link, Outlet } from "react-router-dom";

function ProfileNavigation() {
  return (
    <main className="hidden grid-rows-3 gap-5 md:grid">
      <section>
        <h1 className="text-md font-bold">Manage My Account</h1>
        <section className="mt-2 flex flex-col gap-3 ps-5">
          <Link className="text-md text-gray-500" to="addressbook">
            Address Book
          </Link>
          <Link className="text-md text-gray-500" to="paymentoptions">
            My Payment Options
          </Link>
        </section>
      </section>
      <section>
        <h1 className="text-md font-bold">My Orders</h1>
        <section className="mt-2 flex flex-col gap-3 ps-5">
          <Link className="text-md text-gray-500" to="returns">
            My Returns
          </Link>
          <Link className="text-md text-gray-500" to="cancellations">
            My Cancellations
          </Link>
        </section>
      </section>
      {/* <section>
        <h1 className="text-md font-bold">My Wishlist</h1>
      </section> */}
    </main>
  );
}

export default function Account() {
  return (
    <main className="grid gap-5 md:grid-cols-[30%_70%]">
      <ProfileNavigation />
      <Outlet />
    </main>
  );
}

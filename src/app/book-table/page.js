import { Suspense } from "react";
import BookATableClient from "@/components/tables/BookATableClient";
import NavBar from "@/components/Navbar";
import BurgerMenu from "@/components/Burger";
import Banner from "@/components/Banner";
import Image from "next/image";
import BookTableData from "@/components/tables/BookTableData";

const BookATablePage = ({ searchParams }) => {
  return (
    <div>
      <NavBar />
      <BurgerMenu />
      <Banner title="BOOK TABLE" />
      <Suspense
        fallback={
          <div className="flex justify-center items-center py-20">
            <Image src="/assets/loader/madbars.gif" alt="Henter..." width={80} height={80} unoptimized />
          </div>
        }
      >
        <BookTableData searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default BookATablePage;

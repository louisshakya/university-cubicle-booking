import React from "react";
import { Button } from "@nextui-org/react";
import { BookMark } from "../components/BookMark";
const HomePage = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center p-24 space-y-5">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            CUBICLE
          </span>{" "}
          BOOKING
        </h1>
        <p>
          Bookable spaces Cubicle Station offers bookable spaces in The Commons
          and EME buildings for all Cubicle members, and staff. Before you book
          space in the Commons building, please be aware of the following
          policies as they relate to all room bookings.
        </p>
        <Button
          className="max-w-72 text-xl text-center bg-gradient-to-r to-emerald-600 from-sky-400"
          radius="lg"
          size="lg"
          startContent={<BookMark />}
        >
          Book Your Space
        </Button>
      </div>
    </>
  );
};

export default HomePage;

import React from "react";

const Products = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 lg:mt-10 mx-auto">
          <div className="full rounded-lg bg-transparent">
            <img
              src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg"
              alt="Assorted Coffee"
            />
            <div className="flex justify-center items-center">
              <h1 className="text-xl text-gray-500">Groceries</h1>
              Assorted Coffee
            </div>
            <div className="flex justify-center items-center">
              <h1 className="font-bold text-xl font-sans">
                Assorted Coffee
                <br />
                <p className="text-xs">E$45</p>
              </h1>
            </div>
          </div>

          <div className="full rounded-lg bg-transparent">
            <img
              src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-300x300.jpg"
              alt="Sanitizer"
            />
            <div className="flex justify-center items-center">
              <h1 className="text-xl text-gray-500">Groceries</h1>
              Assorted Coffee
            </div>
            <div className="flex justify-center items-center">
              <h1 className="font-bold text-xl font-sans">
                Assorted Coffee
                <br />
                <p className="text-xs">E$45</p>
              </h1>
            </div>
          </div>

          <div className="full rounded-lg bg-transparent">
            <img
              src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-300x300.jpg"
              alt="Red Chillies"
            />
            <div className="flex justify-center items-center">
              <h1 className="text-xl text-gray-500">Groceries</h1>
              Assorted Coffee
            </div>
            <div className="flex justify-center items-center">
              <h1 className="font-bold text-xl font-sans">
                Assorted Coffee
                <br />
                <p className="text-xs">E$45</p>
              </h1>
            </div>
          </div>

          <div className="full rounded-lg bg-transparent">
            <img
              src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil-300x300.jpg"
              alt="Edible Oil"
            />
            <div className="flex justify-center items-center">
              <h1 className="text-xl text-gray-500">Groceries</h1>
              Assorted Coffee
            </div>
            <div className="flex justify-center items-center">
              <h1 className="font-bold text-xl font-sans">
                Assorted Coffee
                <br />
                <p className="text-xs">E$45</p>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

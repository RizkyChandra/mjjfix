const index = () => {
  return (
    <div className="w-full my-12">
      <div className="h-auto w-11/12 flex flex-row bg-blue-400 items-center justify-around mx-auto space-x-6 px-12 py-16">
        <img className="bg-indigo-500 w-96 h-96" />
        <div className="flex flex-col space-y-6">
          <h1 className="text-white text-xl">
            Gapai Rumah impian bersama kami
          </h1>
          <button className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
            Lebih Lanjut
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;

const Subscription = () => {
  return (
    <div className="text-center">
      <div>
        <h2 className="text-xl font-bold lg:text-3xl py-2 underline">Subscribe</h2>
        <div className="w-full lg:w-[40%] mx-auto mb-8">
          <p>
            Make payment into the below account details, and share the receipt
            of your payment via our whatsApp by clicking the wa.me below.{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center mb-10  bg-red-600 py-2">
        <div className="my-5 md:my-0 w-full lg:w-[40%]">
          <h3 className="text-xl font-bold lg:text-2xl underline py-2">Account Details</h3>
          <p>Account Name:Owoola muhammed Ayodele</p>
          <p>Account Number:(dollar account: 0891259731) (Pounds account:0891259748) (Euro account:0891259755)</p>
          <p>Bank Name:Guaranty Trust Bank</p>
        </div>

        <div className="my-5 md:my-0 w-full lg:w-[40%]">
          <h3 className="text-xl font-bold lg:text-2xl underline py-2">Share Receipt</h3>
          <p className="w-[60%] text-center mx-auto">
            click on the share button below to share payment receipt on whatsApp
          </p>
          <a href=" https://wa.me/+2347061958073" target="_blank"> 
            <button className="bg-green-500 hover:bg-green-800 py-3 px-8 rounded-md mt-5">Share</button>
          </a>
        </div>

        <div className="my-5 md:my-0 w-full lg:w-[40%]">
          <h3 className="text-xl font-bold lg:text-2xl underline py-2">Amount</h3>
          <p>Depends on course, hours and duration.</p>
        </div>

      </div>
    </div>
  );
};

export default Subscription;

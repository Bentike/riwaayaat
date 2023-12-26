const Subscription = () => {
  return (
    <div className="text-center">
      <div>
        <h2 className="lg:text-3xl py-2">Subscribe</h2>
        <div className="w-[40%] mx-auto mb-8">
          <p>
            Make payment into the below account details, and share the receipt
            of your payment via our whatsApp by clicking the wa.me below.{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-around mb-10">
        <div>
          <h3 className="lg:text-2xl underline py-2">Account Details</h3>
          <p>Account Name:</p>
          <p>Account Number:</p>
          <p>Bank Name:</p>
        </div>

        <div>
          <h3 className="lg:text-2xl underline py-2">Share Receipt</h3>
          <p className="w-[60%] text-center mx-auto">
            click on the share button below to share payment receipt on whatsApp
          </p>
          <a href=" https://wa.me/+2347061958073" target="_blank"> 
            <button className="bg-green-500 py-3 px-8 rounded-md mt-5">Share</button>
          </a>
        </div>

        <div>
          <h3 className="lg:text-2xl underline py-2">Amount</h3>
          <p>Depends on course, hours and duration.</p>
        </div>
      </div>
    </div>
  );
};

export default Subscription;

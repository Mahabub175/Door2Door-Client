import allPayment from "../../../assets/images/allPayment.png";

const PaymentInfo = () => {
  return (
    <section>
      <h2 className="text-2xl font-medium mb-4">Payment Method</h2>
      <img src={allPayment} alt="allPayment" className="w-full" />
    </section>
  );
};

export default PaymentInfo;

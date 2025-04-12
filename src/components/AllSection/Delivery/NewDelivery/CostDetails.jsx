const CostDetails = () => {
  return (
    <section className="bg-white p-5 rounded-lg lg:w-3/12">
      <div>
        <h4 className="text-lg font-medium">Cost Of Delivery</h4>
        <div className="flex items-center justify-between mt-4">
          <p className="text-base font-medium text-textColor">Delivery Fee</p>
          <p className="text-base font-medium">$60</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-base font-medium text-textColor">COD Fee</p>
          <p className="text-base font-medium">$0</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-base font-medium text-textColor">Discount</p>
          <p className="text-base font-medium">$0</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-base font-medium text-textColor">Promo Discount</p>
          <p className="text-base font-medium">$0</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-base font-medium text-textColor">
            Additional Charge
          </p>
          <p className="text-base font-medium">$0</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-base font-medium text-textColor">
            Compensation Cost
          </p>
          <p className="text-base font-medium">$0</p>
        </div>
        <div className="border-t pt-4 mt-4"></div>
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium">Total Cost</p>
          <p className="text-lg font-medium">$60</p>
        </div>
      </div>
      <div>
        <p className="text-base font-medium text-textColor mt-6">
          Cost might vary depending upon the delivery situations and other
          circumstances. <br /> For details:{" "}
          <span className="text-primary">Check the Pricing Plan</span> <br />{" "}
          <br /> ** Pickup Last Entry Time 4 pm ** On Demand / Express / Fragile
          Last Entry Time 12:30 pm, Maximum size of any product should not be
          over 2CFT (In general) <br /> <br /> ** Use Fragile Type for
          Cosmetics, Liquid grocery, Herbals, Gift Items,Electronic gadgets,
          Lights , Glass items, Food items (dry) <br /> <br /> ** Use Express
          Delivery Inside Dhaka (2-3 hours) for Cooked Foods and other emergency
          delivery <br /> <br /> ** Inside Dhaka Normal Delivery will take 24-48
          hours, On Demand & Fragile take 8 hours, Out Side Dhaka it may take
          3-5 days
        </p>
      </div>
    </section>
  );
};

export default CostDetails;

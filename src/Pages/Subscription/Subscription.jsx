import { Helmet } from "react-helmet-async";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import PricingPlans from "../Home/PricingPlans/PricingPlans";

const Subscription = () => {
    return (
        <div>
             <Helmet>
        <title>Express Times | Subscription</title>
      </Helmet>
             <PageTitle
          pageTitle={"Stay Informed with Our Flexible "}
          animateTitle={"Subscription"}
        ></PageTitle>
        <div>
            <PricingPlans></PricingPlans>
        </div>
        </div>
    );
};

export default Subscription;
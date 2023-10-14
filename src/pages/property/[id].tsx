import HeadContent from "@/components/HeadContent";
import { LayoutMain } from "@/components/layout";
import PropertyDetails from "@/modules/property/PropertyDetails";
import React from "react";
// https://something.api/property/abc-land -> PropertyDetailsPage
const PropertyDetailsPage = () => {
    return (
        <LayoutMain>
            <PropertyDetails></PropertyDetails>
        </LayoutMain>
    );
};

export default PropertyDetailsPage;

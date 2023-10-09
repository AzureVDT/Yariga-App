import { useRouter } from "next/router";
import React from "react";

const PropertySlugPage = () => {
    const slug = useRouter();
    return (
        <div>
            <h1>Property Slug Page</h1>
        </div>
    );
};

export default PropertySlugPage;

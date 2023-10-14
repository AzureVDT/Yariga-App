import { LayoutMain } from "@/components/layout";
import { addNewProperty } from "@/store/properties.service";
import React from "react";
import { useMutation, useQueryClient } from "react-query";

const PropertyCreatePage = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: addNewProperty,
        onSuccess: async () => {
            await queryClient.prefetchQuery({
                queryKey: ["properties"],
                queryFn: addNewProperty,
            });
        },
    });
    const handleCreateNewProperty = () => {
        mutation.mutate();
    };
    return (
        <LayoutMain>
            <button onClick={handleCreateNewProperty}>Create Property</button>
        </LayoutMain>
    );
};

export default PropertyCreatePage;

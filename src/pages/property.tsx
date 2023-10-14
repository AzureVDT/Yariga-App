import { LayoutMain } from "@/components/layout";
import PropertyItem from "@/modules/property/PropertyItem";
import { getProperties } from "@/store/properties.service";
import { PropertyItemData } from "@/types/property.types";
import React from "react";
import { useQuery } from "react-query";

const Property = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["properties"],
        queryFn: getProperties,
        refetchOnWindowFocus: false, // khi nhấn vào window sẽ fetch lại dữ liệu
        cacheTime: 24 * 10 * 60 * 60 * 1000, // thời gian lưu cache > stale: 1 day
        staleTime: 24 * 5 * 60 * 60 * 1000, // thời gian lấy dữ liệu từ cache: 1/2 day
    });
    const properties = data;
    return (
        <LayoutMain>
            <div className="flex items-center justify-between mb-5">
                <h1 className="font-bold text-[25px]">Property List</h1>
                <button
                    className="flex items-center justify-center py-3 px-5 text-white bg-primary
                    rounded-[10px] text-sm font-medium leading-normal"
                >
                    + Add Property
                </button>
            </div>
            <div className="p-5 bg-white rounded-2xl">
                <div aria-label="filter"></div>
                <div
                    aria-label="list"
                    className="grid grid-cols-2 gap-x-16 gap-y-6 mb-9"
                >
                    {properties &&
                        properties.length > 0 &&
                        properties.map((item: PropertyItemData) => (
                            <PropertyItem
                                key={item.id}
                                item={item}
                            ></PropertyItem>
                        ))}
                </div>
                <div
                    aria-label="pagination"
                    className="flex items-center justify-between"
                >
                    <p className="text-gray80">Showing 1 to 10 Propertys</p>
                    <div className="flex items-center gap-[10px]">
                        <button className="flex items-center justify-center text-white rounded-lg w-9 h-9 bg-primary">
                            1
                        </button>
                        <button className="flex items-center justify-center rounded-lg w-9 text-gray80 h-9">
                            2
                        </button>
                    </div>
                </div>
            </div>
        </LayoutMain>
    );
};

export default Property;

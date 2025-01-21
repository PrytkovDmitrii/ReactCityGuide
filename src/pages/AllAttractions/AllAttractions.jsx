import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AttractionsList from "./AttractionsList";
import "../../assest/css/allAttract.scss";

const queryClient = new QueryClient();

function AllAttractions() {
  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <AttractionsList />
      </QueryClientProvider>
    </div>
  );
}

export default AllAttractions;

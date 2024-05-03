import { db } from "@/lib/firebase";
import { Cuisine } from "@/types-db";
import { doc, getDoc } from "firebase/firestore";
import { CuisineForm } from "./_components/cuisine-form";

const KitchenPage = async ({
  params,
}: {
  params: {
    cuisineId: string;
    storeId: string;
  };
}) => {
  const cuisine = (
    await getDoc(
      doc(db, "stores", params.storeId, "cuisines", params.cuisineId)
    )
  ).data() as Cuisine;

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CuisineForm initialData={cuisine} />
      </div>
    </div>
  );
};

export default KitchenPage;

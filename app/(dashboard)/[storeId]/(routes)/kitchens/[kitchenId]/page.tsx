import { db } from "@/lib/firebase";
import { Kitchen, Size } from "@/types-db";
import { doc, getDoc } from "firebase/firestore";
import { KitchenForm } from "./_components/kitchen-form";

const KitchenPage = async ({
  params,
}: {
  params: {
    kitchenId: string;
    storeId: string;
  };
}) => {
  const kitchen = (
    await getDoc(
      doc(db, "stores", params.storeId, "kitchens", params.kitchenId)
    )
  ).data() as Kitchen;

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <KitchenForm initialData={kitchen} />
      </div>
    </div>
  );
};

export default KitchenPage;

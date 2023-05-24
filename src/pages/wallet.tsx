import { Meta } from "@/components/ui/elements/seo/meta";
import { WalletPage } from "@/components/screens/home/wallet";

export default function Wallets() {
  return (
    <>
      <Meta
        title={"Wallet Page"}
        description="Последняя страница тестового задания."
      />
      <WalletPage />
    </>
  );
}

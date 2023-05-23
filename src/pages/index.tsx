import { HomePage } from "@/components/screens/home/home";
import { Meta } from "@/components/ui/elements/seo/meta";

export default function Home() {
  return (
    <>
      <Meta
        title={"Main Page"}
        description="Главная страница тестового задания."
      />
      <HomePage />
    </>
  );
}

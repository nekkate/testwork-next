import { Meta } from "@/components/ui/elements/seo/meta";
import { SettingPage } from "@/components/screens/home/setting";

export default function Setting() {
  return (
    <>
      <Meta title={"Setting Page"} description="Еще одна страница тестового задания"/>
      <SettingPage />
    </>
  );
}

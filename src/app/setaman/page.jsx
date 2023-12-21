import MyTabs from "@/components/tabs/tab";
import Semai from "./semai";
import Tanam from "./tanam";

const tabs = [
  { label: "Semai", content: <Semai /> },
  { label: "Tanam", content: <Tanam /> },
];

const Setaman = () => {
  return (
    <div>
      <MyTabs tabs={tabs} />
    </div>
  );
};

export default Setaman;

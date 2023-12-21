"use client";
import { Tab } from "@headlessui/react";

export default function MyTabs({ tabs }) {
  return (
    <Tab.Group>
      <Tab.List className={"flex gap-2 mb-2"}>
        {tabs.map((item, index) => {
          return (
            <Tab
              key={index}
              className={"btn btn-md rounded-lg bg-gray-500 text-white px-7"}
            >
              {item.label}
            </Tab>
          );
        })}
      </Tab.List>
      <Tab.Panels>
        {tabs.map((contents, index) => {
          return <Tab.Panel key={index}>{contents.content}</Tab.Panel>;
        })}
      </Tab.Panels>
    </Tab.Group>
  );
}

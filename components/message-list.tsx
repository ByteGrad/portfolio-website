"use client";

import { useState, useEffect } from "react";
import { Messages } from "@/lib/interfaces";
import { useFetch } from "@/context/fetch-data";
import Dropdown from "@/components/dropdown";

export default function MessageList() {
  const [messages, loading] = useFetch<Messages>(
    `${process.env.baseUrl}?collection_name=monolith&skip=0&limit=32`,
  );
  const [selectedMessage, setSelectedMessage] = useState<Messages | null>(null);

  const handleDropdownChange = (selectedItem: Messages) => {
    setSelectedMessage(selectedItem);
  };

  const convertDate = (date: string | undefined) => {
    if (!date) return "";
    return new Date(date).toString();
  };

  useEffect(() => {
    if (selectedMessage) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }, [selectedMessage]);

  return (
    <div className="w-full max-w-[500px]">
      <Dropdown<any>
        items={messages.map((item, index) => ({
          ...item,
          id: item.id || `id-${index}`,
        }))}
        loading={loading}
        placeholder="Please select one item"
        keyName="name"
        keyValue="id"
        onChange={handleDropdownChange}
      />

      {selectedMessage && (
        <div className="w-full my-10">
          <h2 className="text-3xl font-bold mb-3 px-1">Selected Item:</h2>

          <div className="rounded-lg bg-white bg-opacity-80 shadow-sm dark:bg-gray-800 dark:bg-opacity-80 p-5">
            <div>Name: {selectedMessage.name}</div>
            <div className="whitespace-pre-line">
              Message: {selectedMessage.message}
            </div>
            <div className="my-3 border-t-[1px] border-t-gray-300 dark:border-t-white w-full" />
            <div className="text-sm">
              {convertDate(selectedMessage.created_at)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

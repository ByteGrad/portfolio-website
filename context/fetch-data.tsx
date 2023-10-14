import { useEffect, useState } from "react";

export function useFetch<T>(url: string): [T[], boolean] {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url);

        const data = await response.json();
        setItems(data?.rows || []);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    };

    fetchData();
  }, [url]);

  return [items, loading];
}

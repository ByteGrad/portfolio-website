import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView, IntersectionOptions } from "react-intersection-observer";
import type { SectionName } from "./data";

export function useSectionInView(
  sectionName: SectionName,
  opts?: IntersectionOptions
) {
  const { ref, inView } = useInView({
    ...opts,
    threshold: opts?.threshold ?? 0.75
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
    inView
  };
}

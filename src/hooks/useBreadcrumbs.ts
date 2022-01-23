import { useEffect } from "react";

import {
  Breadcrumbs,
  useSetBreadcrumbsContext,
} from "../contexts/BreadcrumbsContext";

export const useBreadcrumbs = (breadcrumbs: Breadcrumbs) => {
  const setBreadcrumbs = useSetBreadcrumbsContext();

  useEffect(() => {
    setBreadcrumbs(breadcrumbs);

    return () => {
      // MEMO:
      // Pageでパンくずをセットし忘れてしまったときに、
      // 以前の状態を引き継がないように、アンマウント時に空にする
      setBreadcrumbs([]);
    };
  }, [breadcrumbs, setBreadcrumbs]);
};

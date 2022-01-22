import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type Breadcrumbs = {
  title: string;
  to?: string;
}[];

const BreadcrumbsContext = createContext<Breadcrumbs>([]);

const SetBreadcrumbsContext = createContext<
  Dispatch<SetStateAction<Breadcrumbs>>
>(() => {
  // initial state
});

export const useBreadcrumbsContext = () => {
  return useContext(BreadcrumbsContext);
};
export const useSetBreadcrumbsContext = () => {
  return useContext(SetBreadcrumbsContext);
};

export const BreadcrumbsProvider = (props: {
  initialState?: Breadcrumbs;
  children: ReactNode;
}): JSX.Element => {
  const { initialState, children } = props;
  const [breadcrumbs, setBreadcrumbs] = useState(initialState ?? []);

  return (
    <BreadcrumbsContext.Provider value={breadcrumbs}>
      <SetBreadcrumbsContext.Provider value={setBreadcrumbs}>
        {children}
      </SetBreadcrumbsContext.Provider>
    </BreadcrumbsContext.Provider>
  );
};

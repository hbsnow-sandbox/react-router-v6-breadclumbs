import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  PropsWithChildren,
} from "react";

export type Props = Readonly<
  PropsWithChildren<Omit<ComponentPropsWithoutRef<"button">, "className">>
>;

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return <button ref={ref} data-testid="button" {...props} />;
});
Button.displayName = "Button";

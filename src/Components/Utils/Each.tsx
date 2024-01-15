import React, { ReactNode } from "react";

export const Each = <T,>({
  render,
  of,
}: {
  render: (item: T, index: number) => ReactNode,
  of: T[],
}) => {
  return (
    <>
      {React.Children.toArray(of.map((item, index) => render(item, index)))}
    </>
  );
};

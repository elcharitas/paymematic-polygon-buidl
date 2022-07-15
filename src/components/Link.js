import NextLink from "next/link";

export const Link = ({ href, shallow = true, ...props }) => {
  return (
    <NextLink href={href} shallow={shallow}>
      <a {...props}></a>
    </NextLink>
  );
};

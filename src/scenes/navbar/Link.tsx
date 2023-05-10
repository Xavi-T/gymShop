import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

export default function Link({ page, selectedPage, setSelectedPage }: Props) {
  const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "");
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : "transition duration-500 hover:text-primary-300"}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      href={`#${lowerCasePage}`}
    >
      {page}
    </AnchorLink>
  );
}

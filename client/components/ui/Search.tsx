import { Search as FaSearch } from "@styled-icons/fa-solid";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem;
  margin: 0 3rem;
  border-radius: 2.5rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.background.highlight};
`;

const SearchIcon = styled(FaSearch)`
  flex: 0 0 3rem;
  color: ${({ theme }) => theme.color.secondary};
`;

const SearchForm = styled.form`
  display: flex;
  flex: 1;
`;

const SearchInput = styled.input`
  flex: 1;
  outline: none;
  border: none;
  font-size: ${({ theme }) => theme.font.input.large};
  margin-left: 1rem;
  background-color: inherit;
`;

export const Search = () => {
  const router = useRouter();
  const [search, setSearch] = useState<typeof router.query.search>("");

  useEffect(() => {
    setSearch(router.query.search || "");
  }, [router.query.search]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    router.push("/search?search=" + search);
  };
  return (
    <SearchContainer>
      <SearchIcon size="30" />
      <SearchForm onSubmit={handleSearch} method="GET">
        <SearchInput
          name="search"
          placeholder="Search for products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchForm>
    </SearchContainer>
  );
};

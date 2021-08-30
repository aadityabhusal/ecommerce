import Image from "next/image";
import styled from "styled-components";
import { Link } from "./Link";

const LogoContainer = styled.div``;

export const Logo = () => {
  return (
    <LogoContainer>
      <Link href="/">
        <Image
          height={75}
          width={256}
          alt="Gharagan Logo"
          title="Home"
          src="/home-logo.jpg"
        />
      </Link>
    </LogoContainer>
  );
};

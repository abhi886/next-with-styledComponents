import React from "react";
import styled from "styled-components";

const SkeletonDiv = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  background: black;
`;

const SBanner = styled.div`
  padding: 12% 0;
`;

export default function Skeleton() {
  return (
    <SkeletonDiv>
      <SBanner></SBanner>
      <SBanner></SBanner>
      <SBanner></SBanner>
    </SkeletonDiv>
  );
}

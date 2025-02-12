// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { IERC1363$Type } from "./IERC1363";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["IERC1363"]: IERC1363$Type;
    ["@openzeppelin/contracts/interfaces/IERC1363.sol:IERC1363"]: IERC1363$Type;
  }

  interface ContractTypesMap {
    ["IERC1363"]: GetContractReturnType<IERC1363$Type["abi"]>;
    ["@openzeppelin/contracts/interfaces/IERC1363.sol:IERC1363"]: GetContractReturnType<IERC1363$Type["abi"]>;
  }
}

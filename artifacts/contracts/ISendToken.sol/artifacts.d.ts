// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { ISendToken$Type } from "./ISendToken";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["ISendToken"]: ISendToken$Type;
    ["contracts/ISendToken.sol:ISendToken"]: ISendToken$Type;
  }

  interface ContractTypesMap {
    ["ISendToken"]: GetContractReturnType<ISendToken$Type["abi"]>;
    ["contracts/ISendToken.sol:ISendToken"]: GetContractReturnType<ISendToken$Type["abi"]>;
  }
}

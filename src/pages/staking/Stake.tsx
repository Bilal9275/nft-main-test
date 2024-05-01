import Divider from "@/components/_global/Divider";
import { NFTCarousel } from "@/components/_global/Home/HeroSection/NFTCarousel";
import { nfts } from "@/components/_global/Home/HeroSection/constant";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import DropDown from "../../components/_global/Staking/DropdownList";
import NFTCarouselStake from "../../components/_global/Staking/NFTCarousel";
// import ConnectButton from "@/components/_global/Buttons/ConnectButton";
import { Input } from "@/components/ui/input";
import { StaticImageData } from "next/image";
// import {
//   useAccount,
//   useWriteContract,
//   useWaitForTransactionReceipt,
// } from "wagmi";
import { contractAddress, contractAbi } from "../../constant/contract";
import Web3 from "web3";
import WalletConnection from "./WalletConnection";

const jsonRpcURL = [
  "https://rpc.pulsechain.com",
  "https://pulsechain-rpc.publicnode.com",
  "https://evex.cloud/pulserpc",
  "https://pulse-s.projectpi.xyz",
  "https://rpc-pulsechain.g4mm4.io",
];

const web3 = new Web3(jsonRpcURL as any);

const Stake = () => {
  const [selected, setSelected] = useState(null as any);
  // const { address } = useAccount();
  // const { data: hash, error: hashError, writeContract } = useWriteContract();
  // const { isLoading: isConfirming, isSuccess: isConfirmed } =
  //   useWaitForTransactionReceipt({
  //     hash,
  //   });

  const handleSelected = (value: any) => {
    console.log(value);
    setSelected(value);
  };

  // const handleStake = async () => {
  //   writeContract({
  //     address: contractAddress,
  //     abi: contractAbi,
  //     functionName: "stakeNFT",
  //     chainId: 369,
  //     args: ["0x54A4E897F636E05A6a5cc35AD5F7b1e55D427E85", "1"],
  //   });
  // };

  // useEffect(() => {
  //   const connectToRPC = async () => {
  //     let web3;
  //     for (const url of jsonRpcURL) {
  //       try {
  //         web3 = new Web3(url);
  //         const isListening = await web3.eth.net.isListening();
  //         if (isListening) {
  //           console.log(`Connected to RPC at ${url}`);
  //           break; // Stop iterating if connection is successful
  //         }
  //       } catch (error) {
  //         console.error(`Failed to connect to RPC at ${url}: ${error.message}`);
  //       }
  //     }

  //     if (!web3) {
  //       console.error("Unable to connect to any RPC URL.");
  //     }
  //   };

  //   connectToRPC();
  // }, []);

  return (
    <>
      <div
        style={{
          background: "url(/background.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
          // maxHeight: '100vh'
        }}
      >
        <div className="py-10">
          <div className="container max-w-2xl md:max-w-3xl ">
            <Card className="p-4">
              <h2 className="text-center font-extrabold  uppercase text-4xl text-[#fdd122] drop-shadow-md">
                Staking Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                <Card className="p-2">
                  <div className="h-[200px]">
                    <h3 className="font-bold mb-2 text-xl text-[#fdd122]  bg-white rounded-[6px] p-[10px] text-center">
                      NFT
                    </h3>
                    <Divider />
                    <div className="flex justify-center items-center h-[80%]">
                      <p className=" text-2xl">Stake</p>
                    </div>
                  </div>
                </Card>
                {/* 2nd card */}
                <Card className="p-2">
                  <div className="h-[200px]">
                    <h3 className="font-bold mb-2 text-xl text-[#fdd122]  bg-white rounded-[6px] p-[10px] text-center">
                      Good Token
                    </h3>
                    <Divider />
                    <div className="flex justify-center items-center h-[80%]">
                      <p className=" text-2xl">Stake: 1000</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-2">
                  <div className="h-[200px]">
                    <h3 className="font-bold mb-2 text-xl text-[#fdd122]  bg-white rounded-[6px] p-[10px] text-center">
                      LP Token
                    </h3>
                    <Divider />
                    <div className="flex justify-center items-center h-[80%]">
                      <p className=" text-2xl">Stake: 10,000</p>
                    </div>
                  </div>
                </Card>
              </div>
              <Card className="mt-5">
                <div className="p-2">
                  {/* <h3 className='font-bold mb-2 text-xl'>Reward</h3>
                <Divider /> */}
                  <div className="flex justify-center items-center h-[80%] ">
                    <p className=" text-xl bg-white rounded-[7px]">
                      Reward: 0.001 GOOD
                    </p>
                  </div>
                </div>
              </Card>
            </Card>

            <Card className="my-10 p-5 shadow-sm">
              <Card className="flex justify-center items-center">
                <NFTCarouselStake nfts={nfts} />
              </Card>
              <div className="mt-10 mb-5 p-5 space-y-4 flex justify-center items-center flex-col">
                <DropDown selected={selected} onSelect={handleSelected} />

                {
                  <Input
                    placeholder="Enter NFT Id"
                    className=" placeholder-black text-black w-44"
                  />
                }
                <div className="md:space-x-5 space-y-5 md:space-y-0 w-full flex justify-center items-center flex-col md:flex-row">
                  <Button className="w-full md:w-fit" >
                    Stake
                  </Button>
                  <Button className="w-full md:w-fit">Claim</Button>
                  <Button className="w-full md:w-fit">UnStake</Button>
                </div>
                {/* {address && (
                  <div>{address.slice(0, 5) + "..." + address.slice(-5)}</div>
                )} */}
                <WalletConnection />
                {/* <Button size={"sm"}> */}
                  {/* Connect Wallet */}
                  {/* <ConnectButton /> */}
                {/* </Button> */}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stake;

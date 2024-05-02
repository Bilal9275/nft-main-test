"use client";
import Divider from "@/components/_global/Divider";
import { NFTCarousel } from "@/components/_global/Home/HeroSection/NFTCarousel";
import { nfts } from "@/components/_global/Home/HeroSection/constant";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import DropDown from "../../components/_global/Staking/DropdownList";
import NFTCarouselStake from "../../components/_global/Staking/NFTCarousel";
import { Input } from "@/components/ui/input";
import { StaticImageData } from "next/image";
import { contractAddress, contractAbi } from "../../constant/contract";
import Web3 from "web3";
import WalletConnection from "./WalletConnection";
import { nftAbi } from "@/constant/nftContract";
import Landing from "@/components/home/Landing";
import { toast } from "react-toastify";
import { tokenAbi } from "@/constant/tokenContract";

const jsonRpcURL = [
  "https://rpc.pulsechain.com",
  "https://pulsechain-rpc.publicnode.com",
  "https://evex.cloud/pulserpc",
  "https://pulse-s.projectpi.xyz",
  "https://rpc-pulsechain.g4mm4.io",
];



const Stake = () => {
  const web3 = new Web3(window.ethereum as any);
  const [selected, setSelected] = useState(null as any);
  const [buttonValue, getButtonValue] = useState<any>("");
  const [inputValue, setInputValue] = useState<any>("");
  const [value, setValue] = useState("");
  const [contractName, setContractName] = useState("");
  const [contractAddresss, setContractAddress] = useState<any>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [claimLoading,setClaimLoading] = useState<boolean>(false);
  const NFTstakingContract = () => {
    const nft_Contract = new web3.eth.Contract(contractAbi, contractAddress);
    return nft_Contract;
  };
  const handleSelected = (value: any) => {
    if (value == "GEHENNAPOWER NFT") {
      setContractName("GEHENNAPOWER NFT");
      setContractAddress("0x54A4E897F636E05A6a5cc35AD5F7b1e55D427E85");
      getButtonValue("NFT");
      setInputValue("NFT Id");
    } else if (value == "AMAZONIAPOWER NFT") {
      setContractName("AMAZONIAPOWER NFT");
      setContractAddress("0xB95bA4f865E37F7Cd129454B998a2FFec46a6f2E");
      getButtonValue("NFT");
      setInputValue("NFT Id");
    } else if (value == "ANGELOPOWER NFT") {
      setContractName("ANGELOPOWER NFT");
      setContractAddress("0xCD157cfaa00e517e1b0DF0d26A828e4Ececb52a0");
      getButtonValue("NFT");
      setInputValue("NFT Id");
    } else if (value == "AQUAPOWER NFT") {
      setContractName("AQUAPOWER NFT");
      setContractAddress("0x72c50A3152d4A804C019E85EcA62B8Ef122FA6C3");
      getButtonValue("NFT");
      setInputValue("NFT Id");
    } else if (value == "CATENAPOWER  NFT") {
      setContractName("CATENAPOWER  NFT");
      setContractAddress("0x068F3ac92B0484bead5575233B549BED1bAdA757");
      getButtonValue("NFT");
      setInputValue("NFT Id");
    } else if (value == "TERRAPOWER NFT") {
      setContractName("TERRAPOWER NFT");
      setContractAddress("0x34f99ae71df60a9c595f69371639460609f28e50");
      getButtonValue("NFT");
      setInputValue("NFT Id");
    } else if (value == "VENTUSPOWER NFT") {
      setContractName("VENTUSPOWER NFT");
      setContractAddress("0x0C2228c6fcdf74b2d18e79683e765b1dB35dFf1D");
      getButtonValue("NFT");
      setInputValue("NFT Id");
    } else if (value == "FRACTIONAL ALPHAPOWER NFT") {
      setContractName("FRACTIONAL ALPHAPOWER NFT");
      setContractAddress("0x84b890B0801C0E18E43E3252a35E376Fd3369CDD");
      getButtonValue("NFT");
      setInputValue("NFT Id");
    } else if (value == "BLUECARD NFT") {
      setContractName("BLUECARD NFT");
      setContractAddress("0x1DAd42E1eC15d53Fe2B6af7241faa9D9cdD5CB42");
      getButtonValue("NFT");
      setInputValue("NFT Id");
    } else if (value == "PULSEPOWER NFT") {
      setContractName("PULSEPOWER NFT");
      setContractAddress("0x6e8A8916302f84110C5D308A9586208a6E892798");
      getButtonValue("NFT");
      setInputValue("NFT Id");
    } else if (value == "LP Token") {
      setContractName("LP Token");
      setContractAddress("0x4c6f55ee4a9ab9266c5c8787af52681b1c6c6e14");
      getButtonValue("Lp Token");
      setInputValue("Lp Amount ");
    } else if (value == "GOOD Token") {
      setContractName("GOOD Token");
      setContractAddress("0xA89dfb6c48a2776683d1d0e654a988dAA679A76f");
      getButtonValue("Token");
      setInputValue("Token Amount");
    }
  };

  const handleHFT = async () => {
    try {
      const nft_Contract = new web3.eth.Contract(nftAbi, contractAddresss);
      const token_contract = new web3.eth.Contract(tokenAbi, contractAddresss);
      const nftStakingContract = NFTstakingContract();
      if (!value || !contractName) {
        setError(true);
        return;
      }
      setLoading(true);
      if (walletAddress) {
        if (contractName == "GEHENNAPOWER NFT") {
          const approveResponse = await nft_Contract.methods
            .approve(contractAddress, value.toString()).send({
              from: walletAddress,
            });
          if(approveResponse){
            const stakeNft = await nftStakingContract.methods.stakeNFT(contractAddresss, value.toString()).send({
              from :walletAddress
            })
            if(stakeNft){
              setLoading(false);
              toast.success("GEHENNAPOWER NFT stake successfully.")
            }
          }
        } else if(contractName == "AMAZONIAPOWER NFT"){
          const approveResponse = await nft_Contract.methods
          .approve(contractAddress, value.toString()).send({
            from: walletAddress,
          });
        if(approveResponse){
          const stakeNft = await nftStakingContract.methods.stakeNFT(contractAddresss, value.toString()).send({
            from :walletAddress
          })
          if(stakeNft){
            setLoading(false);
            toast.success("AMAZONIAPOWER NFT stake successfully.")
          }
        }
        } else if(contractName == "ANGELOPOWER NFT"){
          const approveResponse = await nft_Contract.methods
          .approve(contractAddress, value.toString()).send({
            from: walletAddress,
          });
        if(approveResponse){
          const stakeNft = await nftStakingContract.methods.stakeNFT(contractAddresss, value.toString()).send({
            from :walletAddress
          })
          if(stakeNft){
            setLoading(false);
            toast.success("ANGELOPOWER NFT stake successfully.")
          }
        }
        } else if(contractName == "AQUAPOWER NFT"){
          const approveResponse = await nft_Contract.methods
          .approve(contractAddress, value.toString()).send({
            from: walletAddress,
          });
        if(approveResponse){
          const stakeNft = await nftStakingContract.methods.stakeNFT(contractAddresss, value.toString()).send({
            from :walletAddress
          })
          if(stakeNft){
            setLoading(false);
            toast.success("AQUAPOWER NFT stake successfully.")
          }
        }
        }else if(contractName == "CATENAPOWER  NFT"){
          const approveResponse = await nft_Contract.methods
          .approve(contractAddress, value.toString()).send({
            from: walletAddress,
          });
        if(approveResponse){
          const stakeNft = await nftStakingContract.methods.stakeNFT(contractAddresss, value.toString()).send({
            from :walletAddress
          })
          if(stakeNft){
            setLoading(false);
            toast.success("CATENAPOWER NFT stake successfully.")
          }
        }
        }else if(contractName == "TERRAPOWER NFT"){
          const approveResponse = await nft_Contract.methods
          .approve(contractAddress, value.toString()).send({
            from: walletAddress,
          });
        if(approveResponse){
          const stakeNft = await nftStakingContract.methods.stakeNFT(contractAddresss, value.toString()).send({
            from :walletAddress
          })
          if(stakeNft){
            setLoading(false);
            toast.success("TERRAPOWER NFT stake successfully.")
          }
        }
        }else if(contractName == "VENTUSPOWER NFT"){
          const approveResponse = await nft_Contract.methods
          .approve(contractAddress, value.toString()).send({
            from: walletAddress,
          });
        if(approveResponse){
          const stakeNft = await nftStakingContract.methods.stakeNFT(contractAddresss, value.toString()).send({
            from :walletAddress
          })
          if(stakeNft){
            setLoading(false);
            toast.success("VENTUSPOWER NFT stake successfully.")
          }
        }
        }else if(contractName == "FRACTIONAL ALPHAPOWER NFT"){
          const approveResponse = await nft_Contract.methods
          .approve(contractAddress, value.toString()).send({
            from: walletAddress,
          });
        if(approveResponse){
          const stakeNft = await nftStakingContract.methods.stakeNFT(contractAddresss, value.toString()).send({
            from :walletAddress
          })
          if(stakeNft){
            setLoading(false);
            toast.success("FRACTIONAL ALPHAPOWER NFT stake successfully.")
          }
        }
        }else if(contractName == "BLUECARD NFT"){
          const approveResponse = await nft_Contract.methods
          .approve(contractAddress, value.toString()).send({
            from: walletAddress,
          });
        if(approveResponse){
          const stakeNft = await nftStakingContract.methods.stakeNFT(contractAddresss, value.toString()).send({
            from :walletAddress
          })
          if(stakeNft){
            setLoading(false);
            toast.success("BLUECARD NFT stake successfully.")
          }
        }
        }else if(contractName == "PULSEPOWER NFT"){
          const approveResponse = await nft_Contract.methods
          .approve(contractAddress, value.toString()).send({
            from: walletAddress,
          });
        if(approveResponse){
          const stakeNft = await nftStakingContract.methods.stakeNFT(contractAddresss, value.toString()).send({
            from :walletAddress
          })
          if(stakeNft){
            setLoading(false);
            toast.success("PULSEPOWER NFT stake successfully.")
          }
        }
        }else if(contractName == "LP Token"){
          const valueInWei = web3.utils.toWei(value.toString(), 'ether');
          const approveResponse = await token_contract.methods
          .approve(contractAddress, valueInWei).send({
            from: walletAddress,
          });
        if(approveResponse){
          const stakeNft = await nftStakingContract.methods.stakeNFT(contractAddresss, valueInWei).send({
            from :walletAddress
          })
          if(stakeNft){
            setLoading(false);
            toast.success("LP Token stake successfully.")
          }
        }
        }else if(contractName == "GOOD Token"){
          const valueInWei = web3.utils.toWei(value.toString(), 'ether');
          const approveResponse = await token_contract.methods
          .approve(contractAddress, valueInWei).send({
            from: walletAddress,
          });
        if(approveResponse){
          const stakeNft = await nftStakingContract.methods.stakeNFT(contractAddresss, valueInWei).send({
            from :walletAddress
          })
          if(stakeNft){
            setLoading(false);
            toast.success("GOOD Token stake successfully.")
          }
        }
        }
      } else {
        setLoading(false);
        toast.error("Please Wallet Connect first.");
      } 
    } catch (e: any) {
      setLoading(false);
      toast.error(e)
      console.log("e", e);
    }finally{
      setLoading(false);
    }
  };
  const handleClaim = async()=>{
    try{
      setClaimLoading(true);
      const nftStakingContract = NFTstakingContract();
      if(walletAddress){
        const claimRewaird = await nftStakingContract.methods.claimRewards().send({from: walletAddress})
        if(claimRewaird){
          setClaimLoading(false);
          toast.success("rewards claim successfully.")
        }
      } else{
        setClaimLoading(false);
        toast.error("Please Wallet Connect first.");
      }
    }catch(err: any){
      console.log("e", err);
      setClaimLoading(false);
      toast.error(err)
    }
  }
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
                {error && !contractName && (
                  <span className="text-red-600">PLease select nft/token</span>
                )}

                <Input
                  placeholder={`Enter ${inputValue}`}
                  className=" placeholder-black text-black w-44"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                {error && !value && (
                  <span className="text-red-600">
                    PLease Fill nft/token amount
                  </span>
                )}
                <div className="md:space-x-5 space-y-5 md:space-y-0 w-full flex justify-center items-center flex-col md:flex-row">
                  <Button
                    className="w-full md:w-fit"
                    onClick={handleHFT}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="ms-2">Loading...</span>
                      </>
                    ) : (
                      <>Stake {buttonValue}</>
                    )}
                  </Button>
                  <Button className="w-full md:w-fit" onClick={handleClaim} disabled={claimLoading}>
                  {claimLoading ? (
                      <>
                        <span className="ms-2">Loading...</span>
                      </>
                    ) : (
                      <>Claim</>
                    )}
                    </Button>
                  <Button className="w-full md:w-fit">
                    UnStake {buttonValue}
                  </Button>
                </div>
                {/* {address && (
                  <div>{address.slice(0, 5) + "..." + address.slice(-5)}</div>
                )} */}
                <WalletConnection setWalletAddress={setWalletAddress} />
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

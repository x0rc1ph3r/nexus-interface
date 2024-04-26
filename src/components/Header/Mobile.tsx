import { Dialog, Transition } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/outline'
import { NATIVE, NEXU, ROUTER_ADDRESS, WETH9_ADDRESS } from '@sushiswap/core-sdk'
import useMenu from 'app/components/Header/useMenu'
import Web3Network from 'app/components/Web3Network'
import Web3Status from 'app/components/Web3Status'
import useIsCoinbaseWallet from 'app/hooks/useIsCoinbaseWallet'
import { useActiveWeb3React } from 'app/services/web3'
import { useDexWarningOpen, useToggleDexWarning } from 'app/state/application/hooks'
import { useETHBalances } from 'app/state/wallet/hooks'
// import Image from 'next/image'
import Link from 'next/link'
import React, { FC, Fragment, useState, useEffect } from 'react'
import LogoImage from '../../../public/icons/icon-72x72.png'
import { NavigationItem } from './NavigationItem'
// import { XIcon } from '@heroicons/react/outline'
// import Typography from 'app/components/Typography'
import ExternalLink from '../ExternalLink'
import { Logo, Frame } from 'arwes';
import XRPLogo from '../../../public/XRP.png'
import NEXULogo from '../../../public/NEXUS.png'
import axios from 'axios';
import routerABI from 'app/constants/abis/router.json';
import Web3 from 'web3';
import { ChainId } from '@sushiswap/core-sdk';
import RPC from '../../config/rpc';

const Mobile: FC = () => {
  const menu = useMenu()
  const { account, chainId, library } = useActiveWeb3React()
  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']
  const [open, setOpen] = useState(false)
  const isCoinbaseWallet = useIsCoinbaseWallet()

  const toggleWarning = useToggleDexWarning()
  const showUseDexWarning = useDexWarningOpen()

  const [xrpPrice, setXrpPrice] = useState('');
  const [nexuPrice, setNexuPrice] = useState('');

  const rpcUrl = RPC[chainId??ChainId.XDC]; // Change the ChainId value according to your requirement
  const web3 = new Web3(rpcUrl);
  const nativeTokenId = chainId == 1440002 ? "ripple" : "xdce-crowd-sale"
  useEffect(() => {
    const fetchXrpPrice = async () => {
      try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${nativeTokenId}&vs_currencies=usd`);
        const price = response.data.ripple.usd; // Access the price using response.data.ripple.usd
        setXrpPrice(price);
      } catch (error) {
        console.error('Failed to fetch XRP price:', error);
      }
    };

    fetchXrpPrice();
    const interval = setInterval(() => {
      fetchXrpPrice();
    }, 10000); // 10000 milliseconds = 10 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchNexuPrice = async () => {
      try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${nativeTokenId}&vs_currencies=usd`);
        const xrpPrice = response.data.ripple.usd;

        const tokenDecimals = 18; // Assuming the token has 18 decimal places
        const amountIn = web3.utils.toBN('1').mul(web3.utils.toBN(10 ** tokenDecimals));

        // Create the contract instance for the router
        const routerContract = new web3.eth.Contract(routerABI as any, ROUTER_ADDRESS[chainId ? chainId : ChainId.XRPL]);


        // Get the output amounts
        const amounts = await routerContract.methods.getAmountsOut(amountIn, [NEXU[chainId ? chainId : ChainId.XRPL], WETH9_ADDRESS[chainId ? chainId : ChainId.XRPL]]).call();

        // Get the output amount for the token
        const outputAmount = amounts[1];

        // Calculate the NEXU token price based on the XRP price and output amount
        const nexuPrice = (xrpPrice * outputAmount / 2) / (10 ** tokenDecimals);

        setNexuPrice(nexuPrice.toString());
      } catch (error) {
        console.error('Failed to fetch NEXU price:', error);
      }
    };

    fetchNexuPrice();
    const interval = setInterval(() => {
      fetchNexuPrice();
    }, 600000); // 10000 milliseconds = 10 seconds
    return () => clearInterval(interval);
  }, []);


  return (
    <>
      {/* {showUseDexWarning && (
        <div className="py-2 px-4 text-[1rem] text-high-emphesis bg-[#eb4326] relative">
          <div className="absolute right-1 top-1">
            <div
              className="flex items-center justify-center w-6 h-6 cursor-pointer hover:text-white"
              onClick={toggleWarning}
            >
              <XIcon width={24} height={24} className="text-high-emphesis" />
            </div>
          </div>
          <Typography variant="xs" weight={700} className="py-0 px-4 text-[1rem] text-high-emphesis bg-[#eb4326]">
          {`You are using the NEXUS Swap Beta platform on the Songbird Canary Network. NEXUSSwap is
  a brand new DEX on the Songbird Network. Liquidity is decentralized and added by users. Please be aware of the associated risks with using DeFi
  platforms.`}
          </Typography>
        </div>
      )} */}
      <header className="w-full flex items-center justify-between min-h-[64px] h-[64px] px-4">
        <div className="flex justify-between flex-grow">
          <div className="p-2 rounded-full hover:bg-white/10">
            <MenuIcon width={28} className="text-white cursor-pointer hover:text-white" onClick={() => setOpen(true)} />
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <img src={XRPLogo.src} className="rounded-md" width="30px" height="30px" alt="XRP Logo" />
              <span className="ml-2">${parseFloat(xrpPrice).toFixed(4)}</span>
            </div>
            <div className="flex items-center">
              <img src={NEXULogo.src} className="rounded-md" width="25px" height="25px" alt="NEXU Logo" />
              <span className="ml-2">${parseFloat(nexuPrice).toFixed(4)}</span>
            </div>
          </div>

          <div className="flex items-center mr-1">
            <ExternalLink target='_self' href="/">
              <Logo animate resources={LogoImage.src} size={50} alt="Logo" />
            </ExternalLink>
          </div>
        </div>
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 z-20 overflow-hidden" onClose={setOpen}>
            <div className="absolute inset-0 overflow-hidden">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="absolute inset-0 transition-opacity bg-dark-1000 bg-opacity-80" />
              </Transition.Child>

              <div className="fixed inset-y-0 left-0 pr-10 max-w-[260px] flex">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300"
                  enterFrom="translate-x-[-100%]"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-[-100%]"
                >
                  <div className="w-screen max-w-sm">
                    <div className="flex flex-col h-full py-6 overflow-x-hidden overflow-y-scroll shadow-xl bg-dark-800">
                      <nav className="flex-1 pl-6" aria-label="Sidebar">
                        {menu.map((node) => {
                          return <NavigationItem node={node} key={node.key} />
                        })}
                      </nav>

                      <div className="flex gap-1 px-1 justify-center">
                        {library && (library.provider.isMetaMask || isCoinbaseWallet) && (
                          <div className="flex">
                            <Web3Network />
                          </div>
                        )}

                        <Frame
                          level={3}
                          corners={3}
                          className="w-100"
                          layer='primary'>
                          <div className="flex items-center justify-center gap-2">
                            <div className="flex items-center w-auto text-sm font-bold rounded shadow cursor-pointer pointer-events-auto select-none whitespace-nowrap">
                              {account && chainId && userEthBalance && (
                                <Link href="/portfolio" passHref={true}>
                                  <a className="hidden px-3 text-high-emphesis text-bold md:block">
                                    {/*@ts-ignore*/}
                                    {userEthBalance?.toSignificant(4)} {NATIVE[chainId || 1].symbol}
                                  </a>
                                </Link>
                              )}
                              <Web3Status />
                            </div>
                          </div>
                        </Frame>
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </header>
    </>
  )
}

export default Mobile

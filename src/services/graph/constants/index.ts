import { ChainId } from '@sushiswap/core-sdk'

const THE_GRAPH = 'https://api.thegraph.com'
const NAS_GRAPH = 'https://graph.kkt.one/node'
const HYPER_GRAPH = 'https://q.hg.network'

export const GRAPH_HOST = {
  [ChainId.ETHEREUM]: THE_GRAPH,
  [ChainId.XDAI]: THE_GRAPH,
  [ChainId.MATIC]: THE_GRAPH,
  [ChainId.FANTOM]: THE_GRAPH,
  [ChainId.BSC]: THE_GRAPH,
  [ChainId.AVALANCHE]: THE_GRAPH,
  [ChainId.CELO]: THE_GRAPH,
  [ChainId.ARBITRUM]: THE_GRAPH,
  // [ChainId.HARMONY]: 'https://sushi.graph.t.hmny.io',
  [ChainId.OKEX]: HYPER_GRAPH,
  [ChainId.HECO]: HYPER_GRAPH,
  [ChainId.MOONRIVER]: THE_GRAPH,
  [ChainId.TELOS]: THE_GRAPH,
  [ChainId.KOVAN]: THE_GRAPH,
  [ChainId.FUSE]: THE_GRAPH,
  [ChainId.XRPL]: THE_GRAPH,
  [ChainId.XDC]: THE_GRAPH,
  [ChainId.APOTHEM]: THE_GRAPH,
}

export const TRIDENT = {
  [ChainId.KOVAN]: 'sushiswap/trident',
  [ChainId.OKEX]: 'https://graph.kkt.one/node',
  [ChainId.ARBITRUM]: THE_GRAPH,
  [ChainId.MOONRIVER]: THE_GRAPH,
  [ChainId.FUSE]: THE_GRAPH,
}

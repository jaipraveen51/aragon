import Web3 from 'web3'

// Check address equality without checksums
export function addressesEqual(first, second) {
  first = first && first.toLowerCase()
  second = second && second.toLowerCase()
  return first === second
}

export function shortenAddress(address, charsLength = 4) {
  const prefixLength = 2 // "0x"
  if (address.length < charsLength * 2 + prefixLength) {
    return address
  }
  return (
    address.slice(0, charsLength + prefixLength) +
    '…' +
    address.slice(-charsLength)
  )
}

// Cache web3 instances used in the app
const cache = new WeakMap()
export function getWeb3(provider) {
  if (cache.has(provider)) {
    return cache.get(provider)
  }
  const web3 = new Web3(provider)
  cache.set(provider, web3)
  return web3
}

export function weiToEther(wei) {
  return wei / 10e17
}

export function etherToWei(ether) {
  return ether * 10e17
}

export const { soliditySha3, isAddress } = Web3.utils

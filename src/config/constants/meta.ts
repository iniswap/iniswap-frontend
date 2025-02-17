import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Iniswap',
  description:
    'The most popular AMM on BSC by user count! Earn INI through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by IniSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://iniswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('IniSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('IniSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('IniSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('IniSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('IniSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('IniSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('IniSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('IniSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('IniSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('IniSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('IniSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('IniSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('IniSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('IniSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('IniSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('IniSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('IniSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('IniSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('IniSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('IniSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('IniSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('IniSwap Info & Analytics')}`,
        description: 'View statistics for iniswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('IniSwap Info & Analytics')}`,
        description: 'View statistics for iniswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Pools')} | ${t('IniSwap Info & Analytics')}`,
        description: 'View statistics for iniswap exchanges.',
      }
    default:
      return null
  }
}

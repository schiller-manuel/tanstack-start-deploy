/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WalletConnectImport } from './routes/wallet-connect'
import { Route as RedirectImport } from './routes/redirect'
import { Route as MultiTxImport } from './routes/multi-tx'
import { Route as DeferredImport } from './routes/deferred'
import { Route as CoinImport } from './routes/coin'
import { Route as LayoutImport } from './routes/_layout'
import { Route as SolanaRouteImport } from './routes/solana/route'
import { Route as IndexImport } from './routes/index'
import { Route as SolanaIndexImport } from './routes/solana/index'
import { Route as TrySolanaConnectImport } from './routes/try/solana-connect'
import { Route as LayoutLayout2Import } from './routes/_layout/_layout-2'
import { Route as LayoutLayout2LayoutBImport } from './routes/_layout/_layout-2/layout-b'
import { Route as LayoutLayout2LayoutAImport } from './routes/_layout/_layout-2/layout-a'

// Create/Update Routes

const WalletConnectRoute = WalletConnectImport.update({
  id: '/wallet-connect',
  path: '/wallet-connect',
  getParentRoute: () => rootRoute,
} as any)

const RedirectRoute = RedirectImport.update({
  id: '/redirect',
  path: '/redirect',
  getParentRoute: () => rootRoute,
} as any)

const MultiTxRoute = MultiTxImport.update({
  id: '/multi-tx',
  path: '/multi-tx',
  getParentRoute: () => rootRoute,
} as any)

const DeferredRoute = DeferredImport.update({
  id: '/deferred',
  path: '/deferred',
  getParentRoute: () => rootRoute,
} as any)

const CoinRoute = CoinImport.update({
  id: '/coin',
  path: '/coin',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const SolanaRouteRoute = SolanaRouteImport.update({
  id: '/solana',
  path: '/solana',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SolanaIndexRoute = SolanaIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => SolanaRouteRoute,
} as any)

const TrySolanaConnectRoute = TrySolanaConnectImport.update({
  id: '/try/solana-connect',
  path: '/try/solana-connect',
  getParentRoute: () => rootRoute,
} as any)

const LayoutLayout2Route = LayoutLayout2Import.update({
  id: '/_layout-2',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutLayout2LayoutBRoute = LayoutLayout2LayoutBImport.update({
  id: '/layout-b',
  path: '/layout-b',
  getParentRoute: () => LayoutLayout2Route,
} as any)

const LayoutLayout2LayoutARoute = LayoutLayout2LayoutAImport.update({
  id: '/layout-a',
  path: '/layout-a',
  getParentRoute: () => LayoutLayout2Route,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/solana': {
      id: '/solana'
      path: '/solana'
      fullPath: '/solana'
      preLoaderRoute: typeof SolanaRouteImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/coin': {
      id: '/coin'
      path: '/coin'
      fullPath: '/coin'
      preLoaderRoute: typeof CoinImport
      parentRoute: typeof rootRoute
    }
    '/deferred': {
      id: '/deferred'
      path: '/deferred'
      fullPath: '/deferred'
      preLoaderRoute: typeof DeferredImport
      parentRoute: typeof rootRoute
    }
    '/multi-tx': {
      id: '/multi-tx'
      path: '/multi-tx'
      fullPath: '/multi-tx'
      preLoaderRoute: typeof MultiTxImport
      parentRoute: typeof rootRoute
    }
    '/redirect': {
      id: '/redirect'
      path: '/redirect'
      fullPath: '/redirect'
      preLoaderRoute: typeof RedirectImport
      parentRoute: typeof rootRoute
    }
    '/wallet-connect': {
      id: '/wallet-connect'
      path: '/wallet-connect'
      fullPath: '/wallet-connect'
      preLoaderRoute: typeof WalletConnectImport
      parentRoute: typeof rootRoute
    }
    '/_layout/_layout-2': {
      id: '/_layout/_layout-2'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutLayout2Import
      parentRoute: typeof LayoutImport
    }
    '/try/solana-connect': {
      id: '/try/solana-connect'
      path: '/try/solana-connect'
      fullPath: '/try/solana-connect'
      preLoaderRoute: typeof TrySolanaConnectImport
      parentRoute: typeof rootRoute
    }
    '/solana/': {
      id: '/solana/'
      path: '/'
      fullPath: '/solana/'
      preLoaderRoute: typeof SolanaIndexImport
      parentRoute: typeof SolanaRouteImport
    }
    '/_layout/_layout-2/layout-a': {
      id: '/_layout/_layout-2/layout-a'
      path: '/layout-a'
      fullPath: '/layout-a'
      preLoaderRoute: typeof LayoutLayout2LayoutAImport
      parentRoute: typeof LayoutLayout2Import
    }
    '/_layout/_layout-2/layout-b': {
      id: '/_layout/_layout-2/layout-b'
      path: '/layout-b'
      fullPath: '/layout-b'
      preLoaderRoute: typeof LayoutLayout2LayoutBImport
      parentRoute: typeof LayoutLayout2Import
    }
  }
}

// Create and export the route tree

interface SolanaRouteRouteChildren {
  SolanaIndexRoute: typeof SolanaIndexRoute
}

const SolanaRouteRouteChildren: SolanaRouteRouteChildren = {
  SolanaIndexRoute: SolanaIndexRoute,
}

const SolanaRouteRouteWithChildren = SolanaRouteRoute._addFileChildren(
  SolanaRouteRouteChildren,
)

interface LayoutLayout2RouteChildren {
  LayoutLayout2LayoutARoute: typeof LayoutLayout2LayoutARoute
  LayoutLayout2LayoutBRoute: typeof LayoutLayout2LayoutBRoute
}

const LayoutLayout2RouteChildren: LayoutLayout2RouteChildren = {
  LayoutLayout2LayoutARoute: LayoutLayout2LayoutARoute,
  LayoutLayout2LayoutBRoute: LayoutLayout2LayoutBRoute,
}

const LayoutLayout2RouteWithChildren = LayoutLayout2Route._addFileChildren(
  LayoutLayout2RouteChildren,
)

interface LayoutRouteChildren {
  LayoutLayout2Route: typeof LayoutLayout2RouteWithChildren
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutLayout2Route: LayoutLayout2RouteWithChildren,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/solana': typeof SolanaRouteRouteWithChildren
  '': typeof LayoutLayout2RouteWithChildren
  '/coin': typeof CoinRoute
  '/deferred': typeof DeferredRoute
  '/multi-tx': typeof MultiTxRoute
  '/redirect': typeof RedirectRoute
  '/wallet-connect': typeof WalletConnectRoute
  '/try/solana-connect': typeof TrySolanaConnectRoute
  '/solana/': typeof SolanaIndexRoute
  '/layout-a': typeof LayoutLayout2LayoutARoute
  '/layout-b': typeof LayoutLayout2LayoutBRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof LayoutLayout2RouteWithChildren
  '/coin': typeof CoinRoute
  '/deferred': typeof DeferredRoute
  '/multi-tx': typeof MultiTxRoute
  '/redirect': typeof RedirectRoute
  '/wallet-connect': typeof WalletConnectRoute
  '/try/solana-connect': typeof TrySolanaConnectRoute
  '/solana': typeof SolanaIndexRoute
  '/layout-a': typeof LayoutLayout2LayoutARoute
  '/layout-b': typeof LayoutLayout2LayoutBRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/solana': typeof SolanaRouteRouteWithChildren
  '/_layout': typeof LayoutRouteWithChildren
  '/coin': typeof CoinRoute
  '/deferred': typeof DeferredRoute
  '/multi-tx': typeof MultiTxRoute
  '/redirect': typeof RedirectRoute
  '/wallet-connect': typeof WalletConnectRoute
  '/_layout/_layout-2': typeof LayoutLayout2RouteWithChildren
  '/try/solana-connect': typeof TrySolanaConnectRoute
  '/solana/': typeof SolanaIndexRoute
  '/_layout/_layout-2/layout-a': typeof LayoutLayout2LayoutARoute
  '/_layout/_layout-2/layout-b': typeof LayoutLayout2LayoutBRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/solana'
    | ''
    | '/coin'
    | '/deferred'
    | '/multi-tx'
    | '/redirect'
    | '/wallet-connect'
    | '/try/solana-connect'
    | '/solana/'
    | '/layout-a'
    | '/layout-b'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/coin'
    | '/deferred'
    | '/multi-tx'
    | '/redirect'
    | '/wallet-connect'
    | '/try/solana-connect'
    | '/solana'
    | '/layout-a'
    | '/layout-b'
  id:
    | '__root__'
    | '/'
    | '/solana'
    | '/_layout'
    | '/coin'
    | '/deferred'
    | '/multi-tx'
    | '/redirect'
    | '/wallet-connect'
    | '/_layout/_layout-2'
    | '/try/solana-connect'
    | '/solana/'
    | '/_layout/_layout-2/layout-a'
    | '/_layout/_layout-2/layout-b'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  SolanaRouteRoute: typeof SolanaRouteRouteWithChildren
  LayoutRoute: typeof LayoutRouteWithChildren
  CoinRoute: typeof CoinRoute
  DeferredRoute: typeof DeferredRoute
  MultiTxRoute: typeof MultiTxRoute
  RedirectRoute: typeof RedirectRoute
  WalletConnectRoute: typeof WalletConnectRoute
  TrySolanaConnectRoute: typeof TrySolanaConnectRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  SolanaRouteRoute: SolanaRouteRouteWithChildren,
  LayoutRoute: LayoutRouteWithChildren,
  CoinRoute: CoinRoute,
  DeferredRoute: DeferredRoute,
  MultiTxRoute: MultiTxRoute,
  RedirectRoute: RedirectRoute,
  WalletConnectRoute: WalletConnectRoute,
  TrySolanaConnectRoute: TrySolanaConnectRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/solana",
        "/_layout",
        "/coin",
        "/deferred",
        "/multi-tx",
        "/redirect",
        "/wallet-connect",
        "/try/solana-connect"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/solana": {
      "filePath": "solana/route.tsx",
      "children": [
        "/solana/"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/_layout-2"
      ]
    },
    "/coin": {
      "filePath": "coin.tsx"
    },
    "/deferred": {
      "filePath": "deferred.tsx"
    },
    "/multi-tx": {
      "filePath": "multi-tx.tsx"
    },
    "/redirect": {
      "filePath": "redirect.tsx"
    },
    "/wallet-connect": {
      "filePath": "wallet-connect.tsx"
    },
    "/_layout/_layout-2": {
      "filePath": "_layout/_layout-2.tsx",
      "parent": "/_layout",
      "children": [
        "/_layout/_layout-2/layout-a",
        "/_layout/_layout-2/layout-b"
      ]
    },
    "/try/solana-connect": {
      "filePath": "try/solana-connect.tsx"
    },
    "/solana/": {
      "filePath": "solana/index.tsx",
      "parent": "/solana"
    },
    "/_layout/_layout-2/layout-a": {
      "filePath": "_layout/_layout-2/layout-a.tsx",
      "parent": "/_layout/_layout-2"
    },
    "/_layout/_layout-2/layout-b": {
      "filePath": "_layout/_layout-2/layout-b.tsx",
      "parent": "/_layout/_layout-2"
    }
  }
}
ROUTE_MANIFEST_END */

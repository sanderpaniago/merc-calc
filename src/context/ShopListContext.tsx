import React, { createContext, useState, useEffect, ReactNode, useContext} from 'react'

interface ShopListProviderProps {
  children: ReactNode
}

type ItemShop = {
  name: string;
  qnt: number;
  valueQnt: number;
  total: number;
}

interface ShopListContextData {
  shopList: ItemShop[];
  newShopItem: (item: ItemShop) => void;
}

const ShopListContext = createContext<ShopListContextData>({} as ShopListContextData)

export function ShopListProvider({children}: ShopListProviderProps) {
  
  const [shopList, setShopList] = useState<ItemShop[]>([])

  function newShopItem(item: ItemShop) {
    setShopList([...shopList, item])
  }

  return (
    <ShopListContext.Provider value={{
      shopList,
      newShopItem
    }}>
      {children}
    </ShopListContext.Provider>
  )
}

export function useShopList() {
  const context = useContext(ShopListContext)

  return context
}
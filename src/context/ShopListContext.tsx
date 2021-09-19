import React, { createContext, useState, useEffect, ReactNode, useContext} from 'react'

interface ShopListProviderProps {
  children: ReactNode
}

type ItemShop = {
  id: string;
  name: string;
  qnt: number;
  valueQnt: number;
  total: number;
}

interface ShopListContextData {
  shopList: ItemShop[];
  newShopItem: (item: ItemShop) => void;
  removeShopItem: (id: string) => void;
  editShopItem: (item: ItemShop) => void
}

const ShopListContext = createContext<ShopListContextData>({} as ShopListContextData)

export function ShopListProvider({children}: ShopListProviderProps) {
  
  const [shopList, setShopList] = useState<ItemShop[]>([])

  function newShopItem(item: ItemShop) {
    setShopList([...shopList, item])
  }

  function removeShopItem(id: string) {
    const newList = shopList.filter(shopItem => shopItem.id !== id)
    setShopList(newList)
  }

  function editShopItem(itemShop: ItemShop) {
    const newShopList = [...shopList]
    const currentItem = newShopList.find(item => item.id == itemShop.id)

    currentItem.name = itemShop.name
    currentItem.qnt = itemShop.qnt
    currentItem.valueQnt = itemShop.valueQnt
    currentItem.total = itemShop.total

    setShopList(newShopList)
  }

  return (
    <ShopListContext.Provider value={{
      shopList,
      newShopItem,
      removeShopItem,
      editShopItem
    }}>
      {children}
    </ShopListContext.Provider>
  )
}

export function useShopList() {
  const context = useContext(ShopListContext)

  return context
}
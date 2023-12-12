import React, { createContext } from 'react'
import useLocalStorage from '../../hook/useLocalStorage'


export const BasketContext= createContext()

function BasketProvider({children}) {
  const [basket, setBasket] = useLocalStorage("basket",[])

  function addBasket(item) {
    let elementIndex = basket.findIndex((x)=> x.id===item.id)
    if (elementIndex!== -1) {
      const newBasket = [...basket]
      newBasket[elementIndex].count++
      setBasket(newBasket)
    }
    else{
      setBasket([...basket, {...item,count:1}])
    }
  }

function countNumber(isAdd,item) {
  let elementIndex=basket.findIndex((x)=>x.id===item.id)
  const newBasket=[...basket]
  if (isAdd) {
    newBasket[elementIndex].count++
    setBasket(newBasket)
  }
  else{
    if (newBasket[elementIndex].count>1) {
      newBasket[elementIndex].count--
      setBasket(newBasket)
    }
  }
}


  const removeBasket = (id) => {
    setBasket(basket.filter((x) => x.id !== id));
};

const data ={
  basket,addBasket,removeBasket,countNumber
}

  return (
    <div>
      <BasketContext.Provider value={data}>
        {children}
      </BasketContext.Provider>
    </div>
  )
}

export default BasketProvider
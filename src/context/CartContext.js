import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [total , setTotal] = useState(0);
  const login = () => setIsLogin(true);
  const logout = () => {
      setIsLogin(false);
      localStorage.removeItem('users')
  }
  const addToFavorite = (product) => {
       setFavoriteItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === product.id)
        if(existingItem){
           return prevItems;
        }else 
          return [...prevItems, product];
       })
  }
  const removeFromFavorite = (productId) => {
    setFavoriteItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };
  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevItems, { ...product, quantity }];
    });
  };

  // Cập nhật số lượng sản phẩm
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };
  const value = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    addToFavorite,
    removeFromFavorite,
    favoriteItems,
    login,
    logout,
    isLogin,
    total,
    setTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};

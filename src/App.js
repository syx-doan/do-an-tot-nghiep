import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import Header from './common/header/Header';
import Pages from './pages/Pages';
import Data from './components/Data';
import Cart from './common/giohang/Cart';
import Footer from './common/footer/Footer';
import Sdata from '~/components/shops/Sdata';
import Register from './common/register/Register';
import Login from './common/login/Login';
import Product from './components/MainPage/Product/Product';
import GioiThieu from './components/gioiThieu/GioiThieu';
import LienHe from './components/lienhe/LienHe';

function App() {
    /*
  step1 :  const { productItems } = Data 
  lai pass garne using props
  
  Step 2 : item lai cart ma halne using useState
  ==> CartItem lai pass garre using props from  <Cart CartItem={CartItem} /> ani import garrxa in cartItem ma
 import Register from './common/register/Register';
import Login from './common/login/Login';
  Step 3 :  chai flashCard ma xa button ma
  Step 4 :  addToCart lai chai pass garne using props in pages and cart components
  */

    //Step 1 :
    const { productItems } = Data;
    const { shopItems } = Sdata;

    //Step 2 :
    const [CartItem, setCartItem] = useState([]);

    //Step 4 :
    const addToCart = (product) => {
        // if hamro product alredy cart xa bhane  find garna help garxa
        const productExit = CartItem.find((item) => item.id === product.id);
        // if productExit chai alredy exit in cart then will run fun() => setCartItem
        // ani inside => setCartItem will run => map() ani yo map() chai each cart ma
        // gayara check garxa if item.id ra product.id chai match bhayo bhane
        // productExit product chai display garxa
        // ani increase  exits product QTY by 1
        // if item and product doesnt match then will add new items
        if (productExit) {
            setCartItem(
                CartItem.map((item) =>
                    item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item,
                ),
            );
        } else {
            // but if the product doesnt exit in the cart that mean if card is empty
            // then new product is added in cart  and its qty is initalize to 1
            setCartItem([...CartItem, { ...product, qty: 1 }]);
        }
    };

    // Stpe: 6
    const decreaseQty = (product) => {
        // if hamro product alredy cart xa bhane  find garna help garxa
        const productExit = CartItem.find((item) => item.id === product.id);

        // if product is exit and its qty is 1 then we will run a fun  setCartItem
        // inside  setCartItem we will run filter to check if item.id is match to product.id
        // if the item.id is doesnt match to product.id then that items are display in cart
        // else
        if (productExit.qty === 1) {
            setCartItem(CartItem.filter((item) => item.id !== product.id));
        } else {
            // if product is exit and qty  of that produt is not equal to 1
            // then will run function call setCartItem
            // inside setCartItem we will run map method
            // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
            setCartItem(
                CartItem.map((item) =>
                    item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item,
                ),
            );
        }
    };

    // Stpe: 7
    const deleteQty = (product) => {
        // const productExit = CartItem.find((item) => item.id === product.id);

        const index = CartItem.findIndex((x) => x.id === product.id);
        const newCartItem = [...CartItem];
        newCartItem.splice(index, 1);
        setCartItem(newCartItem);

        // if (productExit.qty === 1) {
        //     setCartItem(CartItem.filter((item) => item.id !== product.id));
        // } else {
        //     setCartItem(
        //         CartItem.map((item) =>
        //             item.id === product.id ? { newCartItem } : item,
        //         ),
        //     );
        // }
    };

    return (
        <>
            <Header CartItem={CartItem} />
            <Routes>
                <Route />
                <Route path="dangky" element={<Register />} />
                <Route path="dangnhap" element={<Login />} />
                <Route
                    path="sanpham"
                    element={<Product addToCart={addToCart} shopItems={shopItems} />}
                />
                {/* <Shop shopItems={shopItems} addToCart={addToCart} /> */}
                <Route path="gioithieu" element={<GioiThieu />} />
                <Route path="lienhe" element={<LienHe/>} />
                <Route
                    path="/"
                    exact
                    element={
                        <Pages
                            productItems={productItems}
                            addToCart={addToCart}
                            shopItems={shopItems}
                        />
                    }
                />
                <Route
                    path="/cart"
                    exact
                    element={
                        <Cart
                            CartItem={CartItem}
                            addToCart={addToCart}
                            decreaseQty={decreaseQty}
                            deleteQty={deleteQty}
                        />
                    }
                />
            </Routes>
            <Footer />
        </>
    );
}

export default App;

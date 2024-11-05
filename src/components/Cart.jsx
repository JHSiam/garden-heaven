import React, { useContext, useState } from 'react';
import { MainContext } from '../App';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const { cartData, hanldeRemove, sortCartData, setCartData } = useContext(MainContext);
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const navigate = useNavigate();

    let totalPrice = 0;
    cartData.forEach(item => {
      totalPrice += item.price;
    });

    let checkBtn=false;

    if(cartData.length===0){
      checkBtn=true;
    }

    
    const handlePurchase = () => {
        setIsModalOpen(true);
        setCartData([]);
    };

    
    const closeModal = () => {
        setIsModalOpen(false);
         navigate('/');
    };

    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Cart</h3>
                <div className="flex items-center gap-4">
                    <p>Total cost: ${totalPrice}</p>
                    <button className="btn" onClick={sortCartData}>Sort</button>
                    <button className="btn" onClick={handlePurchase} disabled={checkBtn}>Purchase</button>
                </div>
            </div>
            {cartData.map((p,i) => (
                <CartItem p={p} hanldeRemove={hanldeRemove} key={p.product_id+i} />
            ))}

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-xs">
                        <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
                        <p className="mb-6">Your purchase was successful.</p>
                        <button className="btn bg-blue-500 text-white px-4 py-2 rounded" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

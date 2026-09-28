import { useState } from 'react'
import './App.css'
import shoesImage from './assets/shoes.jpg'
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import Modal from './components/Modal';
import Toast from './components/Toast';
import Footer from './components/Footer';

function App() {
  //장바구니에 담긴 상품 갯수
  const [cartCount, setCartCount] = useState(0);
  //이미지 확대 모달을 보여줄지 
  //false = 닫힘 / true = 열림
  const [modalOpen, setModalOpen] = useState(false)
  //장바구니 알림
  const [toastOpen, setToastOpen] = useState(false)
  //장바구니 버튼을 클릭하면 실행
  const addCart = () => {
    setCartCount(cartCount + 1);
    setToastOpen(true);
    //2초 뒤에 알림을 자동으로 숨김
    setTimeout(() => {
      setToastOpen(false)
    }, 2000);
  }
  //이미지 확대 모달
  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }


  return (
    <div className="app">
      {/* 부모 요소의 cartCount값을 Hedaer에게 props기능으로 전달 */}
      <Header cartCount={cartCount} />
      <main className="container">
        {/* 상세보기에 전달하는 값 */}
        <ProductDetail
          image={shoesImage}
          onAddCart={addCart}
          onOpenModal={openModal}
        />
      </main>
      {/* modal이 true일때 */}
      {
        modalOpen && (
          <Modal image={shoesImage} onClose={closeModal} />
        )}
      {/* toast */}
      {toastOpen && <Toast />}
      <Footer />
    </div>
  )
}

export default App

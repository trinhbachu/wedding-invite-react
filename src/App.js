import React from 'react';

function App() {
  return (
    <div className="font-sans text-center px-4 py-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-pink-700 mb-2">Lễ Cưới của Linh & Nam</h1>
      <p className="text-gray-700 mb-8">Trân trọng kính mời bạn tới chung vui cùng chúng mình</p>

      <img src="/couple.jpg" alt="Couple" className="w-full rounded-xl shadow-md mb-10" />

      <div className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800">📍 Thời gian & Địa điểm</h2>
        <p className="mt-2">17h00 | Thứ Bảy, 05/07/2025</p>
        <p>Nhà hàng Sen Tây Hồ, Hà Nội</p>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800">📞 Thông tin liên hệ</h2>
        <p className="mt-2">Cô dâu: Linh – 090xxxxxxx</p>
        <p>Chú rể: Nam – 091xxxxxxx</p>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800">💌 Mừng cưới online</h2>
        <p className="mt-2 text-sm text-gray-600">Quét mã QR dưới đây để gửi lời chúc và mừng cưới:</p>
        <img src="/qr.png" alt="QR Banking" className="w-40 h-40 mx-auto mt-4 rounded-md shadow-md" />
      </div>
    </div>
  );
}

export default App;

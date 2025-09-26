import { useState } from "react";

import RegistrationForm from "./RegistrationForm"; // مسیر کامپوننت فرم
import { useMediaQuery } from "../../../hook/useMediaQuery";
import BottomSheetModal from "../../general/bottomShitModal/BottomSheetModal";
import Modal2 from "./modal2";

const SignupFlow = () => {
  // 1. استیت برای باز و بسته بودن مودال
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 2. استفاده از هوک برای تشخیص حالت موبایل (بر اساس breakpoint تیل‌ویند md)
  const isMobile = useMediaQuery("(max-width: 768px)");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button
        onClick={openModal}
        className="w-full bg-[var(--single-primary)] cursor-pointer hover:bg-[var(--single-primary-hover)] text-white font-bold py-3 px-6 rounded-lg transition-transform duration-200 hover:scale-105 shadow-md hover:shadow-lg"
      >
        ثبت نام الان
      </button>

      {/* 3. رندر کردن شرطی مودال بر اساس اندازه صفحه */}
      {isMobile ? (
        <BottomSheetModal isOpen={isModalOpen} onClose={closeModal}>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4 text-center">ثبت نام</h2>
            <RegistrationForm />
          </div>
        </BottomSheetModal>
      ) : (
        <Modal2
          isOpen={isModalOpen}
          onDismiss={closeModal}
          title="ثبت نام و ایجاد حساب کاربری"
        >
          <RegistrationForm />
        </Modal2>
      )}
    </div>
  );
};

export default SignupFlow;

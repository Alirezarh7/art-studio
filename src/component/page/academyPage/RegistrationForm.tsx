const RegistrationForm = () => {
  return (
    <form className="space-y-4 z-[50] ">
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          نام و نام خانوادگی
        </label>
        <input
          type="text"
          id="fullName"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="مثال: سارا احمدی"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          کدملی
        </label>
        <input
          type="number"
          id="ssn"
          placeholder="کد ملی خود را وارد نمایید"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          ایمیل
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="example@email.com"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[var(--single-primary)] cursor-pointer text-white font-bold py-3 px-4 rounded-lg hover:bg-[var(--single-primary-hover)] transition-colors"
      >
        ثبت درخواست عضویت
      </button>
    </form>
  );
};

export default RegistrationForm;

import React from "react";

const ContactUs = ({ isLanguage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div id="contact-us" className="main_padding lg:mt-32 mt-14">
      <div className={`max-w-[1440px] mx-auto ${isLanguage && 'items-end flex flex-col'}`}>
        <h1 className="text-3xl text-primary font-medium leading-[180%]">
          {isLanguage ? "اتصل بنا" : "Contact us"}
        </h1>
        <form
          onSubmit={handleSubmit}
          className={`mt-5 w-full flex flex-col max-w-[800px] sm:gap-[18px] gap-[14px] ${isLanguage && "items-end"}`}
        >
          <label className="grid sm:w-[50%] font-light tracking-[-0.03em] text-base text-primary gap-2">
             {isLanguage ? "الاسم الكامل" : "Full name"}
            <input
              type="text"
              className="outline-none border border-[#B8D4FF] rounded-[5px] bg-transparent py-1 px-2 text-primary caret-primary"
            />
          </label>
          <span className={`flex w-full sm:items-center justify-between sm:gap-10 gap-[14px] max-sm:flex-col ${isLanguage && "flex-row-reverse"}`}>
            <label className="grid font-light tracking-[-0.03em] text-base text-primary gap-2 sm:w-[60%] shrink-0">
               {isLanguage ? "عنوان البريد الإلكتروني": "Email address"}
              <input
                type="email"
                className="outline-none border border-[#B8D4FF] rounded-[5px] bg-transparent py-1 px-2 text-primary caret-primary"
              />
            </label>
            <label className="grid font-light tracking-[-0.03em] text-base text-primary gap-2 sm:w-[40%]">
               {isLanguage ? "رقم الهاتف المحمول" : "Mobile Number"}
              <input
                type="number" 
                className="outline-none border border-[#B8D4FF] rounded-[5px] bg-transparent py-1 px-2 text-primary caret-primary"
              />
            </label>
          </span>
          <label className="grid sm:w-[60%] font-light tracking-[-0.03em] text-base text-primary gap-2">
           {isLanguage ? "موقعك" : "Your Location"}
            <input
              type="text"
              className="outline-none border border-[#B8D4FF] rounded-[5px] bg-transparent py-1 px-2 text-primary caret-primary"
            />
          </label>
          <label className="grid sm:w-[60%] font-light tracking-[-0.03em] text-base text-primary gap-2">
             {isLanguage ? "رسالتك" : "Your Message"}
            <textarea className="outline-none border border-[#B8D4FF] rounded-[5px] bg-transparent py-1 px-2 text-primary caret-primary min-h-[120px]" />
          </label>

          <button
            type="submit"
            style={{
              leadingTrim: "both",
              textEdge: "cap",
            }}
            className="px-5 py-4 flex items-center justify-center text-primary w-max border-[1.5px] border-primary rounded-[5px] font-light text-base tracking-[-0.03em] "
          >
            {isLanguage ? "أرسل رسالة" : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

import React from "react";
// import ContactForm from "@/components/organisms/ContactForm";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gray-800">
      <section className="p-10 bg-white text-black">
        <div className="w-full max-w-sm m-auto">
          <div className="text-center mb-2">
            <h2 className="text-xl font-bold">Looking forward to hearing from you!</h2>
            <div className="text-[6px]">Unless you&apos;re mean, then I hope you step in water with socks on.</div>
          </div>
          {/* <ContactForm /> */}
        </div>
      </section>
    </div>
  );
};

export default Contact;
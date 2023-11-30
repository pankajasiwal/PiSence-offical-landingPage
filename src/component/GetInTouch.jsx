import React from 'react';
import inTouch from '../constant/inTouch.jsx';

export default function GetInTouch() {
  return (
    <section className='max-w-screen-2xl mx-auto my-10 h-fit'>
      <div className='text-center py-8'>
        <h2 className='text-[2rem] font-bold text-stone-800'>
          Get in Touch with <span className='text-red-500'>PiSence</span>
        </h2>
      </div>
      <div className='text-center pb-5'>
        <p className='text-stone-700 px-8'>
          Thank you for your interest in PiSence, your trusted partner in IoT monitoring services. We are excited to
          hear from you and discuss how our solutions can help your business thrive in the digital age. Whether you have
          questions, require further information, or want to explore a potential partnership, our dedicated team is
          ready to assist you.
        </p>
      </div>

      <div className='text-stone-700 flex flex-wrap justify-center py-5'>
        {inTouch.map((touch) => {
          return (
            <div key={touch.id} className='flex flex-col justify-center items-center gap-1 my-4 sm:my-0 mx-auto'>
              <div>
                <p>{touch.icon}</p>
              </div>
              <p>{touch.title}</p>
              <p>{touch.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

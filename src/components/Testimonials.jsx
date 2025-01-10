import React from "react";
import { FaA, FaD, FaP, FaV } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div>
      <div className="flex flex-col mx-4 lg:mx-24 gap-6 items-center lg:items-center lg:justify-evenly mt-20 min-h-[70vh] font-poppins">
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <div>
            <img
              src="src\assets\logo_sil.svg"
              alt="Example"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div>
            <span className="lg:text-lg text-md font-normal text-[#68747A]">
              What people are saying?
            </span>
          </div>
          <div className="flex w-full items-center justify-center">
            <span className="lg:text-5xl text-3xl font-semibold text-wrap text-[#051b2e]">
              Testimonials
            </span>
          </div>
        </div>
        <div class="-mx-3 md:flex items-start">
          <div class="px-3 md:w-1/3">
            <div class="w-full mx-auto rounded-lg bg-white border border-[#cfcac5] p-5 text-[#051b2e] font-light mb-6 hover:shadow-lg hover:border-black transition-all ease-in-out duration-300">
              <div class="w-full flex mb-4 items-center">
                <div class="rounded-full w-10 h-10 bg-gray-50 border flex items-center justify-center border-[#cfcac5]">
                  <FaD />
                </div>
                <div class="flex-grow pl-3">
                  <h6 class="font-bold text-sm  text-gray-600">
                    Daksha Shetty
                  </h6>
                </div>
              </div>
              <div class="w-full">
                <p class="text-sm leading-tight">
                  <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  Life-Changing Experience.
                </p>
                <p class="text-sm leading-tight">
                  {" "}
                  I had a problem with my eyesight. The topmost eye surgeons in
                  Mumbai gave up on my case and didn’t take it, as my right eye
                  vision was supposed to completely vanish. Then I met Dr. Divij
                  Tanna, and he was the one who gave me 100% hope and confidence
                  that I would regain my vision.
                </p>
                <p class="text-sm leading-tight">
                  {" "}
                  Trust me, within 15 days, I got the result. I was so happy and
                  got a chance to see the beautiful world again. Later, I went
                  back to the topmost eye surgeons to verify whether my eye
                  vision had returned to normal. In writing, I received the
                  statement: "There is no problem in this eyesight now." All
                  thanks to him for giving me back my life!
                  <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="px-3 md:w-1/3">
            <div class="w-full mx-auto rounded-lg bg-white border border-[#cfcac5] p-5 text-[#051b2e] font-light mb-6 hover:shadow-lg hover:border-black transition-all ease-in-out duration-300">
              <div class="w-full flex mb-4 items-center">
                <div class="rounded-full w-10 h-10 bg-gray-50 border flex items-center justify-center border-[#cfcac5]">
                  <FaP />
                </div>
                <div class="flex-grow pl-3">
                  <h6 class="font-bold text-sm  text-gray-600">Pooja Rajan</h6>
                </div>
              </div>
              <div class="w-full">
                <p class="text-sm leading-tight">
                  <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  I have a deformity in my left wrist and right leg. All the
                  doctors, including one of the topmost rheumatologists, said
                  that my hand would never become straight. When I met Dr. Divij
                  Tanna, he assured and guaranteed me that my hand would be
                  okay.
                </p>{" "}
                <p class="text-sm leading-tight">
                  After taking his prescribed medicine, I noticed significant
                  improvement in my wrist, and it is now moving. Thanks to the
                  doctor, I have regained hope. He is truly one of the most
                  fantastic doctors I have ever met.
                </p>
                <p class="text-sm leading-tight">
                  Thank you so much, doctor!
                  <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
            <div class="w-full mx-auto rounded-lg bg-white border border-[#cfcac5] p-5 text-[#051b2e] font-light mb-6 hover:shadow-lg hover:border-black transition-all ease-in-out duration-300">
              <div class="w-full flex mb-4 items-center">
                <div class="rounded-full w-10 h-10 bg-gray-50 border flex items-center justify-center border-[#cfcac5]">
                  <FaP />
                </div>
                <div class="flex-grow pl-3">
                  <h6 class="font-bold text-sm  text-gray-600">Prajwal Soni</h6>
                </div>
              </div>
              <div class="w-full">
                <p class="text-sm leading-tight">
                  <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  I had a problem with my optic nerve, which caused me to lose
                  vision in one of my eyes. I consulted several doctors,
                  including a Padma Shri-awarded doctor, but there was no
                  improvement at all. Then I came across Dr. Divij Tanna, and
                  with his medicines, I have seen improvement in my vision.
                </p>{" "}
                <p class="text-sm leading-tight">
                  Additionally, I was experiencing numerous side effects from
                  the steroids prescribed during my allopathy treatment. Dr.
                  Tanna gave me medicines that helped reverse those side
                  effects.
                </p>
                <p class="text-sm leading-tight">
                  Dr. Tanna is truly a genius. Thank you so much, Dr. Tanna!
                  <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="px-3 md:w-1/3">
            <div class="w-full mx-auto rounded-lg bg-white border border-[#cfcac5] p-5 text-[#051b2e] font-light mb-6 hover:shadow-lg hover:border-black transition-all ease-in-out duration-300">
              <div class="w-full flex mb-4 items-center">
                <div class="rounded-full w-10 h-10 bg-gray-50 border flex items-center justify-center border-[#cfcac5]">
                  <FaV />
                </div>
                <div class="flex-grow pl-3">
                  <h6 class="font-bold text-sm  text-gray-600">
                    Vibhuti Yadav
                  </h6>
                </div>
              </div>
              <div class="w-full">
                <p class="text-sm leading-tight">
                  <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  Dynamic Healing is an excellent treatment that heals you
                  completely—physically, mentally, and emotionally. Any disease
                  or complaint you have can be completely cured by Dr. Divij
                  Tanna. Keep faith in him, and he will help you overcome the
                  tensions and burdens you carry on your shoulders.
                </p>
                <p class="text-sm leading-tight">
                  "Keep trusting," "keep going strong," and "be healed."
                  <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
            <div class="w-full mx-auto rounded-lg bg-white border border-[#cfcac5] p-5 text-[#051b2e] font-light mb-6 hover:shadow-lg hover:border-black transition-all ease-in-out duration-300">
              <div class="w-full flex mb-4 items-center justify-center">
                <div class="rounded-full w-10 h-10 bg-gray-50 border flex items-center justify-center border-[#cfcac5]">
                  <FaA />
                </div>
                <div class="flex-grow pl-3">
                  <h6 class="font-bold text-sm  text-gray-600">
                    Krishna Patel
                  </h6>
                </div>
              </div>
              <div class="w-full">
                <p class="text-sm leading-tight">
                  <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  The approach by Dr. Divij Tanna at Dynamic Healing is truly
                  exceptional! I have been admitted to the hospital twice for
                  different diagnoses—firstly for an idiopathic cause and, more
                  recently, for dengue fever. Both times, the hospital
                  management failed to provide effective treatment. However, my
                  complete recovery was achieved through his treatment, and that
                  too in an extremely short duration.
                </p>
                <p class="text-sm leading-tight">
                  Thank you so much, Dr. Tanna!
                  <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

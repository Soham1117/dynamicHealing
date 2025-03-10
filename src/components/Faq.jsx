import Question from "./Question";
import logo from "../assets/logo_sil.svg";

const Faq = () => {
  const questions = [
    {
      question: "01. Who needs Dynamic Healing Sessions?",
      answer:
        "DHS is definitely beneficial for a person already suffering from some ailment as it detects the root cause of the disease and treats it, thus reducing the chances of returning the disease, and of course, it is without side effects.",
    },
    {
      question: "02. Are there any side effects of this?",
      answer:
        "As energy balance is done by decoding body intelligence, and accordingly the energy supplement is given, there are no side effects of this treatment.",
    },
    {
      question:
        "03. Why DHS is the most powerful and most efficient than other healing treatments?",
      answer:
        "During Dynamic Healing session, every individual is analyzed as per their own uniqueness. As they say, no two persons are alike; accordingly treatment of patients having the same disease also varies. The process involves re-establishing energetic harmony and reinforcing the body's natural defense and immune system in order to take the body on the path of self-healing.",
    },
    {
      question: "04. What ailments are covered under this session?",
      answer:
        "Any disease which manifests has a root cause that may differ from the disease; disease is the external cause of the deeper root cause which can be at any level i.e. physical, mental, emotional, or auric level. Due to this comprehensive spectrum analysis, any individual can be benefited.",
    },
    {
      question: "05. How does it complement your ongoing treatment?",
      answer:
        "For people who are suffering for a long time and are on the support of chemical drugs, taking this session can reduce their dependency on chemical drugs gradually, with the concern of their family physician.",
    },
  ];

  return (
    <div>
      <div className="lg:flex hidden flex-col mx-24  lg:flex-row lg:flex-wrap gap-2 items-center lg:items-center mt-12 lg:justify-center min-h-[80vh] mb-20 font-poppins">
        <div className="bg-[#c1dcff] w-full h-[1px]"></div>
        <div className="flex flex-col items-center justify-center gap-10 w-full ">
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col items-center justify-center gap-2">
              <div>
                <img
                  src={logo}
                  alt="Example"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div>
                <span className="text-lg font-normal text-[#68747A]">
                  Your Path to Better Health Begins Here
                </span>
              </div>
            </div>
            <div>
              <span className="text-5xl  font-semibold text-wrap text-[#051b2e]">
                Frequently Asked Questions
              </span>
            </div>

            {questions.map((question) => (
              <Question key={question.question} question={question} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex lg:hidden flex-col mx-6 gap-16 items-center mt-12 justify-center min-h-[80vh] mb-20 font-poppins">
        <div className="bg-[#c1dcff] w-full h-[1px]"></div>
        <div className="flex flex-col items-center justify-center gap-10 w-full ">
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col items-center justify-center gap-2">
              <div>
                <img
                  src={logo}
                  alt="Example"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div>
                <span className="text-base font-normal text-[#68747A]">
                  Your Path to Better Health Begins Here
                </span>
              </div>
            </div>
            <div>
              <span className="text-2xl font-semibold text-wrap text-[#051b2e]">
                Frequently Asked Questions
              </span>
            </div>

            {questions.map((question) => (
              <Question key={question.question} question={question} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/journal.scss";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Journal = () => {
  const [activePaper, setActivePaper] = useState(0);

  const contents = [
    {
      buttonClass: "ch1 btn",
      buttonStyle: {
        backgroundColor: "#E9827F",
        left: "10%",
        top: "6%",
        rotate: "-4deg",
      },
      paper: (
        <div className="papercont">
          <p className="chswiper">Chapter 1</p>
          <p className="title">Find the Right Motivation</p>
          <p className="text">
            Why designing digital products for kids? There are several
            opportunities, from a business and a design perspective. In this
            chapter you'll discover some of them to help you find yours.
          </p>
        </div>
      ),
    },
    {
      buttonClass: "ch2 btn",
      buttonStyle: {
        backgroundColor: "#553F76",
        left: "7%",
        top: "20%",
        rotate: "-1deg",
      },
      paper: (
        <div className="papercont">
          <p className="chswiper">Chapter 2</p>
          <p className="title">Before You Start, Know the Industry</p>
          <p className="text">
            Knowing the market, the opportunities and how to exploit them and
            obstacles and how to overcome them. What's out there already? What
            is working and what is not? Many products claim to be "educational",
            but what does it really mean? What is the right balance between
            education and entertainment?
          </p>
        </div>
      ),
    },
    {
      buttonClass: "ch3 btn",
      buttonStyle: {
        backgroundColor: "#497369",
        left: "11%",
        top: "33%",
        rotate: "8deg",
      },
      paper: (
        <div className="papercont">
          <p className="chswiper">Chapter 3</p>
          <p className="title">Know Your Target Audience</p>
          <p className="text">
            The main peculiarity of digital products for kids is their target.
            You won't deal with just kids, but with their parents (a.k.a. the
            ones who have the money) and the teachers. How can you please such a
            diverse audience? What is each of these targets looking for in a
            product for children?
          </p>
        </div>
      ),
    },
    {
      buttonClass: "ch4 btn",
      buttonStyle: {
        backgroundColor: "#292727",
        left: "8%",
        top: "48%",
        rotate: "2deg",
      },
      paper: (
        <div className="papercont">
          <p className="chswiper">Chapter 4</p>
          <p className="title">Concept</p>
          <p className="text">
            Establishing a solid foundation for your product is of uttermost
            importance for its success. Understanding which platform to choose
            depending on your target audience, for example: is it going to be a
            native app or a web app? But also where to look for ideas, passive
            vs. active learning, and, if educational, what subjects work best.
          </p>
        </div>
      ),
    },
    {
      buttonClass: "ch5 btn",
      buttonStyle: {
        backgroundColor: "#E9827F",
        left: "11%",
        bottom: "25%",
        rotate: "-5deg",
      },
      paper: (
        <div className="papercont">
          <p className="chswiper">Chapter 5</p>
          <p className="title">Gamification</p>
          <p className="text">
            Gamification is not just a layer you place on top of the experience
            at the end of the design process. It's a strategy that requires
            careful planning and must be embedded in the UX since the very
            beginning. But what does constitute an effective gamification? What
            are the ingredients at our disposal and how can we make the best out
            of them?
          </p>
        </div>
      ),
    },
    {
      buttonClass: "ch6 btn",
      buttonStyle: {
        backgroundColor: "#76698D",
        left: "10%",
        bottom: "9%",
        rotate: "2deg",
      },
      paper: (
        <div className="papercont">
          <p className="chswiper">Chapter 6</p>
          <p className="title">Safety Measures</p>
          <p className="text">
            In children's products, safety must be a priority. There are legal
            and ethical implications to consider. Protecting the young users
            when interacting with our product must be on top of our mind and
            here are the things you should know and the best practices you
            should follow.
          </p>
        </div>
      ),
    },
    {
      buttonClass: "ch7 btn",
      buttonStyle: {
        backgroundColor: "#487369",
        right: "11%",
        top: "6%",
        rotate: "3deg",
      },
      paper: (
        <div className="papercont">
          <p className="chswiper">Chapter 7</p>
          <p className="title"> Interaction Design</p>
          <p className="text">
            This is one of the core (and chunkier) chapters of this book. We
            talk about mental models, cognitive load, motor and cognitive skills
            development in children and much more. What interaction can I use in
            a product for preschoolers? And which ones for older kids? Young
            children can't read yet, how can I solve this problem? You'll find
            the answers to these questions and many others in this chapter.
          </p>
        </div>
      ),
    },
    {
      buttonClass: "ch8 btn",
      buttonStyle: {
        backgroundColor: "#eb8280",
        right: "9%",
        top: "20%",
        rotate: "-3deg",
      },
      paper: (
        <div className="papercont">
          <p className="chswiper">Chapter 8</p>
          <p className="title"> UI Design</p>
          <p className="text">
            This is another thick portion of the book. UI is a big part of the
            UX of your product and you want to make this right. Here you'll find
            hundreds of tips and best practices, from defining a color palette,
            understanding how to choose a typeface and its sizing, icon design
            for kids, proper sizing of buttons and touch targets, animations and
            sounds, and so much more, even a guide on how to create a character
            for your product.
          </p>
        </div>
      ),
    },
    {
      buttonClass: "ch9 btn",
      buttonStyle: {
        backgroundColor: "#292727",
        right: "12%",
        top: "34%",
        rotate: "8deg",
      },
      paper: (
        <div className="papercont">
          <p className="chswiper">Chapter 9</p>
          <p className="title">User Testing with Kids</p>
          <p className="text">
            User testing with children is not the same as with adults. There are
            many things to keep in mind when conducting user interviews with
            kids, from getting parent's consent, to make them feel at ease and
            establish a empathic connection with them, while, at the same time,
            providing a neutral feedback to their observations to avoid swaying
            the test results.
          </p>
        </div>
      ),
    },
    {
      buttonClass: "ch10 btn",
      buttonStyle: {
        backgroundColor: "#74668B",
        right: "8%",
        top: "48%",
        rotate: "2deg",
      },
      paper: (
        <div className="papercont">
          <p className="chswiper">Chapter 10</p>
          <p className="title">Market Your Product</p>
          <p className="text">
            Unless it's a nonprofit project, a product is also supposed to make
            money. What are the most common monetization strategies out there?
            Should my product be a subscription, a freemium, a one-time payment
            product or what? Monetization models are not interchangeable, and
            the one that works great for a product might not work at all for
            another. Also, how can I get users?
          </p>
        </div>
      ),
    },
    {
      buttonClass: "ch11 btn",
      buttonStyle: {
        backgroundColor: "#563F77",
        right: "11%",
        bottom: "27%",
        rotate: "-5deg",
      },
      paper: (
        <div className="papercont">
          <p className="chswiper">Chapter 11</p>
          <p className="title">Beyond the Screen</p>
          <p className="text">
            Beyond the Screen As new technologies arise, we’ll see more
            opportunities for new digital products and new experiences.
            Combination of real toys with digital products are already out
            there, as well as some very interesting applications of AR. Where
            are we going? What's next?
          </p>
        </div>
      ),
    },
    {
      buttonClass: "ch12 btn",
      buttonStyle: {
        backgroundColor: "#EA817F",
        right: "9%",
        bottom: "9%",
        rotate: "2deg",
      },
      paper: (
        <div className="papercont">
          <p className="chswiper">Chapter 12</p>
          <p className="title">Conclusion</p>
          <p className="text">
            Wrap-up of the journey into digital product design for children with
            some final considerations from the author.
          </p>
        </div>
      ),
    },
  ];

  const handleButtonClick = (index) => {
    setActivePaper(index);
  };

  return (
    <div className="journal-container">
      <div className="button-row">
        {contents.map((content, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            style={content.buttonStyle}
            className={content.buttonClass}
          >
            <p>{content.buttonText}</p>
          </button>
        ))}
      </div>
      <div className="papers-wrapper">
        <div
          className="papers-container"
          style={{
            transform: `translateY(${-activePaper * 420}px)`,
          }}
        >
          {contents.map((content, index) => (
            <div
              key={index}
              className={`paper ${index === activePaper ? "active" : ""}`}
              style={{
                zIndex: index === activePaper ? 2 : 1,
                opacity: index === activePaper ? 1 : 0.7,
                transform: `rotate(${(index - activePaper) * 5}deg)`,
              }}
            >
              {content.paper}
            </div>
          ))}
        </div>
      </div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {contents.map((content, index) => (
          <SwiperSlide>
            <div key={index} className="paper">
              {content.paper}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Journal;

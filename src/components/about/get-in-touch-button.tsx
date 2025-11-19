import "./get-in-touch-button.css";

export const GetInTouchButton = () => {
  return (
    <a href="#contact" className="button1 text-lg md:text-2xl">
      Get in touch
      <span className="button1__icon-wrapper">
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="button1__icon-svg w-[13px] md:w-[16px]"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>

        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="button1__icon-svg button1__icon-svg--copy w-[13px] md:w-[16px]"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
    </a>
  );
};

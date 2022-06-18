import { useEffect, useRef } from "react";

const React = require("react"); //eslint-disable-line no-unused-vars
const ReactDOM = require("react-dom");
const PropTypes = require("prop-types");

const iframeStyle = {
  width: "100%",
  height: "300px",
};

function JotformEmbed({ src, className, scrolling }) {
  const ref = useRef(null);

  useEffect(() => {
    window.addEventListener("message", handleFormMessage, false);

    return () => {
      window.removeEventListener("message", handleFormMessage);
    };
  }, []);

  const handleFormMessage = (e) => {
    if (!ref.current) {
      return;
    }
    if (e.data.action && e.data.action === "submission-completed") {
      onFormSubmit();
    }
    if (!e.data.split) {
      return;
    }

    const args = e.data.split(":");

    switch (args[0]) {
      case "setHeight":
        ref.current.style.height = `${+args[1] + 100}px`;
        break;
      case "scrollIntoView":
        ref.current.scrollIntoView();
        break;
      case "collapseErrorPage":
        if (ref.clientHeight > window.innerHeight) {
          ref.style.height = `${window.innerHeight}px`;
        }
        break;
      case "reloadPage":
        window.location.reload();
        break;
    }

    const urls = {
      docurl: encodeURIComponent(global.document.URL),
      referrer: encodeURIComponent(global.document.referrer),
    };
    ref.current.contentWindow.postMessage(
      JSON.stringify({ type: "urls", value: urls }),
      "*"
    );
  };

  return (
    <iframe
      ref={ref}
      style={iframeStyle}
      className={className}
      src={src}
      frameBorder={0}
      scrolling={scrolling ? "yes" : "no"}
    />
  );
}

export default JotformEmbed;

JotformEmbed.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  scrolling: PropTypes.bool,
  onFormSubmit: PropTypes.func,
};

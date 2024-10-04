import { useEffect } from "react";
import $ from "jquery";

const Preloader = () => {
  useEffect(() => {
    // Preloader
    $(window).on("load", function() {
      $("#status").delay(1000).fadeOut()
      $("#preloader").delay(1000).fadeOut("slow")
    });
  }, []);

  return (
    <div id="preloader">
      <div id="status">
        <img src="images/loader.gif" id="preloader_image" alt="loader" />
      </div>
    </div>
  );
};

export default Preloader;

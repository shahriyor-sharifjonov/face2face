export function init() {
    $(document).ready(function() {
        $(".accordion > .accordion__button").on("click", function() {
          if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
              .siblings(".accordion__content")
              .slideUp(200);
          } else {
            $(".accordion > .accordion__button").removeClass("active");
            $(this).addClass("active");
            $(".accordion__content").slideUp(200);
            $(this)
              .siblings(".accordion__content")
              .slideDown(200);
          }
        });
    });
}
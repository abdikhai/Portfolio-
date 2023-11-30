$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else if (this.scrollY < 20) {
      $(".navbar").removeClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // show/hide btn slide up
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  $(".page-scroll").click(function (e) {
    $("html").css("scrollBehavior", "auto");
    var tujuan = $(this).attr("href");
    var elemenTujuan = $(tujuan);

    $("html, body").animate(
      {
        scrollTop: elemenTujuan.offset().top - 50, // => -50 digunakan agar judul dari elemennya tidak ketutupan
      },
      1000,
      "easeInOutExpo"
    );

    e.preventDefault();
  });

  // slide-up
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });
});

// animation reveal
const sr = ScrollReveal({
  origin: "left",
  distance: "500px",
  duration: 1500,
  reset: true,
});

sr.reveal(`.home-text`, {
  interval: 200,
});

const rs = ScrollReveal({
  origin: "right",
  distance: "100px",
  duration: 1500,
  reset: true,
});

sr.reveal(`.home-img`, {
  interval: 200,
});

const srr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 900,
  reset: true,
});

sr.reveal(
  `.about-text, .school, .keahlian, .pengalaman,  .skill-item, .sosmed, .services-items, .project-items, .contact-item, .contact-form`,
  {
    interval: 200,
  }
);

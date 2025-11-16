if (typeof $ !== "undefined") {
    $(document).ready(function() {

        $('#menu').click(function() {
            $(this).toggleClass('fa-times');
            $('.navbar').toggleClass('nav-toggle');
        });

        $(window).on('scroll load', function() {
            $('#menu').removeClass('fa-times');
            $('.navbar').removeClass('nav-toggle');

            if (window.scrollY > 60) {
                document.querySelector('#scroll-top').classList.add('active');
            } else {
                document.querySelector('#scroll-top').classList.remove('active');
            }

            // scroll spy
            $('section').each(function() {
                let height = $(this).height();
                let offset = $(this).offset().top - 200;
                let top = $(window).scrollTop();
                let id = $(this).attr('id');

                if (top > offset && top < offset + height) {
                    $('.navbar ul li a').removeClass('active');
                    $(`.navbar a[href="#${id}"]`).addClass('active');
                }
            });
        });

        // smooth scrolling
        $('a[href*="#"]').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top,
            }, 500, 'linear')
        });

        // FORM SUBMIT
        $("#contact-form").submit(function(event) {
            event.preventDefault();

            emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

            emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    document.getElementById("contact-form").reset();
                    alert("Form Submitted Successfully");
                }, function(error) {
                    console.log('FAILED...', error);
                    alert("Form Submission Failed! Try Again");
                });
        });

    });
}

// visibility change
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Phú Tô";
        $("#favicon").attr("href", "assets/images/favicon.png");
    } else {
        document.title = "Come Back To Portfolio";
        $("#favicon").attr("href", "assets/images/favhand.png");
    }
});

// typing text (tắt nếu không có phần tử .typing-text để tránh lỗi)
if (typeof Typed !== "undefined" && document.querySelector(".typing-text")) {
    var typed = new Typed(".typing-text", {
        strings: ["lập trình Android", "lập trình với C++ và Python", "tìm hiểu Firebase", "sử dụng GitHub trong học tập"],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
    });
}

// hiển thị kỹ năng (dùng dữ liệu khai báo sẵn để tránh lỗi fetch khi mở file trực tiếp)
function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";

    skills.forEach((skill) => {
        skillHTML += `
        <div class="bar">
            <div class="info">
                <img src="${skill.icon}" alt="skill" />
                <span>${skill.name}</span>
            </div>
        </div>`;
    });

    skillsContainer.innerHTML = skillHTML;
}

const skillsData = [
    { name: "C++", icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" },
    { name: "Python", icon: "https://img.icons8.com/color/48/000000/python--v1.png" },
    { name: "Android", icon: "https://img.icons8.com/fluency/48/000000/android-os.png" },
    { name: "Firebase", icon: "https://img.icons8.com/color/48/000000/firebase.png" },
    { name: "GitHub", icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png" },
    { name: "WordPress", icon: "https://img.icons8.com/color/48/000000/wordpress.png" }
];

showSkills(skillsData);
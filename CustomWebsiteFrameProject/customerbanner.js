const bannerSlide =() => {
    const bannerCompanies = document.querySelector('#customer-banner ul.companies');
    const banner = document.querySelector('#customer-banner');


    banner.addEventListener('load',()=>{

        // Animate Banner Movement
        bannerCompanies.style.animation = `bannerFade 0.5s ease forwards`;

    });
}

bannerSlide();
